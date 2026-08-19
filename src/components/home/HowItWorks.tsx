import { CalendarCheck, Search, Trophy } from "lucide-react";

import { Container } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/common/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "Filter opportunities by interest, city and the hours you actually have free this week.",
  },
  {
    icon: CalendarCheck,
    title: "Register & show up",
    body: "One-tap registration, shift reminders and attendance marked by the organizer on the day.",
  },
  {
    icon: Trophy,
    title: "Get credited",
    body: "Approved hours become a digital certificate and a verified entry on your volunteer portfolio.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from scrolling to serving"
          description="No group chats, no lost posts, no spreadsheets — the whole volunteering loop lives in one flow."
          align="center"
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="panel p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-mint text-mint-foreground">
                  <step.icon className="size-5" />
                </span>
                <span className="font-display text-3xl font-bold text-muted-foreground/40">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}