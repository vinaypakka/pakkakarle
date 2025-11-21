import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const serviceCategories = [
  'Electrician',
  'Plumber',
  'Carpenter',
  'Painter',
  'AC Repair',
  'Home Cleaning',
  'Pest Control',
  'Interior Designer',
  'Mason',
  'Welder',
];

const PartnerOnboarding = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      return;
    }

    setGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        toast.success('Location captured successfully!');
        setGettingLocation(false);
      },
      (error) => {
        toast.error('Unable to get your location. Please enable location services.');
        console.error(error);
        setGettingLocation(false);
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please sign in first');
      navigate('/auth?role=partner');
      return;
    }

    if (!location) {
      toast.error('Please save your work location first');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          phone: phone,
          service_category: serviceCategory,
          location_lat: location.lat,
          location_lng: location.lng,
        })
        .eq('id', user.id);

      if (error) throw error;

      setSuccess(true);
      toast.success('Profile completed successfully!');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
        <Card className="glass-card max-w-md w-full text-center">
          <CardContent className="pt-12 pb-8">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-success" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Pakka Karle!</h2>
            <p className="text-muted-foreground text-lg">
              You are now visible to customers nearby. Get ready to receive service requests!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="w-full max-w-2xl">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Partner Onboarding</CardTitle>
            <CardDescription className="text-center text-base">
              Complete your profile to start receiving service requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="serviceCategory">Service Type *</Label>
                <Select value={serviceCategory} onValueChange={setServiceCategory} required>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select your service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <Label>Work Location *</Label>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    onClick={handleGetLocation}
                    disabled={gettingLocation}
                    variant="outline"
                    className="flex-1 border-primary/30 hover:border-primary/50"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {gettingLocation ? 'Getting Location...' : location ? 'Location Saved ✓' : 'Save My Work Location'}
                  </Button>
                </div>
                {location && (
                  <p className="text-sm text-muted-foreground bg-success/5 p-3 rounded-lg border border-success/20">
                    ✓ Location captured: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  We use your location to connect you with nearby customers
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading || !location}
                className="w-full btn-hero bg-gradient-to-r from-warning to-warning/80"
                size="lg"
              >
                {loading ? 'Completing Profile...' : 'Complete Profile'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerOnboarding;
