export interface SurveyQuestion {
  id: string;
  question: string;
  type: "text" | "email" | "single_choice";
  choices?: string[];
}

// Contact information questions (indices 0-6)
export const CONTACT_QUESTIONS: SurveyQuestion[] = [
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
    choices: ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"]
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
    choices: ["Google search", "Existing client", "Friends", "Social Media", "Others"]
  },
];

// Security assessment questions (indices 7-21)
export const SECURITY_QUESTIONS: SurveyQuestion[] = [
  {
    id: "76ae1bb8-2744-4033-bd93-c71687ad8d2c",
    question: "How often do you conduct a comprehensive security audit?",
    type: "single_choice",
    choices: ["Weekly", "Monthly", "Annually", "Never", "Not sure"]
  },
  {
    id: "caf030a7-17a4-4dd8-978e-286ff3e5a044",
    question: "Are employees trained regularly on security awareness (e.g., phishing emails)?",
    type: "single_choice",
    choices: ["Yes, we have mandatory training.", "Occasionally, but not consistently.", "No, we do not provide training."]
  },
  {
    id: "599f9681-6bfe-40c2-ab4e-41774c450e1f",
    question: "Do you have multi-factor authentication (MFA) enabled across all critical systems and your email accounts?",
    type: "single_choice",
    choices: ["Yes", "Partially", "No", "Not sure"]
  },
  {
    id: "3a1e49dd-6090-49cf-ac43-43ed8b8e3212",
    question: "Do you have a spam filter system to scan and block spam or scammers before they reach your inbox?",
    type: "single_choice",
    choices: ["Yes", "No", "Not sure"]
  },
  {
    id: "96c35faa-74ef-484d-a5bd-faa13bbf8c1b",
    question: "Do you use firewalls, such as FortiGate, to monitor and block unauthorized access to your network?",
    type: "single_choice",
    choices: ["Yes, we have robust firewall systems.", "We have basic firewalls but no advanced configurations.", "No", "Not sure"]
  },
  {
    id: "c145368e-371f-4e3b-a746-add4409c7d58",
    question: "How often do you update and patch your systems?",
    type: "single_choice",
    choices: ["As soon as updates are available", "Every 1–3 months", "Less frequently", "Not sure"]
  },
  {
    id: "323e873b-ed6a-4c8f-8d6e-2ae65b3740df",
    question: "Do you have an incident response plan in case of a cybersecurity breach?",
    type: "single_choice",
    choices: ["Yes, and it is regularly tested.", "Yes, but it hasn't been tested.", "No", "Not sure"]
  },
  {
    id: "5bad2bb6-fd80-495f-8175-fcce71d38db5",
    question: "How frequently do you back up critical business data?",
    type: "single_choice",
    choices: ["Daily", "Weekly", "Monthly", "Less frequently", "Not sure"]
  },
  {
    id: "d90a5ad4-1f39-4a89-8cc4-894d741bc8b6",
    question: "Are your backups stored securely offsite or in the cloud?",
    type: "single_choice",
    choices: ["Yes", "No", "Not Sure"]
  },
  {
    id: "5cb9658b-6a54-4eb0-998b-ea1d9c4232d1",
    question: "Have you tested your disaster recovery plan in the past year?",
    type: "single_choice",
    choices: ["Yes", "No", "We don\\'t have a plan", "Not sure"]
  },
  {
    id: "1ae121fd-0114-4b6e-b317-2b6d33ae00e3",
    question: "Have you conducted a vulnerability assessment or penetration test in the last 12 months?",
    type: "single_choice",
    choices: ["Yes", "No", "Not sure"]
  },
  {
    id: "ebc2d56d-e319-41c8-b709-2a07caa44cff",
    question: "How often do you monitor network activity for suspicious behavior?",
    type: "single_choice",
    choices: ["24/7 monitoring", "Daily checks", "Weekly checks", "Occasionally", "Never", "Not sure"]
  },
  {
    id: "f7f385dd-fe33-4df9-9c90-38ac6aab511a",
    question: "Ransomware attacks are increasingly common against small businesses. What would be the impact on your business if a ransomware attack stopped you from accessing your network?",
    type: "single_choice",
    choices: [
      "We would pay the ransom to regain access quickly.",
      "We would attempt to negotiate access or rebuild the network over time.",
      "It would cause a severe short-term impact, but we would recover.",
      "It could be catastrophic, and our business might not survive.",
      "We are confident in our defenses and believe this would never happen."
    ]
  },
  {
    id: "d63af77e-5a49-4aab-ba8c-b65f0fb5b825",
    question: "Do you enforce policies for BYOD (Bring Your Own Device) security?",
    type: "single_choice",
    choices: ["Yes", "No", "Not applicable", "Not sure"]
  },
  {
    id: "eefeb14f-2a08-42fc-9e77-53b045d5fcf6",
    question: "Are you using remote monitoring tools (RMM) to proactively detect and respond to IT issues?",
    type: "single_choice",
    choices: ["Yes", "No", "Not sure"]
  },
];

// All questions combined
export const SURVEY_QUESTIONS = [...CONTACT_QUESTIONS, ...SECURITY_QUESTIONS];

// Helper to get question text by ID
export function getQuestionText(questionId: string): string {
  const question = SURVEY_QUESTIONS.find(q => q.id === questionId);
  return question?.question || `Question ${questionId}`;
}
