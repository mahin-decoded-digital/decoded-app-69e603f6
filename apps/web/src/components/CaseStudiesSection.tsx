import { useMemo, useState } from 'react';
import { ArrowRight, BarChart, ShieldCheck, Cloud } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/SectionHeader';
import { caseStudies } from '@/lib/site-data';
import type { CaseStudy, CaseStudyCategory } from '@/types/site';

const filterOptions: Array<{ label: string; value: 'all' | CaseStudyCategory }> = [
  { label: 'All work', value: 'all' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'Platform', value: 'platform' },
  { label: 'Security', value: 'security' },
];

const categoryIcons = {
  cloud: Cloud,
  platform: BarChart,
  security: ShieldCheck,
} as const;

export const CaseStudiesSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | CaseStudyCategory>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(caseStudies[0] ?? null);
  const [open, setOpen] = useState(false);

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'all') {
      return caseStudies;
    }

    return caseStudies.filter((study) => study.category === activeFilter);
  }, [activeFilter]);

  const openStudy = (study: CaseStudy) => {
    setSelectedStudy(study);
    setOpen(true);
  };

  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Case studies"
          title="Real engagements that show how AnchorTech approaches complexity"
          description="Technical buyers should be able to assess our thinking without leaving the page. Filter by category, review the outcomes, and open each story for the full delivery narrative."
        />
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? 'default' : 'outline'}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {filteredStudies.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-lg font-semibold text-foreground">No case studies match this filter yet.</p>
          <p className="mt-2 text-sm text-muted-foreground">Choose another category to review recent delivery examples.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredStudies.map((study) => {
            const Icon = categoryIcons[study.category];

            return (
              <Card key={study.id} className="overflow-hidden rounded-3xl border-border bg-card shadow-sm">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  crossOrigin="anonymous"
                  className="h-52 w-full object-cover"
                />
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="secondary" className="rounded-full px-3 py-1 capitalize">
                      {study.category}
                    </Badge>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{study.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {study.client} · {study.sector}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.summary}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-secondary p-3 text-center">
                        <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => openStudy(study)}>
                    View case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
          {selectedStudy ? (
            <div className="space-y-6">
              <img
                src={selectedStudy.image}
                alt={selectedStudy.imageAlt}
                crossOrigin="anonymous"
                className="h-64 w-full rounded-2xl object-cover"
              />
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedStudy.title}</DialogTitle>
                <DialogDescription>
                  {selectedStudy.client} · {selectedStudy.sector}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Project summary</h4>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{selectedStudy.summary}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Challenge</h4>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{selectedStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Solution</h4>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                      {selectedStudy.solution.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6 rounded-2xl border border-border bg-secondary/50 p-5">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Results</h4>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                      {selectedStudy.results.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-3">
                    {selectedStudy.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-border bg-background p-4">
                        <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};
