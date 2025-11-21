import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Wrench } from 'lucide-react';
import pkLogo from '@/assets/pk-logo-filled.jpg';

const SignupLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
            <img 
              src={pkLogo} 
              alt="Pakka Karle Logo" 
              className="w-full h-full object-contain rounded-lg animate-float"
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Welcome to Pakka Karle
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to get started with India's most trusted home services platform
          </p>
        </div>

        {/* Two Signup Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Card */}
          <Card className="glass-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-primary/30">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                <Home className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-2">Find Services</CardTitle>
              <CardDescription className="text-base">
                Looking for trusted home services? Connect with verified professionals near you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  <span>Access to verified service providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  <span>Compare prices and reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  <span>Book services instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  <span>Track your service requests</span>
                </li>
              </ul>
              <Button
                onClick={() => navigate('/auth?role=customer')}
                className="w-full btn-hero bg-gradient-to-r from-primary to-primary-glow"
                size="lg"
              >
                Join as Customer
              </Button>
            </CardContent>
          </Card>

          {/* Partner Card */}
          <Card className="glass-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-warning/30">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-warning/10 to-warning/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-warning/20 group-hover:to-warning/10 transition-all duration-300">
                <Wrench className="w-12 h-12 text-warning" />
              </div>
              <CardTitle className="text-3xl mb-2">Become a Partner</CardTitle>
              <CardDescription className="text-base">
                Join our network of trusted professionals and grow your business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✓</span>
                  <span>Get connected with local customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✓</span>
                  <span>Manage bookings and payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✓</span>
                  <span>Build your professional profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✓</span>
                  <span>Grow your business with us</span>
                </li>
              </ul>
              <Button
                onClick={() => navigate('/auth?role=partner')}
                className="w-full btn-hero bg-gradient-to-r from-warning to-warning/80 hover:from-warning/90 hover:to-warning/70"
                size="lg"
              >
                Join as Partner
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Already have account */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/auth')}
              className="text-primary hover:underline font-semibold"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupLanding;
