import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Home, MousePointer, Layers, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import designIcon from '@/assets/design-icon.jpg';

const Design = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MousePointer,
      title: "Drag & Drop Interface",
      description: "Intuitive design tools that make home planning effortless. Simply drag and drop elements to create your perfect layout."
    },
    {
      icon: Layers,
      title: "SketchUp Integration",
      description: "Professional 3D modeling powered by SketchUp. Visualize your home in stunning detail before you build."
    },
    {
      icon: Home,
      title: "Real-time Preview",
      description: "See your changes instantly with our real-time rendering engine. Every modification is reflected immediately."
    }
  ];

  const designSteps = [
    { title: "Choose Your Plot", description: "Select plot size and orientation" },
    { title: "Layout Rooms", description: "Drag & drop rooms to create your floor plan" },
    { title: "Add Details", description: "Windows, doors, fixtures and finishes" },
    { title: "3D Visualization", description: "View your home in stunning 3D detail" },
    { title: "Generate Plans", description: "Get professional blueprints and material lists" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={designIcon} 
            alt="Home design interface" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            🎨 Powered by SketchUp
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              Design Your
            </span>
            <br />
            <span className="text-foreground">Dream Home</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Create stunning home designs with our intuitive drag & drop interface. 
            Powered by professional SketchUp integration for precise 3D visualization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button className="btn-hero text-lg px-10 py-6 glow">
              <Play className="w-5 h-5 mr-2" />
              Start Designing
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Home className="w-5 h-5 mr-2" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Design Made Simple
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade design tools made accessible for everyone. No CAD experience required.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <Card 
                  key={index}
                  className={`glass-card p-8 cursor-pointer transition-all duration-500 ${
                    isActive ? 'border-primary/40 scale-105 animate-pulse-glow' : 'hover:border-primary/30'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-0 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-success/20 text-success border-success/30">
              Step by Step
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                Design Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our guided process to create professional home designs in minutes, not hours.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {designSteps.map((step, index) => (
              <div key={index} className="flex items-center mb-8 group">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg mr-6 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <Card className="glass-card flex-1 p-6 group-hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-hero text-lg px-12 py-6 glow">
              Start Your Design <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;