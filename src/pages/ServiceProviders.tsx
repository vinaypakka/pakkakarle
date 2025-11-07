import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, User, DollarSign, Phone, MapPin } from "lucide-react";

const ServiceProviders = () => {
  const serviceProviders = [
    {
      id: 1,
      type: "Electrician",
      name: "Suresh Jaiswal",
      age: 28,
      gender: "Male",
      experience: "4 years",
      pricePerHour: "200/-",
      rating: 4.5,
      completedJobs: 150,
      location: "Sector 15",
    },
    {
      id: 2,
      type: "Plumber",
      name: "Virat Kohli",
      age: 32,
      gender: "Male", 
      experience: "8 years",
      pricePerHour: "350/-",
      rating: 4.8,
      completedJobs: 280,
      location: "Sector 22",
    },
    {
      id: 3,
      type: "Water Supplier",
      name: "Mahendra Singh Dhoni",
      age: 40,
      gender: "Male",
      experience: "12 years", 
      pricePerHour: "650/-",
      rating: 4.9,
      completedJobs: 400,
      location: "Sector 18",
    },
    {
      id: 4,
      type: "Painter",
      name: "Cristiano Ronaldo",
      age: 34,
      gender: "Male",
      experience: "8 years",
      pricePerHour: "250/-",
      rating: 4.6,
      completedJobs: 220,
      location: "Sector 12",
    },
    {
      id: 5,
      type: "Carpenter",
      name: "Jairaj Singh", 
      age: 31,
      gender: "Male",
      experience: "5 years",
      pricePerHour: "150/-",
      rating: 4.3,
      completedJobs: 180,
      location: "Sector 8",
    },
    {
      id: 6,
      type: "Maid",
      name: "Maya Kumari",
      age: 32,
      gender: "Female",
      experience: "7 years",
      pricePerHour: "120/-", 
      rating: 4.7,
      completedJobs: 300,
      location: "Sector 25",
    },
  ];

  const getServiceTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Electrician": "bg-yellow-500/10 text-yellow-700 border-yellow-200",
      "Plumber": "bg-blue-500/10 text-blue-700 border-blue-200", 
      "Water Supplier": "bg-cyan-500/10 text-cyan-700 border-cyan-200",
      "Painter": "bg-purple-500/10 text-purple-700 border-purple-200",
      "Carpenter": "bg-orange-500/10 text-orange-700 border-orange-200",
      "Maid": "bg-pink-500/10 text-pink-700 border-pink-200",
    };
    return colors[type] || "bg-gray-500/10 text-gray-700 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Service Providers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our verified and experienced service providers for all your home needs
          </p>
        </div>

        {/* Service Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceProviders.map((provider) => (
            <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300 border-muted/20 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getServiceTypeColor(provider.type)} font-medium`}>
                    {provider.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{provider.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {provider.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {provider.age} years old • {provider.gender}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{provider.experience} experience</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span>{provider.completedJobs} completed jobs</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{provider.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <DollarSign className="w-5 h-5" />
                  <span>₹{provider.pricePerHour.replace('/-', '')} per hour</span>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 flex gap-2">
                <Button className="flex-1" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" className="flex-1" size="sm">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Can't find what you're looking for? Contact us for specialized services and custom requirements.
          </p>
          <a href="tel:+1234567890">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Custom Service
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;