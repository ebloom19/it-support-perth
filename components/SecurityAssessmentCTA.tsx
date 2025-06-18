'use client';

import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Users,
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

// PostHog survey configuration
const SURVEY_ID = '01978338-21fe-0000-546c-125611653820';

// Survey questions with actual PostHog IDs
const SURVEY_QUESTIONS = [
  {
    id: "3b9234f1-ae18-4af4-9f62-f1fb03a3b1a3",
    question: "First and last name",
    type: "text",
  },
  {
    id: "6a36d4a1-0a62-4292-9e86-3f13fb2602ba",
    question: "Phone number",
    type: "text",
  },
  {
    id: "09a3e15b-a2d1-4d88-9d42-b704e0bf817e",
    question: "Email address",
    type: "email",
  },
  {
    id: "d9b020fd-65ec-4fc8-a512-d6522ba3eac3",
    question: "Your company name",
    type: "text",
  },
  {
    id: "fa466aa4-e8fe-44d8-adda-40dd592327d6",
    question: "Your company size",
    type: "single_choice",
    choices: ["1-10 employees","11-50 employees","51-200 employees","201-500 employees","500+ employees"]
  },
  {
    id: "4f8219d5-2545-47a0-b2d9-204714db2571",
    question: "Your job title (e.g., CEO, CFO, etc.)",
    type: "text",
  },
  {
    id: "7357f252-b431-42d9-aad6-359fc17f6b59",
    question: "How did you hear about us?",
    type: "single_choice",
    choices: ["Google search","Existing client","Friends","Social Media","Others"]
  },
  {
    id: "76ae1bb8-2744-4033-bd93-c71687ad8d2c",
    question: "How often do you conduct a comprehensive security audit?",
    type: "single_choice",
    choices: ["Weekly","Monthly","Annually","Never","Not sure"]
  },
  {
    id: "caf030a7-17a4-4dd8-978e-286ff3e5a044",
    question: "Are employees trained regularly on security awareness (e.g., phishing emails)?",
    type: "single_choice",
    choices: ["Yes, we have mandatory training.","Occasionally, but not consistently.","No, we do not provide training."]
  },
  {
    id: "599f9681-6bfe-40c2-ab4e-41774c450e1f",
    question: "Do you have multi-factor authentication (MFA) enabled across all critical systems and your email accounts?",
    type: "single_choice",
    choices: ["Yes","Partially","No","Not sure"]
  },
  {
    id: "3a1e49dd-6090-49cf-ac43-43ed8b8e3212",
    question: "Do you have a spam filter system to scan and block spam or scammers before they reach your inbox?",
    type: "single_choice",
    choices: ["Yes","No","Not sure"]
  },
  {
    id: "96c35faa-74ef-484d-a5bd-faa13bbf8c1b",
    question: "Do you use firewalls, such as FortiGate, to monitor and block unauthorized access to your network?",
    type: "single_choice",
    choices: ["Yes, we have robust firewall systems.","We have basic firewalls but no advanced configurations.","No","Not sure"]
  },
  {
    id: "c145368e-371f-4e3b-a746-add4409c7d58",
    question: "How often do you update and patch your systems?",
    type: "single_choice",
    choices: ["As soon as updates are available","Every 1–3 months","Less frequently","Not sure"]
  },
  {
    id: "323e873b-ed6a-4c8f-8d6e-2ae65b3740df",
    question: "Do you have an incident response plan in case of a cybersecurity breach?",
    type: "single_choice",
    choices: ["Yes, and it is regularly tested.","Yes, but it hasn't been tested.","No","Not sure"]
  },
  {
    id: "5bad2bb6-fd80-495f-8175-fcce71d38db5",
    question: "How frequently do you back up critical business data?",
    type: "single_choice",
    choices: ["Daily","Weekly","Monthly","Less frequently","Not sure"]
  },
  {
    id: "d90a5ad4-1f39-4a89-8cc4-894d741bc8b6",
    question: "Are your backups stored securely offsite or in the cloud?",
    type: "single_choice",
    choices: ["Yes","No","Not Sure"]
  },
  {
    id: "5cb9658b-6a54-4eb0-998b-ea1d9c4232d1",
    question: "Have you tested your disaster recovery plan in the past year?",
    type: "single_choice",
    choices: ["Yes","No","We don't have a plan","Not sure"]
  },
  {
    id: "1ae121fd-0114-4b6e-b317-2b6d33ae00e3",
    question: "Have you conducted a vulnerability assessment or penetration test in the last 12 months?",
    type: "single_choice",
    choices: ["Yes","No","Not sure"]
  },
  {
    id: "ebc2d56d-e319-41c8-b709-2a07caa44cff",
    question: "How often do you monitor network activity for suspicious behavior?",
    type: "single_choice",
    choices: ["24/7 monitoring","Daily checks","Weekly checks","Occasionally","Never","Not sure"]
  },
  {
    id: "f7f385dd-fe33-4df9-9c90-38ac6aab511a",
    question: "Ransomware attacks are increasingly common against small businesses. What would be the impact on your business if a ransomware attack stopped you from accessing your network?",
    type: "single_choice",
    choices: ["We would pay the ransom to regain access quickly.","We would attempt to negotiate access or rebuild the network over time.","It would cause a severe short-term impact, but we would recover.","It could be catastrophic, and our business might not survive.","We are confident in our defenses and believe this would never happen."]
  },
  {
    id: "d63af77e-5a49-4aab-ba8c-b65f0fb5b825",
    question: "Do you enforce policies for BYOD (Bring Your Own Device) security?",
    type: "single_choice",
    choices: ["Yes","No","Not applicable","Not sure"]
  },
  {
    id: "eefeb14f-2a08-42fc-9e77-53b045d5fcf6",
    question: "Are you using remote monitoring tools (RMM) to proactively detect and respond to IT issues?",
    type: "single_choice",
    choices: ["Yes","No","Not sure"]
  }
];

