import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { MapPin, CheckCircle, Wrench, User, Phone } from 'lucide-react';
import pkLogo from '@/assets/pk-logo-filled.jpg';

const ContractorOnboarding = () => {
  const [serviceType, setServiceType] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationSaved, setLocationSaved] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Dummy contractor data for preview
  const dummyContractors = [
    { name: 'Rajesh Sharma', type: 'General Contractor', rating: 4.8 },
    { name: 'Amit Patel', type: 'Electrical Contractor', rating: 4.9 },
    { name: 'Suresh Kumar', type: 'Plumbing Contractor', rating: 4.7 },
  ];

  const serviceTypes = [
    'General Contractor',
    'Electrical Contractor',
    'Plumbing Contractor',
    'HVAC Contractor',
    'Roofing Contractor',
    'Flooring Contractor',
    'Painting Contractor',
    'Masonry Contractor',
  ];

  const handleSaveLocation = async () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        if (user) {
          const { error } = await supabase
            .from('profiles')
            .update({
              location_lat: latitude,
              location_lng: longitude,
              service_category: serviceType,
            })
            .eq('id', user.id);

          if (error) {
            toast.error('Failed to save location');
          } else {
            setLocationSaved(true);
            toast.success('Welcome to Pakka Karle! You are now visible to customers nearby.');
          }
        }
        setIsLocating(false);
      },
      (error) => {
        toast.error('Unable to retrieve your location');
        setIsLocating(false);
      }
    );
  };

  const handleComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
            <img 
              src={pkLogo} 
              alt="Pakka Karle Logo" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-warning to-warning/70 bg-clip-text text-transparent">
            Contractor Setup
          </h1>
          <p className="text-muted-foreground mt-2">
            Complete your profile to start receiving project requests
          </p>
        </div>

        <Card className="glass-card border-warning/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-warning" />
              Contractor Profile
            </CardTitle>
            <CardDescription>
              Set up your contractor profile to get discovered by customers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Service Type Selection */}
            <div className="space-y-2">
              <Label htmlFor="serviceType" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Your Specialty
              </Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select your contractor type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location Section */}
            <div className="space-y-4">
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Work Location
              </Label>
              
              {locationSaved ? (
                <div className="flex items-center gap-2 p-4 bg-success/10 border border-success/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-success font-medium">Location saved successfully!</span>
                </div>
              ) : (
                <Button 
                  onClick={handleSaveLocation}
                  disabled={!serviceType || isLocating}
                  className="w-full bg-gradient-to-r from-warning to-warning/80"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {isLocating ? 'Detecting location...' : 'Save My Work Location'}
                </Button>
              )}
            </div>

            {/* Dummy Preview Section */}
            <div className="mt-8 pt-6 border-t border-border/40">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Other contractors in your area:
              </h3>
              <div className="space-y-3">
                {dummyContractors.map((contractor, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-warning" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{contractor.name}</p>
                        <p className="text-xs text-muted-foreground">{contractor.type}</p>
                      </div>
                    </div>
                    <div className="text-sm text-warning">★ {contractor.rating}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Button */}
            <Button 
              onClick={handleComplete}
              disabled={!locationSaved}
              className="w-full btn-hero mt-6"
            >
              Complete Setup
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContractorOnboarding;
