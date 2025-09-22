import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Home, Users, Wrench, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-home.jpg';
import Navigation from '@/components/Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Futuristic smart home concept" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            🏠 The Future of Home Building is Here
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              Pakka Karle
            </span>
            <br />
            <span className="text-foreground">Your All-in-One</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
              Home Solution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Design with drag & drop, book expert workers, maintain with AI automation. 
            Everything you need to build and maintain your dream home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link to="/prebuilt-designs">
              <Button className="btn-hero text-lg px-10 py-6 glow">
                <Home className="w-5 h-5 mr-2" />
                Start Designing
              </Button>
            </Link>
            <Link to="/workers">
              <Button className="btn-secondary text-lg px-10 py-6">
                <Users className="w-5 h-5 mr-2" />
                Book a Worker
              </Button>
            </Link>
            <Link to="/service-providers">
              <Button className="btn-secondary text-lg px-10 py-6">
                <Wrench className="w-5 h-5 mr-2" />
                Book Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Home className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
            <Brain className="w-10 h-10 text-accent" />
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            From initial design to final maintenance, we've got your entire home journey covered.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/design" className="group">
              <div className="glass-card p-8 h-full hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Design & Plan</h3>
                <p className="text-muted-foreground">Create your dream home with our intuitive drag & drop tools</p>
              </div>
            </Link>
            
            <Link to="/workers" className="group">
              <div className="glass-card p-8 h-full hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Build & Construct</h3>
                <p className="text-muted-foreground">Connect with verified professionals to bring your vision to life</p>
              </div>
            </Link>
            
            <Link to="/services" className="group">
              <div className="glass-card p-8 h-full hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                <Wrench className="w-12 h-12 text-warning mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Maintain & Service</h3>
                <p className="text-muted-foreground">Keep your home perfect with on-demand maintenance services</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Build Your Dream Home?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners who trust Pakka Karle for their home building and maintenance needs.
          </p>
          <Link to="/auth">
            <Button className="btn-hero text-lg px-12 py-6 glow">
              Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;