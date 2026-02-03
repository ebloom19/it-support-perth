'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Shield, 
  FileText, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  Monitor,
  Bell,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'Assessments',
      href: '/admin/assessments',
      icon: Shield,
    },
    {
      title: 'Blog',
      href: '/admin/blog',
      icon: FileText,
    },
  ];

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const res = await fetch('/api/admin/auth/logout', { method: 'POST' });
      if (res.ok) {
        toast.success('Logged out successfully');
        router.push('/admin/login');
        router.refresh();
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      toast.error('Failed to logout');
      console.error(err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex">
      {/* Sidebar Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } fixed inset-y-0 left-0 z-50 bg-white border-r shadow-sm transition-all duration-300 ease-in-out hidden md:flex flex-col`}
      >
        <div className="h-16 flex items-center px-6 border-b">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="bg-primary p-2 rounded-lg shrink-0">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-lg truncate">IT Support Admin</span>
            )}
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <TooltipProvider key={item.href} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                        isActive 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-white' : 'group-hover:text-primary'}`} />
                      {isSidebarOpen && (
                        <span className="font-medium text-sm truncate">{item.title}</span>
                      )}
                      {isSidebarOpen && isActive && (
                        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                      )}
                    </Link>
                  </TooltipTrigger>
                  {!isSidebarOpen && (
                    <TooltipContent side="right">
                      {item.title}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 h-11 text-gray-500 hover:text-red-600 hover:bg-red-50 group font-medium`}
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  <LogOut className={`h-5 w-5 shrink-0 group-hover:text-red-600 ${isLoggingOut ? 'animate-pulse' : ''}`} />
                  {isSidebarOpen && <span>{isLoggingOut ? 'Logging out...' : 'Sign Out'}</span>}
                </Button>
              </TooltipTrigger>
              {!isSidebarOpen && (
                <TooltipContent side="right">
                  Logout
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-3 top-20 bg-white border shadow-md rounded-full h-6 w-6 hidden md:flex"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        {/* Top Header */}
        <header className="h-16 bg-white border-b sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="relative hidden sm:flex items-center">
                  <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search dashboard..." 
                    className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm w-64 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
              </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>
            <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-bold text-gray-900 leading-none">Admin</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-tighter mt-1 font-semibold">Super User</span>
              </div>
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm border-2 border-primary/20">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8 max-w-[1400px] mx-auto min-h-[calc(100-4rem)]">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}
    </div>
  );
}
