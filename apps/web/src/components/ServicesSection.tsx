import { Cloud, Cog, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/SectionHeader';
import { services } from '@/lib/site-data';

const icons = {
  'product-engineering': Zap,
  'cloud-platform': Cloud,
  'security-resilience': ShieldCheck,
  'managed-it': Cog,
} as const;

export const ServicesSection = () => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Practical IT services for teams that need clarity, speed, and accountability"
        description="We structure every engagement around business outcomes: reduced operational risk, faster delivery cycles, and better visibility for leadership."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {services.map((service) => {
          const Icon = icons[service.id];

          return (
            <Card key={service.id} className="rounded-2xl border-border shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl bg-secondary p-4 text-sm font-medium text-foreground">{service.metric}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
