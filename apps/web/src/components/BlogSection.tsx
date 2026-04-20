import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/site-data';
import { SectionHeader } from '@/components/SectionHeader';

const readArticle = (title: string) => {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const messageField = document.getElementById('contact-message') as HTMLTextAreaElement | null;
  if (messageField) {
    messageField.focus();
    messageField.value = `I would like a deeper conversation about: ${title}`;
    messageField.dispatchEvent(new Event('input', { bubbles: true }));
  }
};

export const BlogSection = () => {
  return (
    <section id="insights" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Insights"
        title="Recent thinking for technical buyers researching the right partner"
        description="Our resources section supports SEO and buyer education with concise posts focused on modernization, security, and managed service decision-making."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="rounded-3xl border-border bg-card shadow-sm">
            <CardContent className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between gap-4">
                <Badge variant="secondary" className="rounded-full px-3 py-1">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{post.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.publishedAt}</span>
                <Button variant="ghost" onClick={() => readArticle(post.title)}>
                  Ask about this topic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
