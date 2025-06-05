import Link from 'next/link';
import { Paintbrush2, Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Paintbrush2 size={24} className="text-primary" />
              <span className="text-xl font-bold">Excalidraw</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A virtual whiteboard for sketching hand-drawn like diagrams with your team in real-time.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  API
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Excalidraw. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}