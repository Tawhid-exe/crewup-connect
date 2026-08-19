import { Check } from "lucide-react";

import { Container } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roles = [
  {
    id: "volunteer",
    label: "Volunteers",
    headline: "A profile that proves what you did",
    features: [
      "Register and manage a personal profile with interests and availability",
      "Search and register for events near you",
      "Track contribution hours across every organization",
      "Download digital certificates and share your portfolio",
    ],
  },
  {
    id: "organizer",
    label: "Organizers",
    headline: "Run an event without a spreadsheet",
    features: [
      "Create and manage volunteer events with shifts and capacity",
      "See registered volunteers and message them in one place",
      "Approve participation and mark attendance on the day",
      "Issue digital certificates in a single click",
    ],
  },
  {
    id: "admin",
    label: "Admins",
    headline: "Keep the platform trustworthy",
    features: [
      "Verify NGOs, student clubs and community groups",
      "Review reports and remove fake or inappropriate events",
      "Monitor platform activity from one dashboard",
      "Audit hour approvals and certificate issuance",
    ],
  },
];

export function RoleFeatures() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <SectionHeading
          eyebrow="Built for every side"
          title="One platform, three clear roles"
          description="Each role gets its own dashboard, so nobody wades through features they don't need."
        />

        <Tabs defaultValue="volunteer" className="mt-10">
          <TabsList className="bg-secondary/60">
            {roles.map((role) => (
              <TabsTrigger key={role.id} value={role.id}>
                {role.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-6">
              <div className="panel grid gap-8 p-7 md:grid-cols-[1fr_1.2fr]">
                <h3 className="text-2xl font-bold leading-tight">{role.headline}</h3>
                <ul className="space-y-3">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-mint" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}