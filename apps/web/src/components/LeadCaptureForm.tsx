import { Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useLeadForm } from '@/hooks/useLeadForm';

interface LeadCaptureFormProps {
  source: string;
  packageInterest?: string;
  title: string;
  description: string;
  compact?: boolean;
  className?: string;
  emailId?: string;
  messageId?: string;
  packageInterestId?: string;
}

export const LeadCaptureForm = ({
  source,
  packageInterest,
  title,
  description,
  compact = false,
  className,
  emailId,
  messageId,
  packageInterestId,
}: LeadCaptureFormProps) => {
  const { values, errors, successMessage, submitError, isSubmitting, handleChange, handleSubmit } = useLeadForm({
    source,
    packageInterest,
  });

  const resolvedEmailId = emailId ?? `${source}-email`;
  const resolvedMessageId = messageId ?? `${source}-message`;

  return (
    <div className={cn('rounded-2xl border border-border bg-card p-6 shadow-sm', className)}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input type="hidden" name="source" value={source} />
        <input id={packageInterestId} type="hidden" name="packageInterest" value={packageInterest ?? ''} readOnly />

        <div className="space-y-2">
          <Label htmlFor={resolvedEmailId}>Work email</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id={resolvedEmailId}
              type="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className={cn('pl-9', errors.email && 'border-destructive focus-visible:ring-destructive')}
              aria-invalid={Boolean(errors.email)}
            />
          </div>
          {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor={resolvedMessageId}>Project brief</Label>
          <div className="relative">
            <MessageCircle className="pointer-events-none absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
            <Textarea
              id={resolvedMessageId}
              placeholder="Tell us about the system, timeline, or business problem you want to solve."
              value={values.message}
              onChange={(event) => handleChange('message', event.target.value)}
              className={cn('min-h-28 pl-9', errors.message && 'border-destructive focus-visible:ring-destructive')}
              aria-invalid={Boolean(errors.message)}
            />
          </div>
          {errors.message ? <p className="text-sm text-destructive">{errors.message}</p> : null}
        </div>

        {successMessage ? <div className="rounded-lg bg-primary/10 px-4 py-3 text-sm text-primary">{successMessage}</div> : null}
        {submitError ? <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">{submitError}</div> : null}

        <Button type="submit" className={cn('w-full', compact && 'sm:w-auto')} disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Talk to AnchorTech'}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
