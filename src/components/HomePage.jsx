import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Laptop,
  TrendingUp,
  Clock,
  Bell
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from './ui/badge';

export default function HomePage({ onNavigate }) {
  const { user } = useAuth();

  const quickLinks = [
    { title: 'Browse Resources', icon: BookOpen, page: 'resources', color: 'bg-blue-500' },
    { title: 'View Schedule', icon: Calendar, page: 'schedule', color: 'bg-green-500' },
    { title: 'Academic Support', icon: GraduationCap, page: 'resources', color: 'bg-purple-500' },
    { title: 'Career Services', icon: Briefcase, page: 'resources', color: 'bg-orange-500' },
  ];

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case 'student':
        return {
          welcome: `Welcome back, ${user?.name}!`,
          subtitle: 'Here\'s your personalized dashboard',
          stats: [
            { label: 'Current Courses', value: '4', icon: BookOpen },
            { label: 'Upcoming Classes', value: '2', icon: Clock },
            { label: 'Notifications', value: '5', icon: Bell },
          ],
        };
      case 'faculty':
        return {
          welcome: `Welcome, Professor ${user?.name}`,
          subtitle: 'Manage your classes and students',
          stats: [
            { label: 'Active Courses', value: '3', icon: BookOpen },
            { label: 'Students Enrolled', value: '87', icon: GraduationCap },
            { label: 'Office Hours Today', value: '2', icon: Clock },
          ],
        };
      case 'admin':
        return {
          welcome: `Welcome, ${user?.name}`,
          subtitle: 'Campus administration overview',
          stats: [
            { label: 'Total Students', value: '2,543', icon: GraduationCap },
            { label: 'Faculty Members', value: '187', icon: Briefcase },
            { label: 'Active Events', value: '12', icon: Calendar },
          ],
        };
      default:
        return {
          welcome: `Welcome, ${user?.name}!`,
          subtitle: 'Your campus portal',
          stats: [],
        };
    }
  };

  const content = getRoleSpecificContent();

  const recentActivity = [
    { title: 'Assignment submitted', description: 'Computer Science 101', time: '2 hours ago' },
    { title: 'New announcement', description: 'Mathematics 201', time: '5 hours ago' },
    { title: 'Grade posted', description: 'English Literature', time: '1 day ago' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 md:p-12">
        <div className="relative z-10 space-y-4">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {user?.role?.toUpperCase()}
          </Badge>
          <h1 className="text-white">{content.welcome}</h1>
          <p className="text-lg text-white/90">
            {content.subtitle}
          </p>
          <div className="flex gap-3 pt-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('resources')}
            >
              Explore Resources
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => onNavigate('schedule')}
            >
              View Schedule
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <GraduationCap className="h-full w-full" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {content.stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h2>Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate(link.page)}
              >
                {/* fixed height + perfect centering */}
                <div className="h-24 flex items-center justify-center px-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-lg ${link.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-base font-medium m-0 leading-none">
                      {link.title}
                    </CardTitle>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Assistant Info */}
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
          <CardHeader>
            <CardTitle>AI Campus Assistant</CardTitle>
            <CardDescription>Get instant help with campus resources</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Click the AI assistant button in the bottom-right corner to get help with:
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                Finding resources and services
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                Getting directions on campus
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                Answering common questions
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                Finding study spaces and hours
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Try AI Assistant
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
