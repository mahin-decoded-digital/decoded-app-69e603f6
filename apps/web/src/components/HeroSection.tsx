import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroImage } from '@/lib/site-data';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em]">
            IT strategy, delivery, and managed services
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Anchor your next technology initiative with a team built for measurable outcomes.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              AnchorTech Studio helps CTOs, operations leaders, and growing businesses modernize systems, strengthen security, and ship digital products without losing operational control.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('work')}>
              Explore our work
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              'Senior operators across engineering, cloud, and security',
              'Structured delivery with weekly visibility for stakeholders',
              'Designed for buyers who need strategy and execution in one partner',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm">
                <CheckCircle className="mb-3 h-5 w-5 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <img
              src={heroImage}
              alt="AnchorTech consultants collaborating in a modern office"
              crossOrigin="anonymous"
              className="h-72 w-full object-cover"
            />
            <div className="grid gap-4 border-t border-border p-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-foreground">45+</p>
                <p className="text-sm text-muted-foreground">Transformation engagements delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">92%</p>
                <p className="text-sm text-muted-foreground">Projects expanded after the first phase</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1 day</p>
                <p className="text-sm text-muted-foreground">Average response time to qualified leads</p>
              </div>
            </div>
          </div>

          <LeadCaptureForm
            source="hero-form"
            title="Talk to a delivery strategist"
            description="Share your timeline, systems, or goals. We will reply with the right next step — discovery call, diagnostic, or scoped proposal."
          />
        </div>
      </div>
    </section>
  );
};
