import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import pkLogo from '@/assets/pk-logo-outline.jpg';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/design', label: 'Design' },
    { href: '/workers', label: 'Workers' },
    { href: '/services', label: 'Services' },
    { href: '/ai-mode', label: 'AI Mode' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-border bg-background/95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={pkLogo} 
            alt="Pakka Karle Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-foreground font-serif">
            Pakka Karle
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`transition-smooth font-serif ${
                location.pathname === item.href
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <Link to="/design">
          <Button className="btn-hero">
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;