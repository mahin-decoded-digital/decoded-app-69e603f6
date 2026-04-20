import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) => {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
};
