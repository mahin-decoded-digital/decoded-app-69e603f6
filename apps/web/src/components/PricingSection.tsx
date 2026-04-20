import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { packages } from '@/lib/site-data';
import { SectionHeader } from '@/components/SectionHeader';

const scrollToContact = () => {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const PricingSection = () => {
  return (
    <section id="pricing" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Packages"
          title="Engagement options that help buyers self-qualify before they reach out"
          description="We keep pricing simple so buyers can quickly understand fit. Each package leads into a tailored conversation based on timing, scope, and internal team capacity."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.id} className="rounded-3xl border-border bg-card shadow-sm">
              <CardContent className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-foreground">{item.name}</h3>
                  {item.tier === 'growth' ? <Badge className="rounded-full px-3 py-1">Most common</Badge> : null}
                </div>
                <p className="mt-4 text-3xl font-bold text-foreground">{item.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.audience}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" onClick={scrollToContact}>
                  {item.ctaLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
