import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { saveSecurityAssessment, initializeDatabase } from '@/lib/db';

interface SecurityAssessmentData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  companySize: string;
  jobTitle: string;
  hearAbout: string;
  responses: Record<string, string>;
  securityScore: {
    score: number;
    maxScore: number;
    percentage: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
    recommendations: string[];
  };
}

const brandColor = '#2563eb';

const logoSvg = `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" fill="transparent"/>
  <text x="100" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">IT Support Perth</text>
</svg>`;

const getEmailTemplate = (data: SecurityAssessmentData, isClientEmail: boolean = false, assessmentViewUrl?: string) => {
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.29 374.52" style="height: 60px; width: auto;"><defs><style>.cls-1{fill:#3c91e6;}.cls-1,.cls-2{stroke-width:0px;}.cls-3{stroke-width:1.82px;}.cls-3,.cls-4{stroke:#fff;stroke-miterlimit:10;}.cls-3,.cls-2{fill:#fff;}.cls-4{fill:#01042b;stroke-width:11.64px;}</style></defs><path class="cls-4" d="M82.69,5.82h211.91c42.45,0,76.87,33.8,76.87,75.49v211.91c0,41.69-34.41,75.49-76.87,75.49H82.69c-42.45,0-76.87-33.8-76.87-75.49V81.31C5.82,39.62,40.23,5.82,82.69,5.82Z"></path><path class="cls-2" d="M154.24,310.26h-84.08c-2.04,0-4.09-.44-5.87-1.43-8.52-4.8-11.02-14.12-7.21-21.56l36.77-71.7h-.03l4.61-9.03c.95-1.87,2.35-3.52,4.16-4.61,9.34-5.67,19.81-2.19,23.98,5.95l40.71,79.38c3.81,7.45,1.31,16.76-7.21,21.56-1.77,1-3.83,1.43-5.87,1.43h.02ZM107.74,212.11l-.28.55-40.71,79.38c-1.21,2.36-.24,4.36.23,5.12.48.75,1.85,2.49,4.53,2.49h81.39c2.68,0,4.06-1.74,4.53-2.49.48-.75,1.44-2.75.23-5.12l-40.71-79.38c-.93-1.82-2.71-2.9-4.76-2.9-1.84,0-3.45.87-4.44,2.36h-.01Z"></path><path class="cls-2" d="M300.79,169.33h-94.7c-7.4,0-13.4-5.9-13.4-13.16v-65.41c0-7.26,6-13.16,13.4-13.16h94.7c7.4,0,13.4,5.9,13.4,13.16v65.41c0,7.26-6,13.16-13.4,13.16ZM206.08,88.19c-1.44,0-2.6,1.14-2.6,2.55v65.41c0,1.41,1.16,2.55,2.6,2.55h94.7c1.44,0,2.6-1.14,2.6-2.55v-65.41c0-1.41-1.16-2.55-2.6-2.55h-94.7Z"></path><path class="cls-1" d="M284.1,203.32h-53.75c-4.72,0-9.11,2.49-11.65,6.63l-10.28,16.67c-2.99,4.85-2.91,11.08.21,15.83l37.02,56.61c5.47,8.37,17.33,8.4,22.85.07l37.31-56.41c3.14-4.75,3.26-10.99.28-15.86l-10.32-16.88c-2.54-4.16-6.94-6.67-11.68-6.67h.01Z"></path><path class="cls-3" d="M257.1,309.47h-.05c-6-.01-11.58-3.07-14.92-8.18l-37.02-56.61c-3.98-6.08-4.08-14-.27-20.18l10.28-16.67c3.33-5.38,9.02-8.61,15.23-8.61h53.75c6.25,0,11.96,3.24,15.28,8.67l10.32,16.88c3.79,6.22,3.65,14.14-.36,20.21l-37.33,56.41c-3.36,5.08-8.93,8.11-14.91,8.11v-.02ZM230.35,207.43c-3.27,0-6.28,1.73-8.08,4.64l-10.28,16.67c-2.17,3.52-2.11,8.04.15,11.49l37.02,56.61c1.83,2.79,4.71,4.39,7.91,4.41h.02c3.19,0,6.05-1.58,7.89-4.36l37.33-56.41c2.28-3.45,2.36-7.96.2-11.5l-10.32-16.88c-1.79-2.93-4.81-4.68-8.09-4.68h-53.75Z"></path><ellipse class="cls-1" cx="110.19" cy="123.37" rx="41.22" ry="40.48"></ellipse><path class="cls-2" d="M110.19,169.16c-25.71,0-46.62-20.54-46.62-45.79s20.91-45.79,46.62-45.79,46.62,20.54,46.62,45.79-20.91,45.79-46.62,45.79ZM110.19,88.19c-19.75,0-35.82,15.78-35.82,35.18s16.07,35.18,35.82,35.18,35.82-15.78,35.82-35.18-16.07-35.18-35.82-35.18Z"></path></svg>`;
  const brandColor = '#2563eb';
  
  if (isClientEmail) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Security Assessment Results - IT Support Perth</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, ${brandColor} 0%, #1d4ed8 100%); padding: 40px 30px; text-align: center;">
      ${logoSvg}
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Security Assessment Complete</h1>
      <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Thank you for taking our comprehensive security assessment</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; margin-bottom: 25px;">Hi ${data.fullName},</p>
      
      <p style="font-size: 16px; margin-bottom: 25px;">Thank you for completing our comprehensive IT security assessment. Your responses have been received and our cybersecurity experts are analyzing your results.</p>
      
      <!-- Security Score Card -->
      <div style="background-color: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 30px; margin: 30px 0; text-align: center;">
        <h2 style="color: ${brandColor}; margin: 0 0 15px 0; font-size: 24px;">Your Preliminary Security Score</h2>
        <div style="font-size: 48px; font-weight: bold; color: ${brandColor}; margin: 20px 0;">${data.securityScore.percentage}%</div>
        <div style="display: inline-block; padding: 8px 16px; border-radius: 20px; font-weight: 600; color: white; background-color: ${
          data.securityScore.riskLevel === 'Low' ? '#10b981' :
          data.securityScore.riskLevel === 'Medium' ? '#f59e0b' :
          data.securityScore.riskLevel === 'High' ? '#ef4444' : '#dc2626'
        };">
          ${data.securityScore.riskLevel} Risk Level
        </div>
        <p style="margin: 20px 0 0 0; color: #64748b; font-size: 14px;">Score: ${data.securityScore.score}/${data.securityScore.maxScore} points</p>
      </div>
      
      <!-- Security Disclaimer -->
      <div style="background-color: ${data.securityScore.riskLevel === 'Low' ? '#fef3c7' : '#fee2e2'}; border: 1px solid ${data.securityScore.riskLevel === 'Low' ? '#f59e0b' : '#ef4444'}; border-radius: 8px; padding: 20px; margin: 25px 0;">
        <h3 style="color: ${data.securityScore.riskLevel === 'Low' ? '#92400e' : '#dc2626'}; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">⚠️ Important Security Notice</h3>
        <p style="margin: 0; color: ${data.securityScore.riskLevel === 'Low' ? '#78350f' : '#991b1b'}; font-size: 14px; line-height: 1.5;">
          ${data.securityScore.riskLevel === 'Low' 
            ? 'While your assessment shows a relatively low risk level, cybersecurity threats are constantly evolving. A high score does not guarantee complete protection against all security threats. We strongly recommend regular security audits, ongoing monitoring, and proactive security measures to maintain your organization&apos;s safety.'
            : 'Your assessment indicates significant security vulnerabilities that require immediate attention. These gaps in your cybersecurity posture could expose your organization to data breaches, ransomware attacks, and other serious threats. Professional intervention is strongly recommended.'
          }
        </p>
        ${data.securityScore.riskLevel === 'Low' 
          ? '<p style="margin: 10px 0 0 0; color: #78350f; font-size: 14px; font-weight: 600;">Recommendation: Continue with proactive security measures and regular professional assessments.</p>'
          : '<p style="margin: 10px 0 0 0; color: #991b1b; font-size: 14px; font-weight: 600;">Urgent Action Required: Contact our security experts immediately to address these vulnerabilities.</p>'
        }
      </div>
      
      <!-- Company Info -->
      <div style="background-color: #f1f5f9; border-radius: 8px; padding: 20px; margin: 25px 0;">
        <h3 style="color: ${brandColor}; margin: 0 0 15px 0; font-size: 18px;">Assessment Details</h3>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Company:</strong> ${data.company}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Company Size:</strong> ${data.companySize}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Your Role:</strong> ${data.jobTitle}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Assessment Date:</strong> ${new Date().toLocaleDateString('en-AU')}</p>
      </div>
      
      <!-- Next Steps -->
      <div style="background-color: #eff6ff; border-left: 4px solid ${brandColor}; padding: 20px; margin: 25px 0;">
        <h3 style="color: ${brandColor}; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h3>
        <ul style="margin: 0; padding-left: 20px; color: #475569;">
          <li style="margin-bottom: 8px;">Our cybersecurity expert will review your detailed responses</li>
          <li style="margin-bottom: 8px;">We&apos;ll prepare a comprehensive security report with specific recommendations</li>
          <li style="margin-bottom: 8px;">A member of our team will contact you within one business day</li>
          <li style="margin-bottom: 8px;">We&apos;ll schedule a free consultation to discuss your security strategy</li>
        </ul>
      </div>
      
      <!-- Contact Info -->
      <div style="text-align: center; margin: 40px 0;">
        <p style="font-size: 16px; color: #64748b; margin-bottom: 15px;">Questions about your assessment?</p>
        <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:+61893251196" style="color: ${brandColor}; text-decoration: none;">(08) 9325 1196</a></p>
        <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:info@itsupportperth.net.au" style="color: ${brandColor}; text-decoration: none;">info@itsupportperth.net.au</a></p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">IT Support Perth - Your Trusted Technology Partner</p>
      <p style="margin: 0; color: #94a3b8; font-size: 12px;">This assessment was completed on ${new Date().toLocaleString('en-AU')} from www.itsupportperth.net.au</p>
    </div>
  </div>
