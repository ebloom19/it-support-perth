'use client';

import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
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
  TriangleAlert,
  Users,
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { SURVEY_QUESTIONS } from '@/lib/security-assessment-questions';

// PostHog survey configuration
const SURVEY_ID = '01978338-21fe-0000-546c-125611653820';

// PostHog events and properties (centralized per posthog-integration rule)
const POSTHOG_EVENTS = {
  SURVEY_SHOWN: 'survey shown',
  SURVEY_SENT: 'survey sent',
  SECURITY_ASSESSMENT_SUBMITTED: 'security_assessment_submitted',
  SECURITY_ASSESSMENT_SUBMISSION_FAILED: 'security_assessment_submission_failed',
} as const;

const POSTHOG_PROPERTIES = {
  SURVEY_ID: '$survey_id',
  SURVEY_NAME: '$survey_name',
  SURVEY_RESPONSE: '$survey_response',
  SURVEY_RESPONSE_1: '$survey_response_1',
  SURVEY_RESPONSE_2: '$survey_response_2',
  SURVEY_RESPONSE_3: '$survey_response_3',
  SURVEY_RESPONSE_4: '$survey_response_4',
  SURVEY_RESPONSE_5: '$survey_response_5',
  SURVEY_RESPONSE_6: '$survey_response_6',
  SURVEY_RESPONSE_7: '$survey_response_7',
  COMPANY: 'company',
  COMPANY_SIZE: 'companySize',
  SECURITY_SCORE: 'securityScore',
  RISK_LEVEL: 'riskLevel',
  EMAIL: 'email',
  CLIENT_EMAIL_SENT: 'clientEmailSent',
  TEAM_EMAIL_SENT: 'teamEmailSent',
  TOTAL_QUESTIONS: 'totalQuestions',
  ERROR: 'error',
  TIMESTAMP: 'timestamp',
} as const;

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

