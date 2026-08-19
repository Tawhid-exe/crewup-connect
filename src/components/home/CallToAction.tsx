import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/PageLayout";

export function CallToAction() {
  return (
    <section className="py-20">
      <Container>
        <div className="panel grid-glow flex flex-col items-center gap-6 p-12 text-center">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Your next four hours could matter to someone
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Join CrewUp as a volunteer, or bring your organization on board and fill your next event in
            days instead of weeks.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="mint" size="xl" asChild>
              <Link to="/events">Join as a volunteer</Link>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <Link to="/organizer">Register an organization</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}