'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, ArrowLeft, Mail, Phone, Building2, Users, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { getQuestionText } from '@/lib/security-assessment-questions';

interface Assessment {
  id: string;
  createdAt: Date;
  fullName: string;
  email: string;
  phone: string;
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

export default function AssessmentDetailPage() {
  const params = useParams();
  const assessmentId = params.id as string;
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAssessment();
  }, [assessmentId]);

  const fetchAssessment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/admin/assessments/${assessmentId}`);
      if (!response.ok) throw new Error('Failed to fetch assessment');
      const data = await response.json();
      setAssessment(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load assessment');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading assessment...</p>
        </div>
      </div>
    );
  }

  if (error || !assessment) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/admin/assessments">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Assessments
            </Button>
          </Link>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error || 'Assessment not found'}</AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link href="/admin/assessments">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Assessments
          </Button>
        </Link>

        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{assessment.fullName}</h1>
              <p className="text-gray-600">{assessment.company}</p>
            </div>
            <Badge className={`${getRiskColor(assessment.securityScore.riskLevel)} text-lg px-4 py-2`}>
              {assessment.securityScore.riskLevel} Risk
            </Badge>
          </div>
          <p className="text-sm text-gray-500">
            Assessment submitted on {formatDate(assessment.createdAt)}
          </p>
        </div>

        {/* Score Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Security Assessment Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Overall Score</p>
                <div className="text-4xl font-bold text-blue-600">
                  {assessment.securityScore.percentage}%
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-2">Points</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {assessment.securityScore.score}/{assessment.securityScore.maxScore}
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${assessment.securityScore.percentage}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-900">{assessment.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-gray-900">{assessment.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Company</p>
                <p className="text-gray-900">{assessment.company}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Company Size</p>
                <p className="text-gray-900">{assessment.companySize}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Job Title</p>
                <p className="text-gray-900">{assessment.jobTitle}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">How they heard about us</p>
                <p className="text-gray-900">{assessment.hearAbout}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        {assessment.securityScore.recommendations.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Priority Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {assessment.securityScore.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-0.5 flex-shrink-0">
                      {index + 1}.
                    </span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Assessment Responses */}
        <Card>
          <CardHeader>
            <CardTitle>Assessment Responses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(assessment.responses).map(([questionId, response], index) => (
              <div key={questionId} className="pb-6 border-b last:border-b-0 last:pb-0">
                <p className="text-sm font-semibold text-blue-600 mb-2">
                  Question {index + 1}
                </p>
                <p className="text-gray-900 font-medium mb-3">
                  {getQuestionText(questionId)}
                </p>
                <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                  <p className="text-gray-700">{response}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
