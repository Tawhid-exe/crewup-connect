import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { events } from "@/data/crewup";

export function FeaturedEvents() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Open right now"
            title="Opportunities looking for a crew"
            description="Fresh events from verified organizations, updated as spots fill."
          />
          <Button variant="soft" asChild>
            <Link to="/events">
              Browse all events <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}