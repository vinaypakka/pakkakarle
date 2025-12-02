import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Maximize, Phone, Mail, Share2, Heart, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Property {
  id: string;
  title: string;
  description: string;
  property_type: string;
  listing_type: string;
  bhk: string;
  price: number;
  area_sqft: number;
  location: string;
  city: string;
  state: string;
  pincode: string;
  images: string[];
  amenities: string[];
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  created_at: string;
}

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      fetchProperty();
      incrementViews();
    }
  }, [id]);

  const fetchProperty = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setProperty(data);
    } catch (error) {
      console.error('Error fetching property:', error);
      toast({
        title: 'Error',
        description: 'Failed to load property details',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const incrementViews = async () => {
    try {
      const { data: current } = await supabase
        .from('properties')
        .select('views_count')
        .eq('id', id)
        .single();

      if (current) {
        await supabase
          .from('properties')
          .update({ views_count: (current.views_count || 0) + 1 })
          .eq('id', id);
      }
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  const formatPrice = (price: number, listingType: string) => {
    if (listingType === 'rent') {
      return `₹${price.toLocaleString('en-IN')}/month`;
    }
    return `₹${(price / 100000).toFixed(2)}L`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property?.title,
        text: `Check out this property: ${property?.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied!',
        description: 'Property link copied to clipboard',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Link to="/properties">
            <Button className="btn-hero">Browse Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate('/properties')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="glass-card overflow-hidden">
              <div className="relative h-96">
                <img
                  src={property.images?.[selectedImage] || '/placeholder.svg'}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {property.listing_type === 'rent' ? 'For Rent' : 'For Sale'}
                </Badge>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/80 backdrop-blur"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/80 backdrop-blur"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {property.images && property.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                        selectedImage === index ? 'border-2 border-primary' : ''
                      }`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              )}
            </Card>

            {/* Property Info */}
            <Card className="glass-card">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{property.location}, {property.city}, {property.state} {property.pincode}</span>
                  </div>
                  <p className="text-4xl font-bold text-primary">
                    {formatPrice(property.price, property.listing_type)}
                  </p>
                </div>

                <div className="flex gap-6 py-4 border-y border-border">
                  {property.bhk && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                        <p className="font-semibold">{property.bhk}</p>
                      </div>
                    </div>
                  )}
                  {property.area_sqft && (
                    <div className="flex items-center gap-2">
                      <Maximize className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Area</p>
                        <p className="font-semibold">{property.area_sqft} sqft</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-semibold capitalize">{property.property_type}</p>
                  </div>
                </div>

                {property.description && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Description</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {property.description}
                    </p>
                  </div>
                )}

                {property.amenities && property.amenities.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Amenities</h2>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="glass-card sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Contact Owner</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Name</p>
                    <p className="font-semibold">{property.contact_name}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href={`tel:${property.contact_phone}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      {property.contact_phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href={`mailto:${property.contact_email}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      {property.contact_email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full btn-hero" asChild>
                    <a href={`tel:${property.contact_phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:${property.contact_email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-4">
                  Property ID: {property.id.slice(0, 8)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;