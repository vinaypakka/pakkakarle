import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pakka Karle
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`transition-smooth ${
                location.pathname === item.href
                  ? 'text-primary font-medium'
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