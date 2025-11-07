import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Star, Shield, Clock, Hammer, Paintbrush, Wrench, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import workersIcon from '@/assets/workers-icon.jpg';

const Workers = () => {
  const workerCategories = [
    {
      icon: HardHat,
      title: "Construction Workers",
      description: "Skilled builders and masons for your construction needs",
      services: ["Foundation work", "Brick laying", "Concrete work", "General construction"],
      rating: 4.8,
      available: 45
    },
    {
      icon: Hammer,
      title: "Carpenters",
      description: "Expert woodworkers for custom furniture and fittings",
      services: ["Custom furniture", "Door & window frames", "Kitchen cabinets", "Interior work"],
      rating: 4.9,
      available: 32
    },
    {
      icon: Paintbrush,
      title: "Painters",
      description: "Professional painters for interior and exterior work",
      services: ["Interior painting", "Exterior painting", "Texture work", "Wall finishing"],
      rating: 4.7,
      available: 28
    },
    {
      icon: Wrench,
      title: "Specialized Workers",
      description: "Experts for tiles, plumbing rough work, and more",
      services: ["Tile installation", "Plumbing rough work", "Electrical rough work", "Flooring"],
      rating: 4.8,
      available: 21
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Verified",
      description: "All workers are background-checked and skill-verified"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Only workers with 4.5+ ratings join our platform"
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "Workers arrive on time or you get compensation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={workersIcon} 
            alt="Professional construction workers" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            👷‍♂️ Verified Professionals
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              Expert Workers
            </span>
            <br />
            <span className="text-foreground">At Your Service</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Connect with verified builders, carpenters, painters, and specialists. 
            Quality work guaranteed with transparent pricing and on-time delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link to="/service-providers">
              <Button className="btn-hero text-lg px-10 py-6 glow">
                <Users className="w-5 h-5 mr-2" />
                Find Workers
              </Button>
            </Link>
            <Link to="/service-providers">
              <Button className="btn-secondary text-lg px-10 py-6">
                <Star className="w-5 h-5 mr-2" />
                View Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Worker Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Professional Categories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skilled Professionals
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully vetted network of construction professionals, each specialized in their trade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workerCategories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <Card key={index} className="glass-card p-8 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-warning fill-current" />
                            <span className="text-warning font-semibold">{category.rating}</span>
                            <span className="text-muted-foreground">• {category.available} available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/service-providers">
                      <Button className="w-full btn-hero">
                        Book {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                Why Choose Our Workers?
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <Card key={index} className="glass-card p-8 text-center hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Start Your Project?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with skilled professionals today and get your construction project moving.
          </p>
          <Link to="/service-providers">
            <Button className="btn-hero text-lg px-12 py-6 glow">
              Book Workers Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Workers;