import { createFileRoute } from "@tanstack/react-router";
import { Award, CalendarDays, Clock, HeartHandshake } from "lucide-react";

import { Container, PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { certificates, events } from "@/data/crewup";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Volunteer Dashboard | CrewUp" },
      {
        name: "description",
        content:
          "Track your upcoming shifts, verified volunteer hours and digital certificates in one volunteer dashboard.",
      },
      { property: "og:title", content: "Volunteer Dashboard | CrewUp" },
      {
        property: "og:description",
        content: "Your shifts, hours and certificates — all in one verified volunteer profile.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const upcoming = events.slice(0, 3);

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Volunteer"
        title="Welcome back, Tawhid"
        description="You're 12 hours away from your Community Champion badge this quarter."
        actions={<Button variant="mint">Edit profile</Button>}
      />

      <Container className="space-y-8 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Clock} label="Hours logged" value="48" hint="+8 this month" />
          <StatCard icon={HeartHandshake} label="Events joined" value="11" hint="Across 5 organizations" />
          <StatCard icon={Award} label="Certificates" value="3" hint="All verified" />
          <StatCard icon={CalendarDays} label="Upcoming shifts" value="2" hint="Next in 3 days" />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <section className="panel p-6">
            <h2 className="text-lg font-semibold">Upcoming shifts</h2>
            <ul className="mt-5 divide-y divide-border">
              {upcoming.map((event) => (
                <li key={event.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.date} · {event.time} · {event.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-mint/40 text-mint">
                      {event.hours} h
                    </Badge>
                    <Button variant="soft" size="sm">
                      Details
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel p-6">
            <h2 className="text-lg font-semibold">Quarterly goal</h2>
            <p className="mt-1 text-sm text-muted-foreground">48 of 60 hours completed</p>
            <Progress value={80} className="mt-5 h-2" />

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Certificates
            </h3>
            <ul className="mt-4 space-y-3">
              {certificates.map((certificate) => (
                <li
                  key={certificate.id}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 p-3"
                >
                  <div>
                    <p className="text-sm font-medium">{certificate.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {certificate.issuer} · {certificate.issued}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-mint">{certificate.hours} h</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}