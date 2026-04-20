import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { clientLogos, testimonials } from '@/lib/site-data';
import { SectionHeader } from '@/components/SectionHeader';

export const TrustSection = () => {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proof"
          title="Trusted by operators managing complex systems and real delivery pressure"
          description="Buyers evaluating a technology partner need evidence. We lead with recognizable client contexts, clear testimonials, and repeatable execution patterns."
          align="center"
        />

        <div className="mt-10 grid gap-4 rounded-3xl border border-border bg-background p-6 sm:grid-cols-2 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="rounded-2xl border border-border bg-card px-4 py-5 text-center shadow-sm">
              <p className="text-base font-semibold text-foreground">{logo.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{logo.tagline}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="rounded-2xl border-border bg-card shadow-sm">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-4 text-base leading-7 text-foreground">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
