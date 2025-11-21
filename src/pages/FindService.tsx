import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

const FindService = () => {
  return (
    <div className="min-h-screen bg-gradient-hero p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Services Near You</h1>
          <p className="text-muted-foreground text-lg">
            Browse and book trusted home services in your area
          </p>
        </div>

        <Card className="glass-card text-center py-12">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Service Search Coming Soon</CardTitle>
            <CardDescription className="text-base">
              We're building an amazing experience for you to find and book services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay tuned for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FindService;
