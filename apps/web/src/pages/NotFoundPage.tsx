import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">404 error</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight">This page drifted off course.</h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                The requested page is not available. Head back to the AnchorTech Studio homepage to review services, project outcomes, team expertise, and lead capture options.
              </p>
            </div>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to homepage
              </Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-secondary/50 p-8">
            <h2 className="text-xl font-semibold text-foreground">What you can do next</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              If you were trying to evaluate AnchorTech as a technology partner, the homepage gives you everything you need in one place without additional navigation.
            </p>
            <Separator className="my-6" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">Explore services</p>
                <p className="mt-2 text-sm text-muted-foreground">Review product engineering, cloud, security, and managed IT capabilities.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">Review proof</p>
                <p className="mt-2 text-sm text-muted-foreground">Open case studies, read testimonials, and meet the leadership team.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">Check packages</p>
                <p className="mt-2 text-sm text-muted-foreground">Self-qualify based on the right engagement model for your timeline and scope.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">Contact AnchorTech</p>
                <p className="mt-2 text-sm text-muted-foreground">Submit your project brief and get a response within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
