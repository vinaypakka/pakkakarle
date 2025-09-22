import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Brain, Zap, Target, Clock, CheckCircle, Star, Calendar, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { AIDesignChatbot } from '@/components/AIDesignChatbot';

const AIMode = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const aiFeatures = [
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI analyzes your project requirements and matches you with the most suitable workers and service providers",
      benefit: "98% accuracy rate"
    },
    {
      icon: Clock,
      title: "Optimal Scheduling", 
      description: "Intelligent scheduling optimization that considers availability, location, and project timelines",
      benefit: "30% faster completion"
    },
    {
      icon: Star,
      title: "Predictive Insights",
      description: "AI predicts potential issues and recommends preventive maintenance for your home systems",
      benefit: "50% fewer breakdowns"
    },
    {
      icon: Zap,
      title: "Cost Optimization",
      description: "Smart cost analysis provides the best value recommendations based on market data and quality metrics",
      benefit: "Average 20% savings"
    }
  ];

  const automationWorkflows = [
    {
      title: "Project Initiation",
      steps: ["Analyze requirements", "Match workers", "Generate timeline", "Send notifications"]
    },
    {
      title: "Progress Tracking",
      steps: ["Monitor work progress", "Update stakeholders", "Quality checkpoints", "Payment processing"]
    },
    {
      title: "Maintenance Alerts",
      steps: ["System monitoring", "Predictive analysis", "Alert generation", "Service booking"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-warning/20 text-warning border-warning/30 animate-pulse-glow">
            🤖 Powered by n8n Automation
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-warning via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              AI Mode
            </span>
            <br />
            <span className="text-foreground">Smart Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Let AI handle the complex decisions. Our intelligent system powered by n8n workflows 
            automatically matches, schedules, and optimizes every aspect of your home projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              className="btn-hero text-lg px-10 py-6 glow"
              onClick={() => setIsChatbotOpen(true)}
            >
              <Brain className="w-5 h-5 mr-2" />
              Activate AI Mode
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Zap className="w-5 h-5 mr-2" />
              See Demo
            </Button>
          </div>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center">
            <Brain className="w-8 h-8 text-warning" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
            <Zap className="w-10 h-10 text-accent" />
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              AI-Powered Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of home services with AI that learns, adapts, and optimizes every decision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <Card key={index} className="glass-card p-8 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                          <Badge className="bg-success/20 text-success border-success/30">
                            {feature.benefit}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
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

      {/* AI Demo Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-warning/20 text-warning border-warning/30">
                <Brain className="w-4 h-4 mr-2" />
                Live AI Recommendation
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
                  See AI in Action
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Watch how our AI instantly analyzes your needs and provides intelligent recommendations 
                for the best workers, optimal scheduling, and cost-effective solutions.
              </p>
              
              <Button className="btn-hero text-lg">
                <Brain className="w-5 h-5 mr-2" />
                Try AI Mode Now
              </Button>
            </div>
            
            <div className="relative">
              <Card className="glass-card p-8 animate-float">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">AI Recommendation Engine</h3>
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

      {/* Automation Workflows Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              n8n Workflows
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Automated Workflows
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our n8n-powered automation workflows handle every aspect of your project from start to finish, 
              ensuring seamless coordination and optimal results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {automationWorkflows.map((workflow, index) => (
              <Card key={index} className="glass-card p-8 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{workflow.title}</h3>
                  <div className="space-y-4">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                          {stepIndex + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience the Future Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the AI revolution in home services. Let intelligent automation handle the complexity while you enjoy the results.
          </p>
          <Button className="btn-hero text-lg px-12 py-6 glow">
            Activate AI Mode <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* AI Design Chatbot */}
      <AIDesignChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </div>
  );
};

export default AIMode;