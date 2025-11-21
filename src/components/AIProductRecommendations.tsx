import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, ShoppingCart, Loader2, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Preferences {
  style: string;
  rooms: string[];
  budget: string;
  specialRequirements: string;
}

interface Recommendation {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: string;
  reason: string;
}

export const AIProductRecommendations = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    style: 'modern',
    rooms: [],
    budget: 'medium',
    specialRequirements: '',
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const styleOptions = [
    { value: 'modern', label: 'Modern & Minimalist' },
    { value: 'traditional', label: 'Traditional & Classic' },
    { value: 'contemporary', label: 'Contemporary' },
    { value: 'rustic', label: 'Rustic & Farmhouse' },
    { value: 'luxury', label: 'Luxury & Premium' },
  ];

  const roomOptions = [
    { value: 'living', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'dining', label: 'Dining Room' },
    { value: 'office', label: 'Home Office' },
    { value: 'bathroom', label: 'Bathroom' },
  ];

  const budgetOptions = [
    { value: 'low', label: 'Budget-Friendly (Under ₹50,000)' },
    { value: 'medium', label: 'Moderate (₹50,000 - ₹2,00,000)' },
    { value: 'high', label: 'Premium (Above ₹2,00,000)' },
  ];

  const handleRoomToggle = (room: string) => {
    setPreferences(prev => ({
      ...prev,
      rooms: prev.rooms.includes(room)
        ? prev.rooms.filter(r => r !== room)
        : [...prev.rooms, room],
    }));
  };

  const handleGetRecommendations = async () => {
    if (preferences.rooms.length === 0) {
      toast.error('Please select at least one room');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-product-recommendations', {
        body: { preferences },
      });

      if (error) {
        console.error('Function error:', error);
        if (error.message.includes('429')) {
          toast.error('Rate limit exceeded. Please try again in a moment.');
        } else if (error.message.includes('402')) {
          toast.error('AI service unavailable. Please contact support.');
        } else {
          toast.error('Failed to get recommendations. Please try again.');
        }
        return;
      }

      if (data?.recommendations) {
        setRecommendations(data.recommendations);
        toast.success('AI recommendations ready!');
      } else {
        toast.error('No recommendations received');
      }
    } catch (error) {
      console.error('Error getting recommendations:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Preferences Form */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <CardTitle>Your Design Preferences</CardTitle>
          </div>
          <CardDescription>
            Tell us about your style and needs, and our AI will recommend the perfect products
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Style Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Design Style</Label>
            <RadioGroup
              value={preferences.style}
              onValueChange={(value) => setPreferences(prev => ({ ...prev, style: value }))}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {styleOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Room Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Rooms to Furnish</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {roomOptions.map((room) => (
                <div key={room.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={room.value}
                    checked={preferences.rooms.includes(room.value)}
                    onCheckedChange={() => handleRoomToggle(room.value)}
                  />
                  <Label htmlFor={room.value} className="cursor-pointer">
                    {room.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Budget Range</Label>
            <RadioGroup
              value={preferences.budget}
              onValueChange={(value) => setPreferences(prev => ({ ...prev, budget: value }))}
              className="space-y-2"
            >
              {budgetOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                  <Label htmlFor={`budget-${option.value}`} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Special Requirements */}
          <div className="space-y-3">
            <Label htmlFor="requirements" className="text-base font-semibold">
              Special Requirements (Optional)
            </Label>
            <Textarea
              id="requirements"
              placeholder="E.g., eco-friendly materials, smart home features, pet-friendly, wheelchair accessible..."
              value={preferences.specialRequirements}
              onChange={(e) => setPreferences(prev => ({ ...prev, specialRequirements: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>

          <Button
            onClick={handleGetRecommendations}
            disabled={isLoading}
            className="w-full btn-hero text-lg py-6"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                AI is analyzing your preferences...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Get AI Recommendations
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Check className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Your Personalized Recommendations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((product) => (
              <Card key={product.id} className="glass-card hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.brand}</CardDescription>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1 font-semibold">Why this product?</p>
                    <p className="text-sm">{product.reason}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="btn-hero">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
