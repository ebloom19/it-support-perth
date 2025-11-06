'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Search, ArrowRight } from 'lucide-react';

interface Assessment {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  company: string;
  companySize: string;
  securityScore: {
    percentage: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  };
}

export default function AssessmentsPage() {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [filteredAssessments, setFilteredAssessments] = useState<Assessment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/admin/assessments');
      if (!response.ok) throw new Error('Failed to fetch assessments');
      const data = await response.json();
      setAssessments(data);
      setFilteredAssessments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load assessments');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (!value.trim()) {
      setFilteredAssessments(assessments);
      return;
    }

    const filtered = assessments.filter(a =>
      a.fullName.toLowerCase().includes(value.toLowerCase()) ||
      a.email.toLowerCase().includes(value.toLowerCase()) ||
      a.company.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAssessments(filtered);
  };

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-600">Loading assessments...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Security Assessments</h1>
          </div>
          <p className="text-gray-600">View and manage all submitted security assessments</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by name, email, or company..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Error Message */}
        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-800">{error}</p>
            </CardContent>
          </Card>
        )}

        {/* Assessments Grid */}
        <div className="space-y-4">
          {filteredAssessments.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <p className="text-gray-500">
                  {searchTerm ? 'No assessments found matching your search.' : 'No assessments yet.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="text-sm text-gray-600 mb-4">
                Showing {filteredAssessments.length} of {assessments.length} assessments
              </div>
              {filteredAssessments.map((assessment) => (
                <Link key={assessment.id} href={`/admin/assessments/${assessment.id}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 truncate">
                              {assessment.fullName}
                            </h3>
                            <Badge className={getRiskColor(assessment.securityScore.riskLevel)}>
                              {assessment.securityScore.riskLevel} Risk
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>{assessment.company}</p>
                            <p>{assessment.email}</p>
                            <p className="text-xs text-gray-500">
                              {formatDate(assessment.createdAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-4 flex-shrink-0">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">
                              {assessment.securityScore.percentage}%
                            </div>
                            <p className="text-xs text-gray-600">Score</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