// Security scoring logic
const getResponseScore = (response: string): number => {
  // High scores (5)
  if (['Yes', 'Weekly', 'Daily', 'Yes, we have mandatory training.', 'Yes, we have robust firewall systems.',
       'As soon as updates are available', 'Yes, and it is regularly tested.', '24/7 monitoring'].includes(response)) {
    return 5;
  }
  
  // Good scores (4)
  if (['Weekly', 'Daily checks', 'We are confident in our defenses and believe this would never happen.'].includes(response)) {
    return 4;
  }
  
  // Medium scores (3)
  if (['Partially', 'We have basic firewalls but no advanced configurations.', 'Every 1–3 months',
       'Yes, but it hasn\'t been tested.', 'Weekly checks', 'It would cause a severe short-term impact, but we would recover.',
       'Not applicable'].includes(response)) {
    return 3;
  }
  
  // Low scores (2)
  if (['Annually', 'Occasionally, but not consistently.', 'Monthly', 'Occasionally',
       'We would attempt to negotiate access or rebuild the network over time.'].includes(response)) {
    return 2;
  }
  
  // Very low scores (1)
  if (['Not sure', 'Less frequently', 'We would pay the ransom to regain access quickly.'].includes(response)) {
    return 1;
  }
  
  // Zero scores (0)
  if (['Never', 'No', 'No, we do not provide training.', 'We don\'t have a plan',
       'It could be catastrophic, and our business might not survive.'].includes(response)) {
    return 0;
  }
  
  // Default for unknown responses
  return 1;
};

