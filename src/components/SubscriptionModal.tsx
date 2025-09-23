import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, Crown, Zap, Users, Clock, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const subscriptionPlans = [
  {
    name: 'Starter',
    price: '₹499',
    period: '/month',
    icon: Zap,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    features: [
      'Access to all drag & drop tools',
      '2 hours free service provider work',
      'Basic design templates',
      'Email support',
      'Mobile responsive designs'
    ]
  },
  {
    name: 'Professional',
    price: '₹899',
    period: '/month',
    icon: Crown,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    popular: true,
    features: [
      'Everything in Starter',
      '5 hours free service provider work',
      'Premium design templates',
      'Advanced AI design generation',
      'Priority support',
      'Custom branding options',
      'Analytics dashboard'
    ]
  },
  {
    name: 'Enterprise',
    price: '₹1199',
    period: '/month',
    icon: Users,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    features: [
      'Everything in Professional',
      '10 hours free service provider work',
      'Unlimited AI design generations',
      'White-label solution',
      '24/7 priority support',
      'Team collaboration tools',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
];

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [showPrototypeAlert, setShowPrototypeAlert] = useState(false);

  const handleSubscribe = () => {
    setShowPrototypeAlert(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Unlock Full AI Design Power
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            You've used your free design generations. Choose a plan to continue creating amazing designs.
          </p>
        </DialogHeader>

        {showPrototypeAlert ? (
          <div className="p-6">
            <Alert className="mb-6">
              <AlertDescription className="text-center text-lg">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prototype Version</h3>
                  <p className="text-muted-foreground">
                    This website is currently for prototype purposes only. 
                    When we launch the original platform, we will notify you immediately.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Thank you for your interest! We're working hard to bring you the best design experience.
                  </p>
                </div>
              </AlertDescription>
            </Alert>
            <div className="flex gap-4 justify-center">
              <Button onClick={onClose} variant="outline">
                Got it
              </Button>
              <Button onClick={() => setShowPrototypeAlert(false)} variant="ghost">
                Back to Plans
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {subscriptionPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-6 hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 ${plan.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-6 h-6 ${plan.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleSubscribe}
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Choose {plan.name}
                </Button>
              </Card>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};