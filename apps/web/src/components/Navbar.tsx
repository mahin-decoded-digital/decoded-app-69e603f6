import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/site-data';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ThemeToggle';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left"
          aria-label="Go to top"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            AT
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">AnchorTech</p>
            <p className="text-sm text-muted-foreground">Studio</p>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeSection === item.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button onClick={() => handleNavigate('contact')}>Start a conversation</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((current) => !current)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={cn(
                  'rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                  activeSection === item.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {item.label}
              </button>
            ))}
            <Button className="mt-2" onClick={() => handleNavigate('contact')}>Start a conversation</Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
};