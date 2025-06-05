"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: "This tool has completely transformed how our design team collaborates. The real-time features are seamless, and the hand-drawn style gives our diagrams a unique, approachable feel.",
    author: "Sarah Johnson",
    role: "Product Designer at Design Co.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "As a software architect, I need to communicate complex systems clearly. This platform makes it easy to create professional diagrams that my entire team can understand and contribute to.",
    author: "Michael Chen",
    role: "Lead Architect at Tech Solutions",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "We use this for everything from sprint planning to system design. The ability to quickly sketch ideas and iterate as a team has significantly improved our productivity.",
    author: "Emma Rodriguez",
    role: "Scrum Master at Agile Innovations",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    content: "The export features are fantastic. I can create diagrams with my team and easily include them in our documentation, presentations, and marketing materials.",
    author: "David Wilson",
    role: "Marketing Director at Growth Co.",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    content: "This tool has become essential for our remote team. We can collaborate on diagrams in real-time, making our virtual brainstorming sessions much more productive.",
    author: "Lisa Patel",
    role: "Remote Team Lead at Global Connect",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const displayTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];
  
  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="h-12 w-12 text-primary/20 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Loved by Teams and Individuals
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about their experience.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {displayTestimonials.map((testimonial, index) => (
                <Card 
                  key={`${testimonial.id}-${index}`} 
                  className="bg-background border shadow-md"
                >
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}