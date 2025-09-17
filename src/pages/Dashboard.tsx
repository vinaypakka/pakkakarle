import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Layers, Brain, Users, Settings, LogOut, Palette } from 'lucide-react';
import { toast } from 'sonner';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pakka Karle
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {user?.email}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Welcome to your dashboard
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              Ready to Build?
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred way to design and build your dream home
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* User Profile */}
          <Card className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">User Profile</CardTitle>
              <CardDescription>
                Manage your account settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                View Profile
              </Button>
            </CardContent>
          </Card>

          {/* Drag & Drop Feature */}
          <Link to="/prebuilt-designs">
            <Card className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-105 h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Drag & Drop Design</CardTitle>
                <CardDescription>
                  Choose from pre-built designs and customize with SketchUp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-hero">
                  <Palette className="w-4 h-4 mr-2" />
                  Start Designing
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* AI Mode */}
          <Link to="/ai-mode">
            <Card className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-105 h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-warning/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-lg">AI Mode</CardTitle>
                <CardDescription>
                  Automate your home maintenance with AI-powered solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Brain className="w-4 h-4 mr-2" />
                  Explore AI
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Service Provider */}
          <Link to="/workers">
            <Card className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-105 h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Book Service Provider</CardTitle>
                <CardDescription>
                  Connect with verified professionals for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Find Workers
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Quick Actions
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/design">
              <Button className="btn-secondary">
                Continue Previous Design
              </Button>
            </Link>
            <Link to="/services">
              <Button className="btn-secondary">
                Book Maintenance
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;