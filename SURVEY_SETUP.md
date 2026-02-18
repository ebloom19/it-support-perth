# 🔐 Security Assessment Survey Setup Guide

This guide helps you set up the PostHog-powered security assessment survey that will replace your existing CTAs and generate high-quality leads.

## 🎯 What's Been Created

### ✅ **Complete Survey System**
- **Professional Multi-Step Survey**: Contact info → Security questions → Instant scoring
- **22 Comprehensive Security Questions**: Covers all major IT security areas
- **Real-Time Security Scoring**: Calculates risk level and provides recommendations
- **Lead Generation**: Captures qualified contact information
- **PostHog Integration**: Full analytics and response tracking

### ✅ **Components Created**
- `SecurityAssessmentCTA.tsx` - Professional survey dialog component
- `posthog-survey-api.ts` - API integration for survey management
- `SurveySetup.tsx` - Admin component for survey creation
- `create-survey.mjs` - Command-line script for survey creation

### ✅ **Replaced CTAs**
- All "Free Security Assessment" buttons now open the new survey
- "Claim Now" button in hero section uses new survey
- Existing SecurityAssessmentCTA component updated

## 🚀 Quick Setup (3 Steps)

### Step 1: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_PROJECT_ID=your_project_id_here
POSTHOG_PERSONAL_API_KEY=your_personal_api_key_here

# hCaptcha Configuration
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key_here
HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key_here
```

**How to get these values:**
1. Go to your PostHog dashboard
2. **Project ID**: Settings → Project Settings → copy the Project ID
3. **API Key**: Settings → Personal API Keys → create new key with "surveys" permissions
4. Go to the hCaptcha dashboard and create a site for your domain
5. Copy the **Site Key** into `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`
6. Copy the **Secret Key** into `HCAPTCHA_SECRET_KEY`

### Step 2: Create the Survey

**Option A: Using the Web Interface**
1. Navigate to `/admin` on your website
2. Click "Survey Setup" 
3. Click "Create Security Assessment Survey"
4. Copy the Survey ID

**Option B: Using Command Line**
```bash
node scripts/create-survey.mjs
```

### Step 3: Update Survey Provider (if needed)

If you want to use PostHog's built-in survey display, update the Survey ID in:
`components/PostHogSurveyProvider.tsx`

```typescript
const SURVEY_ID = 'your_new_survey_id_here';
```

## 📋 Survey Features

### **Contact Information Collection**
- Full name, phone, email
- Company name and size
- Job title and referral source

### **Security Assessment (22 Questions)**
1. Security audit frequency
2. Employee security training
3. Multi-factor authentication
4. Spam filtering systems
5. Firewall protection
6. System update procedures
7. Incident response planning
8. Backup frequency and procedures
9. Disaster recovery testing
10. Vulnerability assessments
11. Network monitoring
12. Ransomware preparedness
13. BYOD security policies
14. Remote monitoring tools
15. And more...

### **Instant Results**
- **Security Score**: 0-100% based on responses
- **Risk Level**: Low, Medium, High, or Critical
- **Personalized Recommendations**: Top 5 priority actions
- **Professional Follow-up**: Automated consultation booking

## 🎨 Design Features

- **Brand Consistent**: Uses your blue (#2563eb) color scheme
- **Mobile Responsive**: Perfect on all devices
- **Professional Animations**: Smooth transitions with Framer Motion
- **Progress Indicators**: Visual progress through survey steps
- **Validation**: Required fields and proper form validation

## 📊 Analytics & Tracking

The survey automatically tracks:
- Survey completions
- Security scores and risk levels
- Lead quality metrics
- Conversion rates
- User behavior through PostHog

## 🔧 Customization Options

### **Survey Questions**
Edit questions in `lib/posthog-survey-api.ts` or `scripts/create-survey.mjs`

### **Scoring Algorithm**
Modify scoring logic in `scripts/create-security-survey.ts`:
```typescript
const points = {
  'Yes': 5,
  'Partially': 3,
  'No': 0,
  'Not sure': 1
};
```

### **Styling**
Update appearance in survey configuration:
```typescript
appearance: {
  backgroundColor: '#ffffff',
  submitButtonColor: '#2563eb',
  textColor: '#1f2937',
  // ... more styling options
}
```

## 🎯 Lead Generation Strategy

### **Qualification Process**
1. **Contact Capture**: Get full contact details upfront
2. **Security Assessment**: Identify pain points and needs
3. **Scoring**: Quantify security risk level
4. **Recommendations**: Provide immediate value
5. **Follow-up**: Professional consultation offer

### **Conversion Optimization**
- **Value Proposition**: "$500 value" assessment creates urgency
- **Professional Presentation**: Builds trust and credibility
- **Instant Results**: Provides immediate gratification
- **Personalized Recommendations**: Shows expertise
- **Clear Next Steps**: Professional consultation offer

## 📞 Follow-up Process

When someone completes the survey:

1. **Immediate**: Thank you message with security score
2. **24 Hours**: Personalized follow-up email with detailed recommendations
3. **Consultation**: Free security consultation offer
4. **Nurturing**: Ongoing IT security tips and insights

## 🧪 Testing Checklist

- [ ] Survey opens correctly from all CTA buttons
- [ ] All form fields validate properly
- [ ] Security scoring calculates correctly
- [ ] Mobile responsiveness works on all devices
- [ ] PostHog analytics tracking is working
- [ ] hCaptcha loads on Step 2 and blocks submit until solved
- [ ] Invalid/expired hCaptcha token is rejected by `/api/security-assessment`
- [ ] Thank you message displays properly
- [ ] Survey responses appear in PostHog dashboard

## 🔍 Monitoring & Optimization

### **Key Metrics to Track**
- Survey completion rate
- Average security scores
- Lead quality (consultation bookings)
- Question drop-off points
- Mobile vs desktop completion rates

### **A/B Testing Opportunities**
- CTA button text and placement
- Survey question order
- Scoring thresholds
- Follow-up messaging
- Incentive offers

## 🆘 Troubleshooting

### **Survey Not Creating**
- Check environment variables are set correctly
- Verify PostHog API key has survey permissions
- Check network connectivity to PostHog

### **Survey Not Displaying**
- Verify Survey ID is correct in PostHogSurveyProvider
- Check PostHog script is loading properly
- Test on different devices/browsers

### **Responses Not Tracking**
- Check PostHog dashboard for survey responses
- Verify analytics events are firing
- Test with PostHog debugging tools

### **Captcha Verification Fails**
- Verify `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` and `HCAPTCHA_SECRET_KEY` are set
- Confirm the hCaptcha site includes your local/production domain
- Use hCaptcha test keys in local development to validate end-to-end flow

## 📚 Additional Resources

- [PostHog Surveys Documentation](https://posthog.com/docs/surveys)
- [PostHog API Reference](https://posthog.com/docs/api)
- [hCaptcha Documentation](https://docs.hcaptcha.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 🎉 You're All Set!

Your professional security assessment survey is now ready to generate high-quality leads. The system captures contact information, evaluates security posture, provides immediate value, and sets up professional follow-up opportunities.

**Questions?** Check the troubleshooting section above or test the survey at `/admin` on your website.
