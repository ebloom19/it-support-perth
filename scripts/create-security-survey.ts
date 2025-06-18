/**
 * Script to create a Security Assessment Survey in PostHog
 * This creates a comprehensive security assessment survey with scoring
 */

// PostHog configuration for security assessment survey

// Survey configuration - no PostHog client needed here

interface SurveyQuestion {
  type: 'single_choice' | 'multiple_choice' | 'text' | 'number' | 'email';
  question: string;
  description?: string;
  required?: boolean;
  choices?: string[];
  points?: Record<string, number>; // For scoring questions
}

const securityAssessmentQuestions: SurveyQuestion[] = [
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

  // Security Assessment Questions (with scoring)
  {
    type: 'single_choice',
    question: 'How often do you conduct a comprehensive security audit?',
    choices: ['Weekly', 'Monthly', 'Annually', 'Never', 'Not sure'],
    points: {
      'Weekly': 5,
      'Monthly': 4, 
      'Annually': 2,
      'Never': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Are employees trained regularly on security awareness (e.g., phishing emails)?',
    choices: ['Yes, we have mandatory training.', 'Occasionally, but not consistently.', 'No, we do not provide training.'],
    points: {
      'Yes, we have mandatory training.': 5,
      'Occasionally, but not consistently.': 2,
      'No, we do not provide training.': 0
    }
  },
  {
    type: 'single_choice',
    question: 'Do you have multi-factor authentication (MFA) enabled across all critical systems and your email accounts?',
    choices: ['Yes', 'Partially', 'No', 'Not sure'],
    points: {
      'Yes': 5,
      'Partially': 3,
      'No': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Do you have a spam filter system to scan and block spam or scammers before they reach your inbox?',
    choices: ['Yes', 'No', 'Not sure'],
    points: {
      'Yes': 5,
      'No': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Do you use firewalls, such as FortiGate, to monitor and block unauthorized access to your network?',
    choices: ['Yes, we have robust firewall systems.', 'We have basic firewalls but no advanced configurations.', 'No', 'Not sure'],
    points: {
      'Yes, we have robust firewall systems.': 5,
      'We have basic firewalls but no advanced configurations.': 3,
      'No': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'How often do you update and patch your systems?',
    choices: ['As soon as updates are available', 'Every 1–3 months', 'Less frequently', 'Not sure'],
    points: {
      'As soon as updates are available': 5,
      'Every 1–3 months': 3,
      'Less frequently': 1,
      'Not sure': 0
    }
  },
  {
    type: 'single_choice',
    question: 'Do you have an incident response plan in case of a cybersecurity breach?',
    choices: ['Yes, and it is regularly tested.', 'Yes, but it hasn\'t been tested.', 'No', 'Not sure'],
    points: {
      'Yes, and it is regularly tested.': 5,
      'Yes, but it hasn\'t been tested.': 3,
      'No': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'How frequently do you back up critical business data?',
    choices: ['Daily', 'Weekly', 'Monthly', 'Less frequently', 'Not sure'],
    points: {
      'Daily': 5,
      'Weekly': 4,
      'Monthly': 2,
      'Less frequently': 1,
      'Not sure': 0
    }
  },
  {
    type: 'single_choice',
    question: 'Are your backups stored securely offsite or in the cloud?',
    choices: ['Yes', 'No', 'Not Sure'],
    points: {
      'Yes': 5,
      'No': 0,
      'Not Sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Have you tested your disaster recovery plan in the past year?',
    choices: ['Yes', 'No', 'We don\'t have a plan', 'Not sure'],
    points: {
      'Yes': 5,
      'No': 2,
      'We don\'t have a plan': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Have you conducted a vulnerability assessment or penetration test in the last 12 months?',
    choices: ['Yes', 'No', 'Not sure'],
    points: {
      'Yes': 5,
      'No': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'How often do you monitor network activity for suspicious behavior?',
    choices: ['24/7 monitoring', 'Daily checks', 'Weekly checks', 'Occasionally', 'Never', 'Not sure'],
    points: {
      '24/7 monitoring': 5,
      'Daily checks': 4,
      'Weekly checks': 3,
      'Occasionally': 2,
      'Never': 0,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Ransomware attacks are increasingly common against small businesses. What would be the impact on your business if a ransomware attack stopped you from accessing your network?',
    choices: [
      'We would pay the ransom to regain access quickly.',
      'We would attempt to negotiate access or rebuild the network over time.',
      'It would cause a severe short-term impact, but we would recover.',
      'It could be catastrophic, and our business might not survive.',
      'We are confident in our defences and believe this would never happen.'
    ],
    points: {
      'We would pay the ransom to regain access quickly.': 1,
      'We would attempt to negotiate access or rebuild the network over time.': 2,
      'It would cause a severe short-term impact, but we would recover.': 3,
      'It could be catastrophic, and our business might not survive.': 0,
      'We are confident in our defences and believe this would never happen.': 4
    }
  },
  {
    type: 'single_choice',
    question: 'Do you enforce policies for BYOD (Bring Your Own Device) security?',
    choices: ['Yes', 'No', 'Not applicable', 'Not sure'],
    points: {
      'Yes': 5,
      'No': 0,
      'Not applicable': 3,
      'Not sure': 1
    }
  },
  {
    type: 'single_choice',
    question: 'Are you using remote monitoring tools (RMM) to proactively detect and respond to IT issues?',
    choices: ['Yes', 'No', 'Not sure'],
    points: {
      'Yes': 5,
      'No': 0,
      'Not sure': 1
    }
  }
];

export function getSecurityAssessmentSurveyConfig() {
  const surveyData = {
    name: 'IT Security Assessment - Perth Business Risk Evaluation',
    description: 'Free cybersecurity assessment for Perth businesses. Get personalized recommendations and a security score to identify vulnerabilities and strengthen your defenses.',
    type: 'survey',
    questions: securityAssessmentQuestions.map((q, index) => ({
      id: `q${index + 1}`,
      question: q.question,
      description: q.description,
      type: q.type,
      required: q.required || false,
      choices: q.choices || [],
      metadata: {
        points: q.points || {},
        category: index < 7 ? 'contact' : 'security'
      }
    })),
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
      urlMatchValue: 'itsupportperth.com.au',
      selector: null
    },
    start_date: new Date().toISOString(),
    end_date: null // No end date - runs indefinitely
  };

  return {
    success: true,
    surveyId: `security-assessment-${Date.now()}`,
    configuration: surveyData,
    message: 'Survey configuration ready for PostHog creation'
  };
}

// Calculate security score from responses
export function calculateSecurityScore(responses: Record<string, string>): {
  score: number;
  maxScore: number;
  percentage: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  recommendations: string[];
} {
  let totalScore = 0;
  let maxScore = 0;
  const recommendations: string[] = [];

  securityAssessmentQuestions.forEach((question, index) => {
    if (question.points) {
      const responseKey = `q${index + 1}`;
      const response = responses[responseKey];
      const points = question.points[response] || 0;
      
      totalScore += points;
      maxScore += Math.max(...Object.values(question.points));

      // Add recommendations based on low-scoring answers
      if (points <= 1) {
        switch (index) {
          case 7: // Security audits
            recommendations.push('Implement regular security audits (monthly recommended)');
            break;
          case 8: // Security training
            recommendations.push('Establish mandatory security awareness training for all employees');
            break;
          case 9: // MFA
            recommendations.push('Enable multi-factor authentication across all systems immediately');
            break;
          case 10: // Spam filter
            recommendations.push('Deploy enterprise-grade email security and spam filtering');
            break;
          case 11: // Firewall
            recommendations.push('Upgrade to next-generation firewall with advanced threat protection');
            break;
          case 12: // Updates
            recommendations.push('Implement automated patch management and update scheduling');
            break;
          case 13: // Incident response
            recommendations.push('Develop and test a comprehensive incident response plan');
            break;
          case 14: // Backups
            recommendations.push('Establish daily automated backups with offsite storage');
            break;
          case 15: // Offsite backups
            recommendations.push('Ensure backups are stored securely offsite or in the cloud');
            break;
          case 16: // Disaster recovery testing
            recommendations.push('Test disaster recovery plan annually');
            break;
          case 17: // Vulnerability assessment
            recommendations.push('Conduct annual vulnerability assessments and penetration testing');
            break;
          case 18: // Network monitoring
            recommendations.push('Implement 24/7 network monitoring and threat detection');
            break;
          case 20: // BYOD policies
            recommendations.push('Establish and enforce BYOD security policies');
            break;
          case 21: // RMM tools
            recommendations.push('Deploy remote monitoring and management (RMM) tools');
            break;
        }
      }
    }
  });

  const percentage = Math.round((totalScore / maxScore) * 100);
  
  let riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  if (percentage >= 80) riskLevel = 'Low';
  else if (percentage >= 60) riskLevel = 'Medium';
  else if (percentage >= 40) riskLevel = 'High';
  else riskLevel = 'Critical';

  return {
    score: totalScore,
    maxScore,
    percentage,
    riskLevel,
    recommendations: recommendations.slice(0, 5) // Top 5 recommendations
  };
}

// Export the configuration for use in components
export { securityAssessmentQuestions };