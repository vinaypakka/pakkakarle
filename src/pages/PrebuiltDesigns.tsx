import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ExternalLink, Palette, Square, Building, TreePine, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

// Product data with affiliate links
const products = [
  { id: 1, name: 'Samsung 5-Door Flex Refrigerator', brand: 'Samsung', category: 'Kitchen', price: '$2,799', link: 'https://amazon.com' },
  { id: 2, name: 'LG 65" OLED C3 Series TV', brand: 'LG', category: 'Living Room', price: '$1,799', link: 'https://amazon.com' },
  { id: 3, name: 'IKEA MALM Bed Frame', brand: 'IKEA', category: 'Bedroom', price: '$199', link: 'https://ikea.com' },
  { id: 4, name: 'Bosch Serie 6 Dishwasher', brand: 'Bosch', category: 'Kitchen', price: '$849', link: 'https://amazon.com' },
  { id: 5, name: 'Dyson V15 Detect Vacuum', brand: 'Dyson', category: 'Home Appliances', price: '$649', link: 'https://amazon.com' },
  { id: 6, name: 'Herman Miller Aeron Chair', brand: 'Herman Miller', category: 'Office', price: '$1,395', link: 'https://amazon.com' },
  { id: 7, name: 'Whirlpool Front Load Washer', brand: 'Whirlpool', category: 'Laundry', price: '$899', link: 'https://amazon.com' },
  { id: 8, name: 'KitchenAid Stand Mixer', brand: 'KitchenAid', category: 'Kitchen', price: '$429', link: 'https://amazon.com' },
  { id: 9, name: 'Philips Hue Smart Lighting Kit', brand: 'Philips', category: 'Lighting', price: '$199', link: 'https://amazon.com' },
  { id: 10, name: 'West Elm Mid-Century Sofa', brand: 'West Elm', category: 'Living Room', price: '$1,899', link: 'https://westelm.com' },
  { id: 11, name: 'Nest Learning Thermostat', brand: 'Nest', category: 'Smart Home', price: '$249', link: 'https://amazon.com' },
  { id: 12, name: 'Sony HT-A7000 Soundbar', brand: 'Sony', category: 'Entertainment', price: '$1,299', link: 'https://amazon.com' },
  { id: 13, name: 'Tempur-Pedic Mattress', brand: 'Tempur-Pedic', category: 'Bedroom', price: '$2,199', link: 'https://amazon.com' },
  { id: 14, name: 'Breville Barista Express', brand: 'Breville', category: 'Kitchen', price: '$699', link: 'https://amazon.com' },
  { id: 15, name: 'Crate & Barrel Dining Set', brand: 'Crate & Barrel', category: 'Dining', price: '$1,499', link: 'https://crateandbarrel.com' },
  { id: 16, name: 'GE Profile Smart Oven', brand: 'GE', category: 'Kitchen', price: '$3,299', link: 'https://amazon.com' },
  { id: 17, name: 'Ashley Furniture Sectional', brand: 'Ashley', category: 'Living Room', price: '$1,299', link: 'https://ashleyfurniture.com' },
  { id: 18, name: 'Pottery Barn Bed Frame', brand: 'Pottery Barn', category: 'Bedroom', price: '$1,699', link: 'https://potterybarn.com' },
  { id: 19, name: 'Shark Robot Vacuum', brand: 'Shark', category: 'Home Appliances', price: '$449', link: 'https://amazon.com' },
  { id: 20, name: 'Miele Complete C3 Vacuum', brand: 'Miele', category: 'Home Appliances', price: '$1,199', link: 'https://amazon.com' },
];

