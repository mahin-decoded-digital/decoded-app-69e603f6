import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { navItems } from '@/lib/site-data';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const FooterSection = () => {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Contact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Start with a focused conversation, not a bloated sales cycle.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Whether you need a fast diagnostic, delivery support, security planning, or managed operations, AnchorTech will help you identify the next best move.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/50 p-5">
              <p className="text-sm font-semibold text-foreground">Response standard</p>
              <p className="mt-2 text-sm text-muted-foreground">Qualified inquiries receive a response within one business day.</p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/50 p-5">
              <p className="text-sm font-semibold text-foreground">Typical first step</p>
              <p className="mt-2 text-sm text-muted-foreground">A 30-minute discovery call or diagnostic scoping session.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Button key={item.id} variant="outline" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Button>
            ))}
          </div>

          <Separator />

          <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 AnchorTech Studio. Built for technical buyers who need evidence before they buy.</p>
            <button type="button" onClick={() => scrollToSection('hero')} className="inline-flex items-center gap-1 font-medium text-primary">
              Back to top
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <LeadCaptureForm
            source="contact-footer"
            title="Request a tailored reply"
            description="Share the systems, goals, and timeline you are evaluating. Include package interest if you already know the likely engagement model."
            emailId="contact-email"
            messageId="contact-message"
            packageInterestId="contact-package-interest"
          />
        </div>
      </div>
    </footer>
  );
}
