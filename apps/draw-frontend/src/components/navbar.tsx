"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Paintbrush2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Paintbrush2 size={28} className="text-primary" />
              <span className="text-xl font-bold">Excalidraw</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-foreground/80 hover:text-foreground transition">Features</Link>
            <Link href="#examples" className="text-foreground/80 hover:text-foreground transition">Examples</Link>
            <Link href="#community" className="text-foreground/80 hover:text-foreground transition">Community</Link>
            <Link href="https://github.com" target="_blank" className="text-foreground/80 hover:text-foreground transition">
              <Github size={20} />
            </Link>
            <ThemeToggle />
            <Link href='/signin'><Button>Try Now</Button></Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              Features
            </Link>
            <Link href="#examples" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              Examples
            </Link>
            <Link href="#community" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              Community
            </Link>
            <Link href="https://github.com" target="_blank" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              GitHub
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Try Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}