import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/lib/site-data';
import { SectionHeader } from '@/components/SectionHeader';

export const TeamSection = () => {
  return (
    <section id="team" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Leadership"
          title="A leadership bench that understands both board-level pressure and delivery realities"
          description="Team bios humanize the brand and show buyers who they will actually work with once a project begins."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden rounded-3xl border-border bg-card shadow-sm">
              <img
                src={member.image}
                alt={`${member.name} portrait`}
                crossOrigin="anonymous"
                className="h-80 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="rounded-full px-3 py-1">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
