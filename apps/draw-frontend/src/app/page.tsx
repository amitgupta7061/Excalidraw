import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ExamplesSection } from '@/components/examples-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}