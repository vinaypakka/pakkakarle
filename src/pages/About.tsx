import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Clock, Star, Users, Home, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const About = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Book services in under 60 seconds with our streamlined platform. No lengthy processes or waiting times.",
      stat: "60 seconds"
    },
    {
      icon: Shield,
      title: "100% Verified",
      description: "All workers and service providers are background-checked, skill-verified, and insured for your peace of mind.",
      stat: "100% verified"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your home needs. Emergency services available anytime, anywhere.",
      stat: "24/7 available"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Top-rated professionals delivering exceptional results every time. Guaranteed satisfaction on all services.",
      stat: "4.8+ rating"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "5,000+", label: "Verified Workers" },
    { value: "50,000+", label: "Projects Completed" },
    { value: "99.9%", label: "Customer Satisfaction" }
  ];

  const whyChooseUs = [
    {
      title: "All-in-One Platform",
      description: "Design, build, and maintain your home all from one convenient platform. No need to juggle multiple apps or services."
    },
    {
      title: "AI-Powered Intelligence",
      description: "Smart automation that learns from your preferences and optimizes every decision for better results and cost savings."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Get clear, upfront pricing with detailed breakdowns for every service."
    },
    {
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and satisfaction guarantees on all services."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            🏠 Trusted by 10,000+ Customers
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-foreground">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              Pakka Karle?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            We're not just another service platform. We're your trusted partner in creating and maintaining 
            the perfect home, backed by cutting-edge technology and genuine care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link to="/design">
              <Button className="btn-hero text-lg px-10 py-6 glow">
                <Home className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </Link>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card p-8 text-center hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Our Promise
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What Makes Us Different
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've reimagined home services from the ground up, focusing on what matters most to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <Card key={index} className="glass-card p-8 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                          <Badge className="bg-success/20 text-success border-success/30">
                            {benefit.stat}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                The Pakka Karle Advantage
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that comes from a platform built specifically for modern homeowners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="glass-card p-8 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              To revolutionize the home building and maintenance industry by making quality services 
              accessible, affordable, and effortless for every homeowner. We believe that everyone 
              deserves a beautiful, well-maintained home without the stress and complexity traditionally 
              associated with home projects.
            </p>
            
            <Link to="/design">
              <Button className="btn-hero text-lg px-12 py-6 glow">
                Join Our Mission <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Experience the Difference?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Pakka Karle their trusted home partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/design">
              <Button className="btn-hero text-lg px-12 py-6 glow">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button className="btn-secondary text-lg px-12 py-6">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;