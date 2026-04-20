import { BlogSection } from '@/components/BlogSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { FooterSection } from '@/components/FooterSection';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { PricingSection } from '@/components/PricingSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TeamSection } from '@/components/TeamSection';
import { TrustSection } from '@/components/TrustSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <CaseStudiesSection />
        <PricingSection />
        <BlogSection />
        <TeamSection />
        <FooterSection />
      </main>
    </div>
  );
}
