import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/PageLayout";
import heroImage from "@/assets/hero-volunteers.jpg";

export function Hero() {
  return (
    <section className="grid-glow border-b border-border">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">
            <ShieldCheck className="size-3.5" /> Verified organizations only
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Stop losing volunteers in the <span className="text-gradient-mint">social media scroll</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            CrewUp connects volunteers with NGOs, student clubs and community organizers in one place —
            discover opportunities by interest, location and availability, then track every verified hour
            you serve.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="mint" size="xl" asChild>
              <Link to="/events">
                Find an opportunity <ArrowRight />
              </Link>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <Link to="/organizer">I'm organizing an event</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: "1,240", label: "Active volunteers" },
              { value: "86", label: "Verified organizations" },
              { value: "9,500", label: "Hours logged" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-mint">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="panel overflow-hidden p-2">
            <img
              src={heroImage}
              alt="Volunteers packing donation boxes together at a community hall"
              width={1600}
              height={1200}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="panel absolute -bottom-6 left-6 right-6 flex items-center justify-between p-4 sm:left-10 sm:right-auto sm:w-72">
            <div>
              <p className="text-xs text-muted-foreground">Next shift</p>
              <p className="text-sm font-semibold">Riverbank Cleanup · 07:00</p>
            </div>
            <span className="rounded-lg bg-mint px-2.5 py-1 text-xs font-semibold text-mint-foreground">
              4 h
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}