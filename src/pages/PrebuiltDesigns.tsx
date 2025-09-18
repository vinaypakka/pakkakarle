import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ExternalLink, Palette, Square, Building, TreePine } from 'lucide-react';
import { toast } from 'sonner';

// Placeholder designs - user will replace these with actual data
const prebuiltDesigns = [
  {
    id: 1,
    title: '1 BHK Apartment',
    description: 'Compact and efficient 1-bedroom apartment with modern amenities',
    category: 'Apartment',
    thumbnail: '/assets/1bhk.jpg',
    sketchupLink: 'https://app.sketchup.com/share/tc/asia/TfAyqln2STQ?stoken=-Fd2lTCZjblub_hJJBcHff6WXZViRNscll4lTb6X2n9cGeQ0oJ7qMwpc0ztY9xVs&source=web',
    icon: Square,
  },
  {
    id: 2,
    title: 'Modern Villa',
    description: 'Spacious 4-bedroom villa with contemporary design',
    category: 'Villa',
    thumbnail: '/placeholder.svg', // User will replace with actual images
    sketchupLink: 'https://app.sketchup.com/placeholder1', // User will provide actual links
    icon: Building,
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    description: '2-bedroom cottage perfect for small families',
    category: 'Cottage',
    thumbnail: '/placeholder.svg',
    sketchupLink: 'https://app.sketchup.com/placeholder2',
    icon: Home,
  },
  {
    id: 4,
    title: 'Urban Apartment',
    description: 'Modern 3-bedroom apartment design',
    category: 'Apartment',
    thumbnail: '/placeholder.svg',
    sketchupLink: 'https://app.sketchup.com/placeholder3',
    icon: Square,
  },
  {
    id: 5,
    title: 'Garden House',
    description: 'Beautiful house with integrated garden spaces',
    category: 'House',
    thumbnail: '/placeholder.svg',
    sketchupLink: 'https://app.sketchup.com/placeholder4',
    icon: TreePine,
  },
];

const PrebuiltDesigns = () => {
  const { user } = useAuth();

  const handleDesignClick = (design: typeof prebuiltDesigns[0]) => {
    toast.success(`Opening ${design.title} in SketchUp...`);
    // Open SketchUp link in new tab
    window.open(design.sketchupLink, '_blank');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to continue</h1>
          <Link to="/auth">
            <Button className="btn-hero">Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pakka Karle
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Palette className="w-4 h-4 mr-2" />
            Pre-Built Designs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              Choose Your Design
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our collection of professionally designed home templates and customize them in SketchUp
          </p>
        </div>

        {/* Design Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="px-4 py-2">All Designs</Badge>
          <Badge variant="outline" className="px-4 py-2">Villas</Badge>
          <Badge variant="outline" className="px-4 py-2">Cottages</Badge>
          <Badge variant="outline" className="px-4 py-2">Apartments</Badge>
          <Badge variant="outline" className="px-4 py-2">Houses</Badge>
        </div>

        {/* Designs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {prebuiltDesigns.map((design) => {
            const IconComponent = design.icon;
            return (
              <Card 
                key={design.id} 
                className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={() => handleDesignClick(design)}
              >
                <CardHeader className="text-center">
                  {/* Thumbnail */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 relative overflow-hidden">
                    {design.thumbnail !== '/placeholder.svg' ? (
                      <img 
                        src={design.thumbnail} 
                        alt={design.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <IconComponent className="w-16 h-16 text-primary/60" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <Badge className="bg-primary text-primary-foreground">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Open in SketchUp
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-2 self-start">
                    {design.category}
                  </Badge>
                  <CardTitle className="text-lg text-left">{design.title}</CardTitle>
                  <CardDescription className="text-left">
                    {design.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full btn-hero group-hover:glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in SketchUp
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Need a Custom Design?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the perfect design? Our expert designers can create a custom solution tailored to your specific needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workers">
              <Button className="btn-hero">
                Contact a Designer
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrebuiltDesigns;