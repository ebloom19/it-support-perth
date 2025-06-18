/**
 * PostHog Survey API Integration
 * Creates and manages security assessment surveys via PostHog API
 */

interface PostHogSurveyQuestion {
  type: 'single_choice' | 'multiple_choice' | 'text' | 'email' | 'number';
  question: string;
  description?: string;
  required?: boolean;
  choices?: string[];
}

interface PostHogSurveyConfig {
  name: string;
  description: string;
  type: 'survey';
  questions: PostHogSurveyQuestion[];
  appearance: {
    backgroundColor: string;
    submitButtonColor: string;
    ratingButtonColor: string;
    textColor: string;
    submitButtonText: string;
    thankyouMessageHeader: string;
    thankyouMessageDescription: string;
    displayThankYouMessage: boolean;
    whiteLabel: boolean;
  };
  targeting: {
    urlMatchType: 'contains' | 'exact' | 'regex';
    urlMatchValue: string;
  };
  start_date?: string;
  end_date?: string | null;
}

const SECURITY_ASSESSMENT_SURVEY_CONFIG: PostHogSurveyConfig = {
  name: 'IT Security Assessment - Perth Business Risk Evaluation',
  description: 'Free cybersecurity assessment for Perth businesses. Get personalized recommendations and a security score to identify vulnerabilities and strengthen your defenses.',
  type: 'survey',
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

export class PostHogSurveyAPI {
  private baseURL: string;
  private projectId: string;
  private apiKey: string;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';
    this.projectId = process.env.POSTHOG_PROJECT_ID || '';
    this.apiKey = process.env.POSTHOG_PERSONAL_API_KEY || '';

    if (!this.projectId || !this.apiKey) {
      console.warn('PostHog API credentials not configured. Survey creation will be disabled.');
    }
  }

  /**
   * Create a new survey in PostHog
   */
  async createSurvey(surveyConfig: PostHogSurveyConfig = SECURITY_ASSESSMENT_SURVEY_CONFIG): Promise<{
    success: boolean;
    surveyId?: string;
    error?: string;
    data?: any;
  }> {
    if (!this.projectId || !this.apiKey) {
      return {
        success: false,
        error: 'PostHog API credentials not configured. Please set POSTHOG_PROJECT_ID and POSTHOG_PERSONAL_API_KEY environment variables.'
      };
    }

    try {
      const response = await fetch(`${this.baseURL}/api/projects/${this.projectId}/surveys/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyConfig)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`PostHog API error: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        surveyId: data.id,
        data
      };

    } catch (error) {
      console.error('Error creating PostHog survey:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Get all surveys from PostHog
   */
  async getSurveys(): Promise<{
    success: boolean;
    surveys?: any[];
    error?: string;
  }> {
    if (!this.projectId || !this.apiKey) {
      return {
        success: false,
        error: 'PostHog API credentials not configured.'
      };
    }

    try {
      const response = await fetch(`${this.baseURL}/api/projects/${this.projectId}/surveys/`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`PostHog API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        surveys: data.results || data
      };

    } catch (error) {
      console.error('Error fetching PostHog surveys:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Update a survey in PostHog
   */
  async updateSurvey(surveyId: string, updates: Partial<PostHogSurveyConfig>): Promise<{
    success: boolean;
    data?: any;
    error?: string;
  }> {
    if (!this.projectId || !this.apiKey) {
      return {
        success: false,
        error: 'PostHog API credentials not configured.'
      };
    }

    try {
      const response = await fetch(`${this.baseURL}/api/projects/${this.projectId}/surveys/${surveyId}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates)
      });

      if (!response.ok) {
        throw new Error(`PostHog API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        data
      };

    } catch (error) {
      console.error('Error updating PostHog survey:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Delete a survey from PostHog
   */
  async deleteSurvey(surveyId: string): Promise<{
    success: boolean;
    error?: string;
  }> {
    if (!this.projectId || !this.apiKey) {
      return {
        success: false,
        error: 'PostHog API credentials not configured.'
      };
    }

    try {
      const response = await fetch(`${this.baseURL}/api/projects/${this.projectId}/surveys/${surveyId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`PostHog API error: ${response.status}`);
      }
      
      return {
        success: true
      };

    } catch (error) {
      console.error('Error deleting PostHog survey:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
}

// Export the default survey configuration
export { SECURITY_ASSESSMENT_SURVEY_CONFIG };

// Export a singleton instance
export const posthogSurveyAPI = new PostHogSurveyAPI();