const calculateSecurityScore = (responses: Record<string, string>) => {

  let totalScore = 0;
  let maxScore = 0;
  const securityQuestions = SURVEY_QUESTIONS.slice(7); // Skip contact info

  securityQuestions.forEach((question) => {
    const response = responses[question.id];
    if (response) {
      const points = getResponseScore(response);
      totalScore += points;
    }
    maxScore += 5; // Max points per question
  });

  const percentage = Math.round((totalScore / maxScore) * 100);
  
  let riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  let recommendations: string[] = [];
  
  if (percentage >= 80) {
    riskLevel = 'Low';
    recommendations = [
      'Continue regular security audits and training',
      'Consider advanced threat detection tools',
      'Review and update incident response plans quarterly'
    ];
  } else if (percentage >= 60) {
    riskLevel = 'Medium';
    recommendations = [
      'Implement multi-factor authentication on all systems',
      'Increase security training frequency',
      'Conduct regular vulnerability assessments',
      'Improve backup and disaster recovery procedures'
    ];
  } else if (percentage >= 40) {
    riskLevel = 'High';
    recommendations = [
      'Urgent: Enable multi-factor authentication immediately',
      'Deploy enterprise-grade firewall and monitoring',
      'Establish comprehensive backup strategy',
      'Implement mandatory security awareness training',
      'Create and test incident response plan'
    ];
  } else {
    riskLevel = 'Critical';
    recommendations = [
      'CRITICAL: Immediate security audit required',
      'Deploy comprehensive cybersecurity framework',
      'Implement 24/7 monitoring and threat detection',
      'Establish disaster recovery and business continuity plans',
      'Conduct penetration testing and vulnerability assessment',
      'Consider managed security services'
    ];
  }

  return { score: totalScore, maxScore, percentage, riskLevel, recommendations };
};

interface SecurityAssessmentCTAProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  companySize: string;
  jobTitle: string;
  hearAbout: string;
  responses: Record<string, string>;
}

interface ValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  company?: string;
  companySize?: string;
  jobTitle?: string;
  hearAbout?: string;
  responses?: Record<string, string>;
}

