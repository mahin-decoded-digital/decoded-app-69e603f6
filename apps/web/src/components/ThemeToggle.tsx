import { Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full"
    >
      {isDark ? <ShieldCheck className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
    </Button>
  );
};