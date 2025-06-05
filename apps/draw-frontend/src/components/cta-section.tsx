"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            Ready to Transform Your Ideas into Visual Diagrams?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of teams and individuals who use our platform to create beautiful diagrams, collaborate in real-time, and share their work effortlessly.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button size="lg" className="w-full sm:w-auto">
              Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-sm text-muted-foreground"
            variants={itemVariants}
          >
            No credit card required. Start with our free plan today.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}