interface SecurityScore {
  score: number;
  maxScore: number;
  percentage: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  recommendations: string[];
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
  const [securityScore, setSecurityScore] = useState<SecurityScore | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaWidgetKey, setCaptchaWidgetKey] = useState(0);
  const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

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
      if (!hcaptchaSiteKey) {
        setCaptchaError('Spam protection is unavailable right now. Please try again shortly or call (08) 9325 1196.');
        return;
      }

      if (!captchaToken) {
        setCaptchaError('Please complete the captcha before submitting.');
        return;
      }

      // Calculate security score and auto-submit
      const score = calculateSecurityScore(formData.responses);
      setSecurityScore(score);
      // Auto-submit and show results page
      submitAssessmentDirect(score);
      setCurrentStep(2);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const submitAssessmentDirect = async (score: SecurityScore) => {
    if (!captchaToken) {
      setCaptchaError('Please complete the captcha before submitting.');
      return;
    }

    try {
      const assessmentData = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        companySize: formData.companySize,
        jobTitle: formData.jobTitle,
        hearAbout: formData.hearAbout,
        responses: formData.responses,
        securityScore: score,
        captchaToken
      };

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

        (window as any).posthog.capture(POSTHOG_EVENTS.SURVEY_SHOWN, {
          [POSTHOG_PROPERTIES.SURVEY_ID]: SURVEY_ID,
          [POSTHOG_PROPERTIES.SURVEY_NAME]: 'IT Security Assessment - Perth Business Risk Evaluation'
        });

        (window as any).posthog.capture(POSTHOG_EVENTS.SURVEY_SENT, {
          [POSTHOG_PROPERTIES.SURVEY_ID]: SURVEY_ID,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE]: postHogResponses,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_1]: formData.fullName,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_2]: formData.phone,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_3]: formData.email,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_4]: formData.company,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_5]: formData.companySize,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_6]: formData.jobTitle,
          [POSTHOG_PROPERTIES.SURVEY_RESPONSE_7]: formData.hearAbout
        });

        (window as any).posthog.capture(POSTHOG_EVENTS.SECURITY_ASSESSMENT_SUBMITTED, {
          [POSTHOG_PROPERTIES.COMPANY]: formData.company,
          [POSTHOG_PROPERTIES.COMPANY_SIZE]: formData.companySize,
          [POSTHOG_PROPERTIES.SECURITY_SCORE]: score.percentage,
          [POSTHOG_PROPERTIES.RISK_LEVEL]: score.riskLevel,
          [POSTHOG_PROPERTIES.EMAIL]: formData.email,
          [POSTHOG_PROPERTIES.CLIENT_EMAIL_SENT]: !!result.clientEmailId,
          [POSTHOG_PROPERTIES.TEAM_EMAIL_SENT]: !!result.teamEmailId,
          [POSTHOG_PROPERTIES.TOTAL_QUESTIONS]: SURVEY_QUESTIONS.length,
          [POSTHOG_PROPERTIES.TIMESTAMP]: new Date().toISOString()
        });
      }

      toast.success(
        `Assessment submitted successfully! A confirmation email has been sent to ${formData.email}. We'll contact you within one business day.`,
        { duration: 8000 }
      );

      // Don't close modal - let user see results on step 3

    } catch (error) {
      console.error('Error submitting assessment:', error);
      const message = error instanceof Error ? error.message : 'Failed to submit assessment. Please try again.';
      toast.error(message);
      setCaptchaToken(null);
      setCaptchaError('Please complete the captcha again before retrying.');
      setCaptchaWidgetKey(prev => prev + 1);

      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture(POSTHOG_EVENTS.SECURITY_ASSESSMENT_SUBMISSION_FAILED, {
          [POSTHOG_PROPERTIES.COMPANY]: formData.company,
          [POSTHOG_PROPERTIES.ERROR]: error instanceof Error ? error.message : 'Unknown error',
          [POSTHOG_PROPERTIES.TIMESTAMP]: new Date().toISOString()
        });
      }
    }
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Critical': return 'text-red-600 bg-red-100';
      default: return 'text-muted-foreground bg-muted';
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
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          setCaptchaToken(null);
          setCaptchaError(null);
          setCaptchaWidgetKey(prev => prev + 1);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {getTriggerContent()}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl flex flex-col max-h-[90vh]">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Shield className="w-6 h-6 text-[#2563eb]" />
            Free IT Security Assessment
          </DialogTitle>
          <DialogDescription>
            Get a personalized security score and actionable recommendations for your Perth business
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="mb-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <div className="ml-2 hidden sm:block">
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-muted-foreground">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-[#2563eb]' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2563eb] transition-all duration-300"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto min-h-0">
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
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label htmlFor="fullName" className="text-xs">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="John Smith"
                      className={`text-sm ${errors.fullName ? 'border-red-500' : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-0.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="email" className="text-xs">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        className={`text-sm ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-0.5">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(08) 9325 1196"
                        className={`text-sm ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-0.5">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-xs">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Name"
                      className={`text-sm ${errors.company ? 'border-red-500' : ''}`}
                    />
                    {errors.company && (
                      <p className="text-xs text-red-600 mt-0.5">{errors.company}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="companySize" className="text-xs">Company Size *</Label>
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
                        <p className="text-xs text-red-600 mt-0.5">{errors.companySize}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="jobTitle" className="text-xs">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        placeholder="CEO, CTO, IT Manager, etc."
                        className={`text-sm ${errors.jobTitle ? 'border-red-500' : ''}`}
                      />
                      {errors.jobTitle && (
                        <p className="text-xs text-red-600 mt-0.5">{errors.jobTitle}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hearAbout" className="text-xs">How did you hear about us? *</Label>
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
                      <p className="text-xs text-red-600 mt-0.5">{errors.hearAbout}</p>
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
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5" />
                    Security Questions
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">
                    Answer to get your personalized score
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {securityQuestions.map((question, index) => (
                    <div key={index} className="space-y-2 pb-3 border-b last:border-b-0 last:pb-0">
                      <Label className="text-xs font-medium text-blue-600">
                        Q{index + 1}. {question.question}
                      </Label>
                      <RadioGroup
                        value={formData.responses[question.id] || ''}
                        onValueChange={(value) => handleResponseChange(question.id, value)}
                        className="space-y-1"
                      >
                        {question.choices?.map((choice, choiceIndex) => (
                          <div key={choiceIndex} className="flex items-center space-x-2">
                            <RadioGroupItem value={choice} id={`${question.id}-${choiceIndex}`} />
                            <Label
                              htmlFor={`${question.id}-${choiceIndex}`}
                              className="text-xs cursor-pointer"
                            >
                              {choice}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.responses?.[question.id] && (
                        <p className="text-xs text-red-600 mt-0.5">{errors.responses[question.id]}</p>
                      )}
                    </div>
                  ))}

                  <div className="pt-2">
                    <Label className="text-xs font-medium text-blue-600">Spam Protection *</Label>
                    {hcaptchaSiteKey ? (
                      <div className="mt-2 overflow-x-auto">
                        <HCaptcha
                          key={captchaWidgetKey}
                          sitekey={hcaptchaSiteKey}
                          onVerify={(token: string) => {
                            setCaptchaToken(token);
                            setCaptchaError(null);
                          }}
                          onExpire={() => {
                            setCaptchaToken(null);
                            setCaptchaError('Captcha expired. Please complete it again.');
                          }}
                          onError={() => {
                            setCaptchaToken(null);
                            setCaptchaError('Captcha failed to load. Please refresh and try again.');
                          }}
                        />
                      </div>
                    ) : (
                      <Alert className="mt-2 border-red-500/30 bg-red-50">
                        <AlertDescription className="text-red-700">
                          Spam protection is not configured right now. Please try again shortly or call (08) 9325 1196.
                        </AlertDescription>
                      </Alert>
                    )}
                    {captchaError && (
                      <p className="text-xs text-red-600 mt-1">{captchaError}</p>
                    )}
                  </div>
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
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="flex items-center gap-2 m-0">
                      <TrendingUp className="w-5 h-5" />
                      Results
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="text-4xl font-bold text-[#2563eb]">
                        {securityScore.percentage}%
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={getRiskColor(securityScore.riskLevel)}>
                          {securityScore.riskLevel} Risk
                        </Badge>
                        <p className="text-xs text-muted-foreground text-right">
                          {securityScore.score}/{securityScore.maxScore}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  {/* Divider */}
                  <div className="border-b"></div>

                  {/* Security Disclaimer - Compact */}
                  <div className={`rounded p-2 border text-xs ${
                    securityScore.riskLevel === 'Low'
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <p className={securityScore.riskLevel === 'Low' ? 'text-amber-700' : 'text-red-700'}>
                      {securityScore.riskLevel === 'Low'
                        ? 'Maintain proactive security measures and ongoing professional assessments.'
                        : 'Immediate attention required. Significant vulnerabilities detected.'
                      }
                    </p>
                  </div>

                  {/* Recommendations - Compact */}
                  {securityScore.recommendations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-xs mb-1 flex items-center gap-1">
                        <TriangleAlert className="w-3 h-3" />
                        Top Recommendations
                      </h4>
                      <ul className="space-y-1">
                        {securityScore.recommendations.slice(0, 3).map((rec: string, index: number) => (
                          <li key={index} className="flex items-start gap-1 text-xs">
                            <span className="text-[#2563eb] font-bold mt-0.5 flex-shrink-0">{index + 1}.</span>
                            <span className="text-foreground">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Next Steps - Compact */}
                  <div className="bg-blue-50 rounded p-2 text-xs">
                    <h4 className="font-semibold mb-1 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Next Steps
                    </h4>
                    <ul className="space-y-0.5 text-foreground">
                      <li>✓ Expert review of your responses</li>
                      <li>✓ Contact within 24 hours</li>
                      <li>✓ Detailed security report</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 gap-2 flex-shrink-0">
          {currentStep > 0 && currentStep < 2 && (
            <Button
              variant="outline"
              onClick={previousStep}
            >
              Previous
            </Button>
          )}

          {currentStep < 2 ? (
            <Button
              onClick={nextStep}
              disabled={currentStep === 1 ? (!isCurrentStepValid || !captchaToken || !hcaptchaSiteKey) : !isCurrentStepValid}
              className="bg-[#2563eb] hover:bg-[#1d4ed8] ml-auto"
            >
              {currentStep === 1 ? 'Calculate Score' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIsOpen(false);
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
                setCaptchaToken(null);
                setCaptchaError(null);
                setCaptchaWidgetKey(prev => prev + 1);
              }}
              className="bg-green-600 hover:bg-green-700 ml-auto"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Done - Close
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
