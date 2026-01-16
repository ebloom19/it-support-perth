'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Search, ArrowRight, LogOut } from 'lucide-react';

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
  const router = useRouter();
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [filteredAssessments, setFilteredAssessments] = useState<Assessment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
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
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Security Assessments</h1>
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
            <div className="text-sm text-gray-600 mb-6">
              Showing {filteredAssessments.length} of {assessments.length} assessments
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssessments.map((assessment) => (
                <Link key={assessment.id} href={`/admin/assessments/${assessment.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">
                            {assessment.fullName}
                          </h3>
                          <Badge className={getRiskColor(assessment.securityScore.riskLevel)}>
                            {assessment.securityScore.riskLevel}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-2 mb-6">
                          <p className="truncate">
                            <span className="text-gray-500">Company:</span> {assessment.company}
                          </p>
                          <p className="truncate">
                            <span className="text-gray-500">Email:</span> {assessment.email}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatDate(assessment.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-center flex-1">
                          <div className="text-2xl font-bold text-blue-600">
                            {assessment.securityScore.percentage}%
                          </div>
                          <p className="text-xs text-gray-600">Security Score</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 ml-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
