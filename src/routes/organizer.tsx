import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, CheckCircle2, FileBadge, Users } from "lucide-react";

import { Container, PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { events, registrations } from "@/data/crewup";

export const Route = createFileRoute("/organizer")({
  head: () => ({
    meta: [
      { title: "Organizer Tools | CrewUp" },
      {
        name: "description",
        content:
          "Create volunteer events, manage registrations, approve attendance and issue digital certificates from one organizer workspace.",
      },
      { property: "og:title", content: "Organizer Tools | CrewUp" },
      {
        property: "og:description",
        content: "Run volunteer events without spreadsheets: capacity, attendance and certificates in one place.",
      },
    ],
  }),
  component: OrganizerPage,
});

function OrganizerPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Organizer"
        title="Green Dhaka Initiative"
        description="Manage your events, approve volunteer participation and issue certificates when a shift ends."
        actions={
          <Button variant="mint">
            <CalendarPlus /> Create event
          </Button>
        }
      />

      <Container className="space-y-8 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={CalendarPlus} label="Active events" value="6" hint="2 this weekend" />
          <StatCard icon={Users} label="Registered volunteers" value="127" hint="18 new today" />
          <StatCard icon={CheckCircle2} label="Pending approvals" value="9" hint="Review before Friday" />
          <StatCard icon={FileBadge} label="Certificates issued" value="84" hint="This year" />
        </div>

        <section className="panel overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-6">
            <h2 className="text-lg font-semibold">Volunteer registrations</h2>
            <Button variant="soft" size="sm">
              Export list
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Volunteer</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((registration) => (
                <TableRow key={registration.id}>
                  <TableCell className="font-medium">{registration.volunteer}</TableCell>
                  <TableCell className="text-muted-foreground">{registration.event}</TableCell>
                  <TableCell>{registration.hours} h</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        registration.status === "Pending"
                          ? "border-border text-muted-foreground"
                          : "border-mint/40 text-mint"
                      }
                    >
                      {registration.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant={registration.status === "Pending" ? "mint" : "soft"} size="sm">
                      {registration.status === "Pending" ? "Approve" : "Certificate"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <div key={event.id} className="panel p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-mint">{event.category}</p>
              <h3 className="mt-2 font-semibold">{event.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {event.date} · {event.spotsFilled}/{event.spotsTotal} volunteers
              </p>
              <div className="mt-4 flex gap-2">
                <Button variant="soft" size="sm">
                  Manage
                </Button>
                <Button variant="ghost" size="sm">
                  Attendance
                </Button>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </PageLayout>
  );
}