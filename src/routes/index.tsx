import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RoleFeatures } from "@/components/home/RoleFeatures";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { CallToAction } from "@/components/home/CallToAction";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CrewUp – Volunteer Management & Community Event Platform" },
      {
        name: "description",
        content:
          "CrewUp connects volunteers with verified NGOs, student clubs and community organizers. Discover events, track hours and earn digital certificates.",
      },
      { property: "og:title", content: "CrewUp – Volunteer Management & Community Event Platform" },
      {
        property: "og:description",
        content:
          "Discover volunteer opportunities by interest, location and availability. Track verified hours and build a volunteer portfolio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      <Hero />
      <HowItWorks />
      <RoleFeatures />
      <FeaturedEvents />
      <CallToAction />
    </PageLayout>
  );
}
