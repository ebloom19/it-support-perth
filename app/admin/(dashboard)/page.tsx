'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, ArrowRight, Activity, Users, Settings } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Assessments',
      description: 'View and analyze security assessment results',
      icon: Shield,
      href: '/admin/assessments',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Blog Management',
      description: 'Create and edit blog posts using the Novel editor',
      icon: FileText,
      href: '/admin/blog',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back. Manage your platform settings and view results.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-lg transition-all group overflow-hidden border-2 hover:border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">{stat.title}</CardTitle>
                <div className={`${stat.bgColor} p-3 rounded-xl transition-colors group-hover:bg-primary/10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color} group-hover:text-primary`} />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mt-2">
                  {stat.description}
                </CardDescription>
                <div className="flex items-center mt-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Go to {stat.title} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
              <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                      <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">System Status</p>
                      <p className="text-sm font-medium">All systems operational</p>
                  </div>
              </div>
          </Card>
          <Card className="p-6">
              <div className="flex items-center gap-4">
                  <div className="p-2 bg-orange-50 rounded-lg">
                      <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Admin Access</p>
                      <p className="text-sm font-medium">Secure Session Active</p>
                  </div>
              </div>
          </Card>
          <Card className="p-6">
              <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                      <Settings className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Configuration</p>
                      <p className="text-sm font-medium">Production Environment</p>
                  </div>
              </div>
          </Card>
      </div>
    </div>
  );
}
