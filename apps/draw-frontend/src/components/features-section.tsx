"use client";

import { useState } from 'react';
import { 
  Paintbrush, 
  Users, 
  Share2, 
  Download, 
  Shuffle, 
  Lock, 
  Cloud, 
  Layers 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: "drawing",
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: "Hand-drawn Feel",
    description: "Create sketches that look like they were drawn by hand, perfect for brainstorming and visualization.",
    image: "https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "collaboration",
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, seeing changes instantly as they happen.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "sharing",
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: "Easy Sharing",
    description: "Share your creations with a simple link or embed them directly into your documents.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "export",
    icon: <Download className="h-10 w-10 text-primary" />,
    title: "Multiple Export Formats",
    description: "Export your diagrams as PNG, SVG, or PDF for use in presentations and documents.",
    image: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "libraries",
    icon: <Shuffle className="h-10 w-10 text-primary" />,
    title: "Component Libraries",
    description: "Access a wide range of pre-made components to speed up your diagramming process.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "privacy",
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Privacy-Focused",
    description: "Your data stays on your device, with optional end-to-end encryption for shared content.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cloud",
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Saving",
    description: "Save your work to the cloud and access it from anywhere, on any device.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "layers",
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Layer Support",
    description: "Organize your diagrams with layers to create complex and organized visuals.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section id="features\" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to Create Amazing Diagrams
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make diagramming simple, collaborative, and effective.
          </p>
        </div>

        <Tabs defaultValue={features[0].id} value={activeFeature} onValueChange={setActiveFeature} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {features.slice(0, 4).map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className={cn(
                  "py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                )}
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {features.slice(4).map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className={cn(
                  "py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                )}
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 relative bg-background rounded-lg border shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map((feature) => (
                feature.id === activeFeature && (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2"
                  >
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6">{feature.description}</p>
                      <Button variant="outline">Learn More</Button>
                    </div>
                    <div className="bg-muted h-[300px] md:h-auto relative overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Paintbrush className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Intuitive Interface</CardTitle>
              <CardDescription>
                Simple, clean interface that gets out of your way so you can focus on creating.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Minimal learning curve
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Customizable toolbars
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Keyboard shortcuts
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Work together seamlessly with your team members in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Real-time cursor tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Comments and feedback
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Presence indicators
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Shuffle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Extensive Libraries</CardTitle>
              <CardDescription>
                Access thousands of pre-made components to speed up your work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  UX/UI components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Flowchart symbols
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Custom libraries
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}