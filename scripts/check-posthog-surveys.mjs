#!/usr/bin/env node

/**
 * PostHog Survey Checker
 * Check existing surveys and API capabilities
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

async function checkPostHogSurveys() {
  const projectId = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID || process.env.POSTHOG_PROJECT_ID;
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (!projectId || !apiKey) {
    console.error('❌ Missing required environment variables');
    process.exit(1);
  }

  console.log('🔍 Checking PostHog surveys...');
  console.log(`📍 PostHog Host: ${posthogHost}`);
  console.log(`📋 Project ID: ${projectId}`);
  console.log('');

  try {
    // Get existing surveys
    const response = await fetch(`${posthogHost}/api/projects/${projectId}/surveys/`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`PostHog API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    
    console.log('📊 Existing Surveys:');
    if (data.results && data.results.length > 0) {
      data.results.forEach((survey, index) => {
        console.log(`   ${index + 1}. ${survey.name}`);
        console.log(`      ID: ${survey.id}`);
        console.log(`      Type: ${survey.type || 'N/A'}`);
        console.log(`      Created: ${new Date(survey.created_at).toLocaleString()}`);
        console.log(`      Active: ${survey.start_date ? 'Yes' : 'No'}`);
        console.log('');
      });
    } else {
      console.log('   No surveys found');
    }
    
    // Try to get survey schema/options
    console.log('🔍 Checking API capabilities...');
    
    // Test with minimal survey config
    const minimalSurvey = {
      name: 'Test Survey - DELETE ME',
      questions: [
        {
          type: 'text',
          question: 'Test question'
        }
      ]
    };

    const testResponse = await fetch(`${posthogHost}/api/projects/${projectId}/surveys/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(minimalSurvey)
    });

    if (testResponse.ok) {
      const testSurvey = await testResponse.json();
      console.log('✅ Created test survey successfully!');
      console.log(`   ID: ${testSurvey.id}`);
      console.log(`   Structure:`, JSON.stringify(testSurvey, null, 2));
      
      // Delete the test survey
      const deleteResponse = await fetch(`${posthogHost}/api/projects/${projectId}/surveys/${testSurvey.id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      });
      
      if (deleteResponse.ok) {
        console.log('🗑️ Test survey deleted');
      }
    } else {
      const errorText = await testResponse.text();
      console.log(`❌ Test survey creation failed: ${errorText}`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkPostHogSurveys().catch(console.error);