export function SecurityAssessmentCTA({ 
  variant = 'default', 
  size = 'default', 
  className = '',
  children 
}: SecurityAssessmentCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    companySize: '',
    jobTitle: '',
    hearAbout: '',
    responses: {}
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [securityScore, setSecurityScore] = useState<any>(null);

  const steps = [
    { title: 'Contact Information', description: 'Tell us about yourself' },
    { title: 'Security Assessment', description: 'Answer security questions' },
    { title: 'Your Security Score', description: 'See your results' }
  ];

  const securityQuestions = SURVEY_QUESTIONS.filter((_, index) => index >= 7); // Skip contact info questions

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResponseChange = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionId]: value
      }
    }));
    
    // Clear error for this question
    if (errors.responses?.[questionId]) {
      const newResponses = { ...errors.responses };
      delete newResponses[questionId];
      setErrors(prev => ({
        ...prev,
        responses: newResponses
      }));
    }
  };

  const validateStep = useCallback((step: number, updateErrors: boolean = false): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (step === 0) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
      if (!formData.companySize) newErrors.companySize = 'Please select company size';
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData.hearAbout) newErrors.hearAbout = 'Please select how you heard about us';
    }
    
    if (step === 1) {
      const missingQuestions: Record<string, string> = {};
      securityQuestions.forEach((question, index) => {
        if (!formData.responses[question.id]) {
          missingQuestions[question.id] = `Question ${index + 1} is required`;
        }
      });
      if (Object.keys(missingQuestions).length > 0) {
        newErrors.responses = missingQuestions;
      }
    }
    
    if (updateErrors) {
      setErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  }, [formData, securityQuestions]);

  const isCurrentStepValid = useMemo(() => {
    return validateStep(currentStep, false);
  }, [validateStep, currentStep]);

  const nextStep = () => {
    // Validate and update errors before proceeding
    if (!validateStep(currentStep, true)) {
      return;
    }
    
    if (currentStep === 1) {
      // Calculate security score
      const score = calculateSecurityScore(formData.responses);
      setSecurityScore(score);
    }
    setCurrentStep(prev => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const submitAssessment = async () => {
    setIsSubmitting(true);
    try {
      // Prepare assessment data for API
      const assessmentData = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        companySize: formData.companySize,
        jobTitle: formData.jobTitle,
        hearAbout: formData.hearAbout,
        responses: formData.responses,
        securityScore
      };

      // Submit to API endpoint
      const response = await fetch('/api/security-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessmentData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit assessment');
      }

      // Track in PostHog after successful API submission
      if (typeof window !== 'undefined' && (window as any).posthog) {
        // Prepare PostHog responses
        const postHogResponses: Record<string, string> = {};
        postHogResponses[SURVEY_QUESTIONS[0].id] = formData.fullName;
        postHogResponses[SURVEY_QUESTIONS[1].id] = formData.phone;
        postHogResponses[SURVEY_QUESTIONS[2].id] = formData.email;
        postHogResponses[SURVEY_QUESTIONS[3].id] = formData.company;
        postHogResponses[SURVEY_QUESTIONS[4].id] = formData.companySize;
        postHogResponses[SURVEY_QUESTIONS[5].id] = formData.jobTitle;
        postHogResponses[SURVEY_QUESTIONS[6].id] = formData.hearAbout;
        
        Object.entries(formData.responses).forEach(([questionId, response]) => {
          postHogResponses[questionId] = response;
        });

        // Track survey events
        (window as any).posthog.capture('survey shown', {
          $survey_id: SURVEY_ID,
          $survey_name: 'IT Security Assessment - Perth Business Risk Evaluation'
        });

        (window as any).posthog.capture('survey sent', {
          $survey_id: SURVEY_ID,
          $survey_response: postHogResponses,
          $survey_response_1: formData.fullName,
          $survey_response_2: formData.phone,
          $survey_response_3: formData.email,
          $survey_response_4: formData.company,
          $survey_response_5: formData.companySize,
          $survey_response_6: formData.jobTitle,
          $survey_response_7: formData.hearAbout
        });

        // Track assessment submission success
        (window as any).posthog.capture('security_assessment_submitted', {
          company: formData.company,
          companySize: formData.companySize,
          securityScore: securityScore.percentage,
          riskLevel: securityScore.riskLevel,
          email: formData.email,
          clientEmailSent: !!result.clientEmailId,
          teamEmailSent: !!result.teamEmailId,
          totalQuestions: SURVEY_QUESTIONS.length,
          timestamp: new Date().toISOString()
        });
      }

      toast.success(
        `Assessment submitted successfully! A confirmation email has been sent to ${formData.email}. We&apos;ll contact you within one business day.`,
        { duration: 8000 }
      );
      
      setIsOpen(false);
      
      // Reset form
      setCurrentStep(0);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        company: '',
        companySize: '',
        jobTitle: '',
        hearAbout: '',
        responses: {}
      });
      setSecurityScore(null);
      setErrors({});
      
    } catch (error) {
      console.error('Error submitting assessment:', error);
      toast.error('Failed to submit assessment. Please try again.');
      
      // Track submission failure in PostHog
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('security_assessment_submission_failed', {
          company: formData.company,
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTriggerContent = () => {
    if (children) return children;
    
    return (
      <>
        <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Free Security Assessment
      </>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {getTriggerContent()}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Shield className="w-6 h-6 text-[#2563eb]" />
            Free IT Security Assessment
          </DialogTitle>
          <DialogDescription>
            Get a personalized security score and actionable recommendations for your Perth business
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep 
                    ? 'bg-[#2563eb] text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <div className="ml-2 hidden sm:block">
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-[#2563eb]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Contact Information */}
          {currentStep === 0 && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="John Smith"
                        className={errors.fullName ? 'border-red-500' : ''}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(08) 9325 1196"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Name"
                      className={errors.company ? 'border-red-500' : ''}
                    />
                    {errors.company && (
                      <p className="text-sm text-red-600 mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companySize">Company Size *</Label>
                      <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                        <SelectTrigger className={errors.companySize ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                          <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                          <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                          <SelectItem value="201-500 employees">201-500 employees</SelectItem>
                          <SelectItem value="500+ employees">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.companySize && (
                        <p className="text-sm text-red-600 mt-1">{errors.companySize}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        placeholder="CEO, CTO, IT Manager, etc."
                        className={errors.jobTitle ? 'border-red-500' : ''}
                      />
                      {errors.jobTitle && (
                        <p className="text-sm text-red-600 mt-1">{errors.jobTitle}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hearAbout">How did you hear about us? *</Label>
                    <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange('hearAbout', value)}>
                      <SelectTrigger className={errors.hearAbout ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Google search">Google search</SelectItem>
                        <SelectItem value="Existing client">Existing client</SelectItem>
                        <SelectItem value="Friends">Friends</SelectItem>
                        <SelectItem value="Social Media">Social Media</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.hearAbout && (
                      <p className="text-sm text-red-600 mt-1">{errors.hearAbout}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Security Questions */}
          {currentStep === 1 && (
            <motion.div
              key="security"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security Assessment Questions
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Answer these questions to get your personalized security score
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 max-h-96 overflow-y-auto">
                  {securityQuestions.map((question, index) => (
                    <div key={index} className="space-y-3">
                      <Label className="text-sm font-medium">
                        {index + 1}. {question.question}
                      </Label>
                      <RadioGroup
                        value={formData.responses[question.id] || ''}
                        onValueChange={(value) => handleResponseChange(question.id, value)}
                        className="space-y-2"
                      >
                        {question.choices?.map((choice, choiceIndex) => (
                          <div key={choiceIndex} className="flex items-center space-x-2">
                            <RadioGroupItem value={choice} id={`${question.id}-${choiceIndex}`} />
                            <Label 
                              htmlFor={`${question.id}-${choiceIndex}`}
                              className="text-sm cursor-pointer"
                            >
                              {choice}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.responses?.[question.id] && (
                        <p className="text-sm text-red-600 mt-1">{errors.responses[question.id]}</p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Results */}
          {currentStep === 2 && securityScore && (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Your Security Assessment Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Security Score */}
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#2563eb] mb-2">
                      {securityScore.percentage}%
                    </div>
                    <Badge className={getRiskColor(securityScore.riskLevel)}>
                      {securityScore.riskLevel} Risk
                    </Badge>
                    <p className="text-sm text-gray-600 mt-2">
                      Security Score: {securityScore.score}/{securityScore.maxScore}
                    </p>
                  </div>

                  {/* Security Disclaimer */}
                  <div className={`rounded-lg p-4 border ${
                    securityScore.riskLevel === 'Low' 
                      ? 'bg-amber-50 border-amber-200' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        securityScore.riskLevel === 'Low' ? 'text-amber-600' : 'text-red-600'
                      }`} />
                      <div>
                        <h4 className={`font-semibold text-sm mb-1 ${
                          securityScore.riskLevel === 'Low' ? 'text-amber-800' : 'text-red-800'
                        }`}>
                          Important Security Notice
                        </h4>
                        <p className={`text-xs leading-relaxed ${
                          securityScore.riskLevel === 'Low' ? 'text-amber-700' : 'text-red-700'
                        }`}>
                          {securityScore.riskLevel === 'Low' 
                            ? 'While your score shows relatively low risk, cybersecurity threats constantly evolve. A high score doesn\'t guarantee complete protection. We recommend ongoing professional security measures to maintain your organization\'s safety.'
                            : 'Your assessment reveals significant security vulnerabilities requiring immediate attention. These gaps could expose your organization to serious threats including data breaches and ransomware attacks.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  {securityScore.recommendations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Priority Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {securityScore.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <ArrowRight className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Next Steps */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      What Happens Next?
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Our security expert will review your assessment</li>
                      <li>• We&apos;ll contact you within 24 hours</li>
                      <li>• Get a detailed security report and action plan</li>
                      <li>• Schedule a free consultation to discuss improvements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < 2 ? (
            <Button
              onClick={nextStep}
              disabled={!isCurrentStepValid}
              className="bg-[#2563eb] hover:bg-[#1d4ed8]"
            >
              {currentStep === 1 ? 'Calculate Score' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={submitAssessment}
              disabled={isSubmitting}
              className="bg-[#2563eb] hover:bg-[#1d4ed8]"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Get My Consultation
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}