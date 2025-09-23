import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Brain, Zap, Target, Clock, CheckCircle, Star, Calendar, Users, Sparkles, Bot, TrendingUp, Shield, Rocket, PlayCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { AIDesignChatbot } from '@/components/AIDesignChatbot';

const AIMode = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [statsProgress, setStatsProgress] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsProgress([98, 85, 92, 87]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const statistics = [
    { label: "Success Rate", value: 98, suffix: "%" },
    { label: "Time Saved", value: 85, suffix: "%" },
    { label: "Client Satisfaction", value: 92, suffix: "%" },
    { label: "Cost Optimization", value: 87, suffix: "%" }
  ];
  const aiFeatures = [
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI analyzes your project requirements and matches you with the most suitable workers and service providers",
      benefit: "98% accuracy rate",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Clock,
      title: "Optimal Scheduling", 
      description: "Intelligent scheduling optimization that considers availability, location, and project timelines",
      benefit: "30% faster completion",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Star,
      title: "Predictive Insights",
      description: "AI predicts potential issues and recommends preventive maintenance for your home systems",
      benefit: "50% fewer breakdowns",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      icon: Zap,
      title: "Cost Optimization",
      description: "Smart cost analysis provides the best value recommendations based on market data and quality metrics",
      benefit: "Average 20% savings",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Automated quality checks and real-time monitoring ensure consistent high-standard results",
      benefit: "99.5% quality score",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics provide insights into project efficiency and improvement opportunities",
      benefit: "35% improvement",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
    }
  ];

  const demoCards = [
    {
      title: "Smart Worker Matching",
      description: "AI instantly finds the perfect match",
      steps: ["Analyze requirements", "Scan worker database", "Score compatibility", "Present top matches"],
      progress: 85
    },
    {
      title: "Dynamic Pricing",
      description: "Real-time cost optimization",
      steps: ["Market analysis", "Quality assessment", "Competition review", "Price optimization"],
      progress: 92
    },
    {
      title: "Predictive Maintenance",
      description: "Prevent issues before they occur",
      steps: ["System monitoring", "Pattern analysis", "Risk assessment", "Alert generation"],
      progress: 78
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
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-warning/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-warning/20 text-warning border-warning/30 animate-pulse-glow backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Advanced AI & n8n Automation
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-warning via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              AI Mode
            </span>
            <br />
            <span className="text-foreground">Smart Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Experience the future of home services with AI that thinks, learns, and optimizes. 
            Our intelligent system powered by n8n workflows automatically handles matching, 
            scheduling, quality control, and cost optimization.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">
                  {statsProgress[index]}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <Progress value={statsProgress[index]} className="mt-2 h-2" />
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              className="btn-hero text-lg px-10 py-6 glow relative overflow-hidden group"
              onClick={() => setIsChatbotOpen(true)}
            >
              <Brain className="w-5 h-5 mr-2" />
              Activate AI Mode
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6 group">
              <PlayCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-warning/30 to-accent/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Brain className="w-10 h-10 text-warning" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Bot className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-green-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Rocket className="w-8 h-8 text-accent" />
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-b from-background via-background/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-warning bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the future of home services with AI that learns, adapts, and optimizes every decision.
              Our advanced algorithms ensure perfect matches and optimal outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <Card key={index} className={`glass-card p-8 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${feature.bgColor}`}>
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <Badge className="bg-success/20 text-success border-success/30 mb-4">
                        {feature.benefit}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive AI Demo Section */}
      <section className="py-20 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-warning/20 text-warning border-warning/30">
              <Bot className="w-4 h-4 mr-2" />
              Live AI Demonstration
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-warning via-accent to-primary bg-clip-text text-transparent">
                Watch AI in Action
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience our AI's decision-making process in real-time. See how it analyzes, processes, and delivers 
              optimal solutions within seconds.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {demoCards.map((demo, index) => (
              <Card 
                key={index} 
                className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeDemo === index ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                  <p className="text-muted-foreground mb-4">{demo.description}</p>
                  <Progress value={demo.progress} className="mb-4" />
                  <div className="text-sm font-medium text-primary">{demo.progress}% Complete</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="glass-card p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-3xl flex items-center justify-center mb-4">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">AI Processing Engine</h3>
                    <p className="text-muted-foreground mt-2">Real-time analysis in progress...</p>
                  </div>
                  
                  <div className="space-y-4">
                    {demoCards[activeDemo].steps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground flex-1">{step}</span>
                        <CheckCircle className="w-5 h-5 text-success" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span className="font-semibold">Best Worker Match</span>
                    </div>
                    <Badge className="bg-success/20 text-success">98.5% Accuracy</Badge>
                  </div>
                  <Progress value={98} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Found perfect carpenter in 1.2s</p>
                </CardContent>
              </Card>

              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-accent" />
                      <span className="font-semibold">Schedule Optimization</span>
                    </div>
                    <Badge className="bg-warning/20 text-warning">3 Days Saved</Badge>
                  </div>
                  <Progress value={85} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Optimized timeline calculated</p>
                </CardContent>
              </Card>

              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-success" />
                      <span className="font-semibold">Cost Analysis</span>
                    </div>
                    <Badge className="bg-primary/20 text-primary">22% Savings</Badge>
                  </div>
                  <Progress value={92} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Market analysis complete</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="btn-hero text-lg px-12 py-4 glow"
              onClick={() => setIsChatbotOpen(true)}
            >
              <Brain className="w-5 h-5 mr-2" />
              Experience AI Power Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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