"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const examples = [
  {
    id: 1,
    title: "Product Roadmap",
    description: "Visualize your product development timeline with milestones and dependencies.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Business"
  },
  {
    id: 2,
    title: "System Architecture",
    description: "Map out your technical infrastructure with clear component relationships.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technical"
  },
  {
    id: 3,
    title: "User Flow Diagram",
    description: "Design intuitive user experiences by mapping the entire journey.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "UX/UI"
  },
  {
    id: 4,
    title: "Mind Map",
    description: "Organize your thoughts and brainstorm ideas in a visual hierarchy.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Creative"
  },
  {
    id: 5,
    title: "Project Timeline",
    description: "Track project progress with visual milestones and deadlines.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Business"
  },
  {
    id: 6,
    title: "Database Schema",
    description: "Design your database structure with relationships and attributes.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technical"
  }
];

const categories = ["All", "Business", "Technical", "UX/UI", "Creative"];

export function ExamplesSection() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredExamples = currentCategory === "All" 
    ? examples 
    : examples.filter(ex => ex.category === currentCategory);
  
  const displayExamples = filteredExamples.slice(currentIndex, currentIndex + 3);
  
  const next = () => {
    if (currentIndex + 3 < filteredExamples.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const prev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    } else {
      setCurrentIndex(Math.max(0, filteredExamples.length - 3));
    }
  };

  return (
    <section id="examples" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Inspiring Examples
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            See what others have created with our platform and get inspired for your next project.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={currentCategory === category ? "default" : "outline"}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentIndex(0);
              }}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory + currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {displayExamples.map((example) => (
                <Card key={example.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="default" size="sm">
                          View Example <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                      <p className="text-muted-foreground">{example.description}</p>
                      <div className="mt-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                          {example.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredExamples.length > 3 && (
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                disabled={currentIndex + 3 >= filteredExamples.length}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg">
            Explore All Examples <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}