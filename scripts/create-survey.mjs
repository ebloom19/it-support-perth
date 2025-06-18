#!/usr/bin/env node

/**
 * PostHog Survey Creation Script
 * Creates the security assessment survey via PostHog API
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
      // Try next file
      continue;
    }
  }
}

loadEnvFile();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Survey configuration
const SURVEY_CONFIG = {
  name: 'IT Security Assessment - Perth Business Risk Evaluation',
  description: 'Free cybersecurity assessment for Perth businesses. Get personalized recommendations and a security score to identify vulnerabilities and strengthen your defenses.',
  type: 'popover',
  questions: [
    // Contact Information
    {
      type: 'text',
      question: 'First and last name',
      required: true
    },
    {
      type: 'text',
      question: 'Phone number',
      description: 'We\'ll use this to schedule your free consultation',
      required: true
    },
    {
      type: 'email',
      question: 'Email address',
      required: true
    },
    {
      type: 'text',
      question: 'Your company name',
      required: true
    },
    {
      type: 'single_choice',
      question: 'Your company size',
      choices: ['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'],
      required: true
    },
    {
      type: 'text',
      question: 'Your job title (e.g., CEO, CFO, etc.)',
      required: true
    },
    {
      type: 'single_choice',
      question: 'How did you hear about us?',
      choices: ['Google search', 'Existing client', 'Friends', 'Social Media', 'Others'],
      required: true
    },

    // Security Assessment Questions
    {
      type: 'single_choice',
      question: 'How often do you conduct a comprehensive security audit?',
      choices: ['Weekly', 'Monthly', 'Annually', 'Never', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Are employees trained regularly on security awareness (e.g., phishing emails)?',
      choices: ['Yes, we have mandatory training.', 'Occasionally, but not consistently.', 'No, we do not provide training.']
    },
    {
      type: 'single_choice',
      question: 'Do you have multi-factor authentication (MFA) enabled across all critical systems and your email accounts?',
      choices: ['Yes', 'Partially', 'No', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Do you have a spam filter system to scan and block spam or scammers before they reach your inbox?',
      choices: ['Yes', 'No', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Do you use firewalls, such as FortiGate, to monitor and block unauthorized access to your network?',
      choices: ['Yes, we have robust firewall systems.', 'We have basic firewalls but no advanced configurations.', 'No', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'How often do you update and patch your systems?',
      choices: ['As soon as updates are available', 'Every 1–3 months', 'Less frequently', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Do you have an incident response plan in case of a cybersecurity breach?',
      choices: ['Yes, and it is regularly tested.', 'Yes, but it hasn\'t been tested.', 'No', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'How frequently do you back up critical business data?',
      choices: ['Daily', 'Weekly', 'Monthly', 'Less frequently', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Are your backups stored securely offsite or in the cloud?',
      choices: ['Yes', 'No', 'Not Sure']
    },
    {
      type: 'single_choice',
      question: 'Have you tested your disaster recovery plan in the past year?',
      choices: ['Yes', 'No', 'We don\'t have a plan', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Have you conducted a vulnerability assessment or penetration test in the last 12 months?',
      choices: ['Yes', 'No', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'How often do you monitor network activity for suspicious behavior?',
      choices: ['24/7 monitoring', 'Daily checks', 'Weekly checks', 'Occasionally', 'Never', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Ransomware attacks are increasingly common against small businesses. What would be the impact on your business if a ransomware attack stopped you from accessing your network?',
      choices: [
        'We would pay the ransom to regain access quickly.',
        'We would attempt to negotiate access or rebuild the network over time.',
        'It would cause a severe short-term impact, but we would recover.',
        'It could be catastrophic, and our business might not survive.',
        'We are confident in our defenses and believe this would never happen.'
      ]
    },
    {
      type: 'single_choice',
      question: 'Do you enforce policies for BYOD (Bring Your Own Device) security?',
      choices: ['Yes', 'No', 'Not applicable', 'Not sure']
    },
    {
      type: 'single_choice',
      question: 'Are you using remote monitoring tools (RMM) to proactively detect and respond to IT issues?',
      choices: ['Yes', 'No', 'Not sure']
    }
  ],
  appearance: {
    backgroundColor: '#ffffff',
    submitButtonColor: '#2563eb',
    ratingButtonColor: '#2563eb',
    textColor: '#1f2937',
    submitButtonText: 'Get My Security Score',
    thankyouMessageHeader: 'Thank you for completing our security assessment!',
    thankyouMessageDescription: 'We\'ll analyze your responses and contact you within 24 hours with your personalized security score and recommendations.',
    displayThankYouMessage: true,
    whiteLabel: false
  },
  targeting: {
    urlMatchType: 'contains',
    urlMatchValue: 'itsupportperth.com.au'
  },
  start_date: new Date().toISOString(),
  end_date: null
};

async function createSurvey() {
  const projectId = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID || process.env.POSTHOG_PROJECT_ID;
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (!projectId || !apiKey) {
    console.error('❌ Missing required environment variables:');
    console.error('   NEXT_PUBLIC_POSTHOG_PROJECT_ID (or POSTHOG_PROJECT_ID)');
    console.error('   POSTHOG_PERSONAL_API_KEY');
    console.error('');
    console.error('Add these to your .env.local file and try again.');
    process.exit(1);
  }

  console.log('🔐 Creating IT Security Assessment Survey...');
  console.log(`📍 PostHog Host: ${posthogHost}`);
  console.log(`📋 Project ID: ${projectId}`);
  console.log('');

  try {
    const response = await fetch(`${posthogHost}/api/projects/${projectId}/surveys/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(SURVEY_CONFIG)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`PostHog API error (${response.status}): ${errorText}`);
    }

    const survey = await response.json();
    
    console.log('✅ Survey created successfully!');
    console.log('');
    console.log('📊 Survey Details:');
    console.log(`   Name: ${survey.name}`);
    console.log(`   ID: ${survey.id}`);
    console.log(`   Created: ${new Date(survey.created_at).toLocaleString()}`);
    console.log('');
    console.log('🔗 Survey URL:');
    console.log(`   ${posthogHost}/surveys/${survey.id}`);
    console.log('');
    console.log('📝 Next Steps:');
    console.log('   1. Copy the Survey ID above');
    console.log('   2. Update your PostHogSurveyProvider.tsx with this ID');
    console.log('   3. Test the survey on your website');
    console.log('   4. Monitor responses in PostHog dashboard');
    console.log('');
    console.log('🎯 Survey Features:');
    console.log('   • 22 comprehensive security questions');
    console.log('   • Contact information collection');
    console.log('   • Professional brand styling');
    console.log('   • Lead generation and qualification');
    console.log('   • Automatic security scoring');

    return survey;

  } catch (error) {
    console.error('❌ Failed to create survey:', error.message);
    console.error('');
    console.error('💡 Troubleshooting:');
    console.error('   • Check your PostHog credentials');
    console.error('   • Verify project ID is correct');
    console.error('   • Ensure API key has survey permissions');
    console.error('   • Check network connectivity');
    process.exit(1);
  }
}

// Run the script
createSurvey().catch(console.error);