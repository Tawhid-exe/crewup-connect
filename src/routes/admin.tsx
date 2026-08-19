import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Building2, ShieldCheck, Trash2 } from "lucide-react";

import { Container, PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events, orgRequests } from "@/data/crewup";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | CrewUp" },
      {
        name: "description",
        content:
          "Verify organizations, review reported events and keep the CrewUp volunteer platform safe and trustworthy.",
      },
      { property: "og:title", content: "Admin Dashboard | CrewUp" },
      {
        property: "og:description",
        content: "Organization verification and event moderation for the CrewUp volunteer platform.",
      },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Admin"
        title="Platform moderation"
        description="Verify organizations before they publish, and remove events that break community guidelines."
      />

      <Container className="space-y-8 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Building2} label="Organizations" value="86" hint="4 pending review" />
          <StatCard icon={ShieldCheck} label="Verified this month" value="12" hint="Avg. review 6 h" />
          <StatCard icon={AlertTriangle} label="Reported events" value="3" hint="Needs a decision" />
          <StatCard icon={Trash2} label="Removed events" value="7" hint="Last 90 days" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <section className="panel p-6">
            <h2 className="text-lg font-semibold">Verification queue</h2>
            <ul className="mt-5 space-y-3">
              {orgRequests.map((request) => (
                <li
                  key={request.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 p-4"
                >
                  <div>
                    <p className="font-medium">{request.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {request.type} · submitted {request.submitted}
                    </p>
                  </div>
                  {request.status === "Awaiting review" ? (
                    <div className="flex gap-2">
                      <Button variant="mint" size="sm">
                        Verify
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reject
                      </Button>
                    </div>
                  ) : (
                    <Badge variant="outline" className="border-mint/40 text-mint">
                      {request.status}
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="panel p-6">
            <h2 className="text-lg font-semibold">Reported events</h2>
            <ul className="mt-5 space-y-3">
              {events.slice(3, 6).map((event) => (
                <li
                  key={event.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 p-4"
                >
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.organization} · {event.city}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="soft" size="sm">
                      Keep
                    </Button>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}