</body>
</html>`;
  }
  
  // Team notification email
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Security Assessment Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, ${brandColor} 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
      ${logoSvg}
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Security Assessment</h1>
      <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 14px;">A new security assessment has been submitted</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <!-- Client Information -->
      <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
        <h2 style="color: ${brandColor}; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Client Information</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Name:</strong> ${data.fullName}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: ${brandColor};">${data.email}</a></p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: ${brandColor};">${data.phone}</a></p>
          </div>
          <div>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Company:</strong> ${data.company}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Company Size:</strong> ${data.companySize}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Job Title:</strong> ${data.jobTitle}</p>
          </div>
        </div>
        <p style="margin: 15px 0 5px 0; font-size: 14px;"><strong>How they heard about us:</strong> ${data.hearAbout}</p>
      </div>
      
      <!-- Security Score -->
      <div style="background-color: #eff6ff; border: 2px solid ${brandColor}; border-radius: 8px; padding: 25px; margin-bottom: 25px; text-align: center;">
        <h2 style="color: ${brandColor}; margin: 0 0 15px 0; font-size: 20px;">Security Assessment Results</h2>
        <div style="font-size: 36px; font-weight: bold; color: ${brandColor}; margin: 15px 0;">${data.securityScore.percentage}%</div>
        <div style="display: inline-block; padding: 6px 12px; border-radius: 15px; font-weight: 600; color: white; background-color: ${
          data.securityScore.riskLevel === 'Low' ? '#10b981' :
          data.securityScore.riskLevel === 'Medium' ? '#f59e0b' :
          data.securityScore.riskLevel === 'High' ? '#ef4444' : '#dc2626'
        };">
          ${data.securityScore.riskLevel} Risk Level
        </div>
        <p style="margin: 15px 0 0 0; color: #64748b; font-size: 13px;">Score: ${data.securityScore.score}/${data.securityScore.maxScore} points</p>
      </div>
      
      <!-- Assessment Link -->
      ${assessmentViewUrl ?
        '<div style="background-color: #eff6ff; border-left: 4px solid ' + brandColor + '; padding: 20px; margin-bottom: 25px;">' +
        '<h3 style="color: ' + brandColor + '; margin: 0 0 15px 0; font-size: 16px;">View Complete Assessment</h3>' +
        '<p style="margin: 0 0 10px 0; color: #475569; font-size: 14px;">Access the full assessment details and responses:</p>' +
        '<a href="' + assessmentViewUrl + '" style="display: inline-block; padding: 10px 20px; background-color: ' + brandColor + '; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">View Assessment</a>' +
        '</div>'
        : ''}

      <!-- Key Recommendations -->
      ${data.securityScore.recommendations.length > 0 ?
        '<div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin-bottom: 25px;">' +
        '<h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">Priority Recommendations</h3>' +
        '<ul style="margin: 0; padding-left: 20px; color: #78350f;">' +
        data.securityScore.recommendations.slice(0, 5).map(rec =>
          '<li style="margin-bottom: 5px; font-size: 14px;">' + rec + '</li>'
        ).join('') +
        '</ul>' +
        '</div>'
        : ''}
      
      <!-- Action Items -->
      <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 25px;">
        <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 16px;">Next Steps</h3>
        <ul style="margin: 0; padding-left: 20px; color: #064e3b;">
          <li style="margin-bottom: 5px; font-size: 14px;">Contact ${data.fullName} within one business day</li>
          <li style="margin-bottom: 5px; font-size: 14px;">Prepare detailed security report based on responses</li>
          <li style="margin-bottom: 5px; font-size: 14px;">Schedule consultation to discuss findings</li>
          <li style="margin-bottom: 5px; font-size: 14px;">Provide customized security recommendations</li>
        </ul>
      </div>
      
      <!-- Submission Details -->
      <div style="background-color: #f1f5f9; border-radius: 8px; padding: 15px; margin-top: 25px;">
        <p style="margin: 0; color: #64748b; font-size: 12px; text-align: center;">
          Assessment submitted on ${new Date().toLocaleString('en-AU')} via itsupportperth.net.au
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
};

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const data: SecurityAssessmentData = body;

    // Validate required fields
    const requiredFields: (keyof SecurityAssessmentData)[] = ['fullName', 'email', 'phone', 'company', 'companySize', 'jobTitle', 'hearAbout'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!data.securityScore) {
      return NextResponse.json(
        { error: 'Security score is required' },
        { status: 400 }
      );
    }

    // Initialize database and save assessment
    await initializeDatabase();
    const savedAssessment = await saveSecurityAssessment({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      companySize: data.companySize,
      jobTitle: data.jobTitle,
      hearAbout: data.hearAbout,
      responses: data.responses,
      securityScore: data.securityScore
    });

    // Build assessment view URL
    const assessmentViewUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://itsupportperth.net.au'}/admin/assessments/${savedAssessment.id}`;

    // Log for testing
    console.log('✅ Assessment saved successfully');
    console.log(`📋 View Assessment: ${assessmentViewUrl}`);

    // Send client confirmation email
    const clientEmailResult = await resend.emails.send({
      from: 'IT Support Perth <info@itsupportperth.net.au>',
      to: [data.email],
      subject: 'Your Security Assessment Results - IT Support Perth',
      html: getEmailTemplate(data, true),
      replyTo: 'info@itsupportperth.net.au',
    });

    if (clientEmailResult.error) {
      console.error('Client email error:', clientEmailResult.error);
    }

    // Send team notification email with assessment link
    const teamEmailResult = await resend.emails.send({
      from: 'IT Support Perth <noreply@itsupportperth.net.au>',
      to: ['info@itsupportperth.net.au'],
      subject: `🔒 New Security Assessment: ${data.company} (${data.securityScore.riskLevel} Risk)`,
      html: getEmailTemplate(data, false, assessmentViewUrl),
      replyTo: data.email,
    });

    if (teamEmailResult.error) {
      console.error('Team email error:', teamEmailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Assessment submitted successfully',
      assessmentId: savedAssessment.id,
      clientEmailSent: !clientEmailResult.error,
      teamEmailSent: !teamEmailResult.error,
    });

  } catch (error) {
    console.error('Security assessment error:', error);
    return NextResponse.json(
      { error: 'Failed to process assessment' },
      { status: 500 }
    );
  }
}