import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { EventFilters } from "@/components/events/EventFilters";
import { EventCard } from "@/components/events/EventCard";
import { events } from "@/data/crewup";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Browse Volunteer Events | CrewUp" },
      {
        name: "description",
        content:
          "Search volunteer opportunities by interest, city and available hours, from verified NGOs, student clubs and community groups.",
      },
      { property: "og:title", content: "Browse Volunteer Events | CrewUp" },
      {
        property: "og:description",
        content: "Filter volunteer events by cause, location and time commitment, then register in one tap.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");

  const filtered = useMemo(
    () =>
      events.filter((event) => {
        const matchesQuery =
          query.trim() === "" ||
          `${event.title} ${event.organization} ${event.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        const matchesCategory = category === "All" || event.category === category;
        const matchesCity = city === "All" || event.city === city;
        return matchesQuery && matchesCategory && matchesCity;
      }),
    [query, category, city],
  );

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Discover"
        title="Volunteer opportunities"
        description="Filter by the cause you care about, the city you're in and the hours you can give."
      />

      <Container className="grid gap-6 py-12 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EventFilters
            query={query}
            onQueryChange={setQuery}
            category={category}
            onCategoryChange={setCategory}
            city={city}
            onCityChange={setCity}
          />
        </aside>

        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "event" : "events"} found
          </p>

          {filtered.length === 0 ? (
            <div className="panel p-10 text-center text-sm text-muted-foreground">
              No events match these filters yet. Try a different cause or city.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </PageLayout>
  );
}