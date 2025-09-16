import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Home, Users, Wrench, Brain, Calendar, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-home.jpg';
import designIcon from '@/assets/design-icon.jpg';
import workersIcon from '@/assets/workers-icon.jpg';
import servicesIcon from '@/assets/services-icon.jpg';

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Home,
      title: "Design with Drag & Drop",
      description: "Create your dream home with our intuitive design tools integrated with SketchUp. Drag, drop, and visualize every detail.",
      image: designIcon
    },
    {
      icon: Users,
      title: "Book Expert Workers",
      description: "Connect with verified builders, carpenters, painters, and more. Quality work guaranteed with transparent pricing.",
      image: workersIcon
    },
    {
      icon: Wrench,
      title: "Maintain & Service",
      description: "Keep your home perfect with on-demand plumbers, electricians, cleaners, and maintenance experts.",
      image: servicesIcon
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Book services in under 60 seconds with our streamlined platform"
    },
    {
      icon: Shield,
      title: "100% Verified",
      description: "All workers and service providers are background-checked and certified"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your home needs"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Top-rated professionals delivering exceptional results every time"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pakka Karle
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">How It Works</a>
            <a href="#ai-mode" className="text-muted-foreground hover:text-primary transition-smooth">AI Mode</a>
            <a href="#booking" className="text-muted-foreground hover:text-primary transition-smooth">Booking</a>
          </div>
          <Button className="btn-hero">
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

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
            <Button className="btn-hero text-lg px-10 py-6 glow">
              <Home className="w-5 h-5 mr-2" />
              Design My Home
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Users className="w-5 h-5 mr-2" />
              Book a Worker
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Wrench className="w-5 h-5 mr-2" />
              Book Services
            </Button>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Three Simple Steps
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From design to completion, we've streamlined the entire home building process into three simple steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <Card 
                  key={index}
                  className={`glass-card p-8 cursor-pointer transition-all duration-500 ${
                    isActive ? 'border-primary/40 scale-105 animate-pulse-glow' : 'hover:border-primary/30'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-0 text-center">
                    <div className="mb-6 relative">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-24 h-24 mx-auto rounded-2xl object-cover mb-4"
                      />
                      <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                      Step {index + 1}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {isActive && (
                      <Button className="mt-6 btn-hero">
                        Get Started <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Mode Section */}
      <section id="ai-mode" className="py-20 bg-gradient-card relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-warning/20 text-warning border-warning/30">
                <Brain className="w-4 h-4 mr-2" />
                Powered by AI
              </Badge>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
                  AI Mode
                </span>
                <br />
                <span className="text-foreground">Smart Automation</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our AI-powered automation workflows powered by n8n intelligently match you with the best workers 
                and service providers based on your project requirements, budget, and timeline.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Automatic worker matching based on skills and availability",
                  "Smart scheduling optimization for faster project completion",
                  "Predictive maintenance alerts for your home systems",
                  "Intelligent cost estimation with market insights"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="btn-hero text-lg">
                <Brain className="w-5 h-5 mr-2" />
                Try AI Mode
              </Button>
            </div>
            
            <div className="relative">
              <Card className="glass-card p-8 animate-float">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">AI Recommendation</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Best Carpenter Match</span>
                      </div>
                      <Badge className="bg-success/20 text-success">98% Match</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span>Optimal Schedule</span>
                      </div>
                      <Badge className="bg-warning/20 text-warning">2 Days Saved</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-warning" />
                        <span>Cost Optimization</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary">15% Savings</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking System Section */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-success/20 text-success border-success/30">
              <Calendar className="w-4 h-4 mr-2" />
              Seamless Integration
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                Smart Booking System
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our booking system integrates seamlessly with Google Sheets and n8n automation workflows 
              for instant updates and real-time coordination.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="glass-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Instant Booking Flow</h3>
                <div className="space-y-6">
                  {[
                    { step: "Select Service", status: "completed" },
                    { step: "Choose Date & Time", status: "completed" },
                    { step: "Confirm Details", status: "active" },
                    { step: "Payment & Scheduling", status: "pending" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-success text-white' :
                        item.status === 'active' ? 'bg-primary text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <span className={`font-medium ${
                        item.status === 'active' ? 'text-foreground' : 
                        item.status === 'completed' ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        {item.step}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-8 btn-hero">
                  Complete Booking <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Google Sheets Integration</h4>
                      <p className="text-sm text-muted-foreground">Real-time booking updates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-warning" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">n8n Automation</h4>
                      <p className="text-sm text-muted-foreground">Workflow automation magic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Secure Processing</h4>
                      <p className="text-sm text-muted-foreground">Bank-grade security</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pakka Karle Section */}
      <section className="py-20 bg-gradient-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Why Choose</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pakka Karle?
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-scale-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-warning bg-clip-text text-transparent animate-gradient">
              Start Designing Your
            </span>
            <br />
            <span className="text-foreground">Dream Home Today</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who trust Pakka Karle for their complete home solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-xl px-12 py-6 glow animate-pulse-glow">
              <Home className="w-6 h-6 mr-2" />
              Start Designing Now
            </Button>
            <Button className="btn-secondary text-xl px-12 py-6">
              <Users className="w-6 h-6 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary/50 backdrop-blur-sm border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pakka Karle
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your all-in-one home solution for design, construction, and maintenance. 
                Building dreams with technology and expertise.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Contact Us</Button>
                <Button variant="outline" size="sm">Support</Button>
                <Button variant="outline" size="sm">Careers</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Home Design</div>
                <div>Construction</div>
                <div>Maintenance</div>
                <div>AI Automation</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>About Us</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Help Center</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/10 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Pakka Karle. All rights reserved. Built with passion for perfect homes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;