// Placeholder designs with associated products
const prebuiltDesigns = [
  {
    id: 1,
    title: '1 BHK Apartment',
    description: 'Compact and efficient 1-bedroom apartment with modern amenities',
    category: 'Apartment',
    thumbnail: '/assets/1bhk.jpg',
    sketchupLink: 'https://app.sketchup.com/share/tc/asia/TfAyqln2STQ?stoken=-Fd2lTCZjblub_hJJBcHff6WXZViRNscll4lTb6X2n9cGeQ0oJ7qMwpc0ztY9xVs&source=web',
    icon: Square,
    productIds: [1, 2, 3, 4, 9, 11, 14],
  },
  {
    id: 2,
    title: '2 BHK Apartment',
    description: 'Spacious 2-bedroom apartment with modern layout and amenities',
    category: 'Apartment',
    thumbnail: '/assets/2bhk.jpg',
    sketchupLink: 'https://app.sketchup.com/share/tc/asia/TfAyqln2STQ?stoken=MAB2ISrES3Pn1o8-iUX3jP6WXZViRNscll4lTb6X2n9cGeQ0oJ7qMwpc0ztY9xVs&source=web',
    icon: Square,
    productIds: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 15],
  },
  {
    id: 3,
    title: '3 BHK Apartment',
    description: 'Spacious 3-bedroom apartment with modern design and amenities',
    category: 'Apartment',
    thumbnail: '/assets/3bhk.jpg',
    sketchupLink: 'https://app.sketchup.com/share/tc/asia/Afk9JrZPPuM?stoken=A8tBJIZXSELych_8eyl1Y0vbdYg1KA30LGq4Td0PiO8Gm2afNbiQRDVAhtDaAGtB&source=web',
    icon: Square,
    productIds: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 18],
  },
  {
    id: 4,
    title: 'Cozy Cottage',
    description: '2-bedroom cottage perfect for small families',
    category: 'Cottage',
    thumbnail: '/placeholder.svg',
    sketchupLink: 'https://app.sketchup.com/placeholder2',
    icon: Home,
    productIds: [3, 8, 9, 13, 14, 18],
  },
  {
    id: 5,
    title: 'Urban Apartment',
    description: 'Modern 3-bedroom apartment design',
    category: 'Apartment',
    thumbnail: '/placeholder.svg',
    sketchupLink: 'https://app.sketchup.com/placeholder3',
    icon: Square,
    productIds: [1, 2, 6, 10, 11, 12, 15, 17],
  },
  {
    id: 6,
    title: 'Garden House',
    description: 'Beautiful house with integrated garden spaces and modern design',
    category: 'House',
    thumbnail: '/assets/garden-house.jpg',
    sketchupLink: 'https://app.sketchup.com/share/tc/asia/tQk67AtcYYE?stoken=pNruJwg-7BlpjeB96NQp8T0dsI4qrhZLdigr3GxJJ49k97mLM9LuChONxVku-BOZ&source=web',
    icon: TreePine,
    productIds: [1, 2, 3, 5, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19],
  },
];

const PrebuiltDesigns = () => {
  const { user } = useAuth();
  const [selectedDesign, setSelectedDesign] = useState<typeof prebuiltDesigns[0] | null>(null);
  const [showProductsDialog, setShowProductsDialog] = useState(false);
  const [showDisclaimerDialog, setShowDisclaimerDialog] = useState(false);

  const handleDesignClick = (design: typeof prebuiltDesigns[0]) => {
    toast.success(`Opening ${design.title} in SketchUp...`);
    window.open(design.sketchupLink, '_blank');
  };

  const handleViewProducts = (design: typeof prebuiltDesigns[0]) => {
    setSelectedDesign(design);
    setShowProductsDialog(true);
  };

  const handleProductClick = () => {
    setShowProductsDialog(false);
    setShowDisclaimerDialog(true);
  };

  const getDesignProducts = (design: typeof prebuiltDesigns[0]) => {
    return products.filter(p => design.productIds.includes(p.id));
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
                <CardContent className="space-y-2">
                  <Button className="w-full btn-hero group-hover:glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in SketchUp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProducts(design);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Shop Products ({design.productIds.length})
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

      {/* Products Dialog */}
      <Dialog open={showProductsDialog} onOpenChange={setShowProductsDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Shop Products for {selectedDesign?.title}</DialogTitle>
            <DialogDescription>
              Browse and purchase products used in this design
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {selectedDesign && getDesignProducts(selectedDesign).map((product) => (
              <Card key={product.id} className="hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{product.name}</CardTitle>
                      <CardDescription>{product.brand}</CardDescription>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button 
                      onClick={handleProductClick}
                      className="btn-hero"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Disclaimer Dialog */}
      <Dialog open={showDisclaimerDialog} onOpenChange={setShowDisclaimerDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Prototype Notice
            </DialogTitle>
            <DialogDescription className="space-y-3 pt-4">
              <p className="text-base font-medium text-foreground">
                This platform is a prototype showcase only.
              </p>
              <p>
                The products and purchase functionality displayed here are for demonstration purposes. 
                This is not a real e-commerce platform and no actual transactions can be completed.
              </p>
              <p className="text-sm text-muted-foreground">
                This showcase demonstrates the concept of integrating product recommendations 
                with home design visualization.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setShowDisclaimerDialog(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PrebuiltDesigns;