#!/usr/bin/env node

/**
 * Get Survey Details
 * Fetch the created survey details including question IDs
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env files
function loadEnvFile() {
  const envFiles = ['.env.development.local', '.env.local', '.env'];
  
  for (const envFile of envFiles) {
    try {
      const envPath = join(dirname(fileURLToPath(import.meta.url)), '..', envFile);
      const envContent = readFileSync(envPath, 'utf8');
      
      envContent.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value.replace(/^["']|["']$/g, ''); // Remove quotes
        }
      });
      console.log(`✅ Loaded environment from ${envFile}`);
      break;
    } catch (error) {
      continue;
    }
  }
}

loadEnvFile();

async function getSurveyDetails() {
  const projectId = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID || process.env.POSTHOG_PROJECT_ID;
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';
  const surveyId = '01978338-21fe-0000-546c-125611653820'; // Our created survey

  if (!projectId || !apiKey) {
    console.error('❌ Missing required environment variables');
    process.exit(1);
  }

  console.log('🔍 Getting survey details...');
  console.log(`📋 Survey ID: ${surveyId}`);
  console.log('');

  try {
    // Get specific survey details
    const response = await fetch(`${posthogHost}/api/projects/${projectId}/surveys/${surveyId}/`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`PostHog API error (${response.status}): ${errorText}`);
    }

    const survey = await response.json();
    
    console.log('📊 Survey Structure:');
    console.log(JSON.stringify(survey, null, 2));
    
    console.log('\n🔍 Question IDs for Manual Capture:');
    if (survey.questions && survey.questions.length > 0) {
      survey.questions.forEach((question, index) => {
        console.log(`${index + 1}. "${question.question}"`);
        console.log(`   ID: ${question.id}`);
        console.log(`   Type: ${question.type}`);
        if (question.choices) {
          console.log(`   Choices: ${JSON.stringify(question.choices)}`);
        }
        console.log('');
      });
    }

    // Generate TypeScript interface
    console.log('📝 TypeScript Interface:');
    console.log('```typescript');
    console.log('interface SurveyQuestion {');
    console.log('  id: string;');
    console.log('  question: string;');
    console.log('  type: string;');
    console.log('  choices?: string[];');
    console.log('}');
    console.log('');
    console.log('const SURVEY_QUESTIONS: SurveyQuestion[] = [');
    if (survey.questions) {
      survey.questions.forEach((question, index) => {
        console.log('  {');
        console.log(`    id: "${question.id}",`);
        console.log(`    question: "${question.question}",`);
        console.log(`    type: "${question.type}",`);
        if (question.choices) {
          console.log(`    choices: ${JSON.stringify(question.choices)}`);
        }
        console.log('  }' + (index < survey.questions.length - 1 ? ',' : ''));
      });
    }
    console.log('];');
    console.log('```');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

getSurveyDetails().catch(console.error);