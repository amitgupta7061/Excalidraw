"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Lock, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-stops))] from-indigo-50/50 via-background to-background dark:from-indigo-950/20 dark:via-background dark:to-background"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 flex flex-col items-center">
        {isLoaded && (
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={itemVariants}
            >
              <span className="text-primary">Collaborate</span> and <span className="text-primary">Create</span> Beautiful Diagrams
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A virtual whiteboard for sketching hand-drawn like diagrams with your team in real-time.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="w-full sm:w-auto">
                Start Drawing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Examples
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 justify-center">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Real-time collaboration</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Download className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Export as PNG, SVG, PDF</span>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Canvas Preview */}
        <div className="mt-16 w-full max-w-5xl mx-auto">
          <div className="relative rounded-lg border shadow-xl overflow-hidden bg-background">
            {/* Toolbar */}
            <div className="h-12 px-4 border-b flex items-center justify-between bg-muted/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex space-x-4">
                <div className="w-24 h-6 bg-muted rounded"></div>
                <div className="w-24 h-6 bg-muted rounded"></div>
              </div>
            </div>
            
            {/* Canvas Content */}
            <div className="h-[350px] md:h-[450px] p-6 relative">
              {/* Example drawing elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-lg border-2 border-chart-1 bg-chart-1/10 flex items-center justify-center transform rotate-3">
                <span className="text-sm font-medium">Feature</span>
              </div>
              <div className="absolute bottom-1/3 right-1/4 w-40 h-24 rounded-lg border-2 border-chart-2 bg-chart-2/10 flex items-center justify-center transform -rotate-2">
                <span className="text-sm font-medium">Component</span>
              </div>
              <div className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full border-2 border-chart-3 bg-chart-3/10 flex items-center justify-center">
                <span className="text-sm font-medium">Design</span>
              </div>
              
              {/* Connector lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="25%" x2="50%" y2="50%" className="stroke-chart-1 stroke-2" strokeDasharray="5,5" />
                <line x1="75%" y1="66%" x2="50%" y2="50%" className="stroke-chart-2 stroke-2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}