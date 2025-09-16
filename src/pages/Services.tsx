import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wrench, Zap, Droplets, Truck, Brush, Wifi, Phone, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import servicesIcon from '@/assets/services-icon.jpg';

const Services = () => {
  const serviceCategories = [
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Complete electrical solutions for your home",
      services: ["Wiring & Rewiring", "Panel upgrades", "Outlet installation", "Emergency repairs"],
      price: "₹500",
      duration: "2-4 hours",
      emergency: true
    },
    {
      icon: Droplets,
      title: "Plumbing Services", 
      description: "Expert plumbing for all your water needs",
      services: ["Pipe repairs", "Fixture installation", "Drain cleaning", "Water heater service"],
      price: "₹400",
      duration: "1-3 hours",
      emergency: true
    },
    {
      icon: Truck,
      title: "Water Tanker",
      description: "Fresh water delivery for your home",
      services: ["Water delivery", "Tank filling", "Emergency supply", "Scheduled delivery"],
      price: "₹800",
      duration: "30 mins",
      emergency: false
    },
    {
      icon: Brush,
      title: "Cleaning Services",
      description: "Professional home cleaning and maintenance",
      services: ["Deep cleaning", "Regular maintenance", "Post-construction cleanup", "Sanitization"],
      price: "₹300",
      duration: "2-6 hours",
      emergency: false
    },
    {
      icon: Wifi,
      title: "Internet & Cable",
      description: "Connectivity solutions for modern homes",
      services: ["Internet installation", "WiFi setup", "Cable TV", "Smart home integration"],
      price: "₹600",
      duration: "1-2 hours",
      emergency: false
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      description: "All-round maintenance and repair services",
      services: ["AC service", "Appliance repair", "Door/window fixing", "General repairs"],
      price: "₹350",
      duration: "1-4 hours",
      emergency: true
    }
  ];

  const quickServices = [
    { name: "Emergency Plumber", time: "30 mins", icon: Droplets },
    { name: "Electrician", time: "45 mins", icon: Zap },
    { name: "Water Tanker", time: "60 mins", icon: Truck },
    { name: "AC Repair", time: "2 hours", icon: Wrench }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesIcon} 
            alt="Home maintenance services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            🔧 On-Demand Services
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              Home Services
            </span>
            <br />
            <span className="text-foreground">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            From emergency repairs to regular maintenance, get reliable home services 
            delivered by verified professionals at your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button className="btn-hero text-lg px-10 py-6 glow">
              <Wrench className="w-5 h-5 mr-2" />
              Book Service
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Call
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-warning/20 text-warning border-warning/30">
              Quick Response
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
                Emergency Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Need immediate help? Our emergency services are available 24/7 with rapid response times.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <Card key={index} className="glass-card p-6 text-center hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.name}</h3>
                    <Badge className="bg-success/20 text-success border-success/30">
                      Arrives in {service.time}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                All Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home services covering every aspect of maintenance and repair.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
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
                          <div className="flex items-center space-x-4">
                            <Badge className="bg-primary/20 text-primary">
                              Starting from {category.price}
                            </Badge>
                            {category.emergency && (
                              <Badge className="bg-warning/20 text-warning">
                                24/7 Available
                              </Badge>
                            )}
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
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Duration: {category.duration}
                      </div>
                      <Button className="btn-hero">
                        Book Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
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
              Need a Service Right Now?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book any service instantly or schedule for later. Our professionals are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg px-12 py-6 glow">
              Book Instant Service <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="btn-secondary text-lg px-12 py-6">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule for Later  
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;