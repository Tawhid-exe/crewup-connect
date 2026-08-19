import { CalendarDays, Clock, MapPin, ShieldCheck, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { VolunteerEvent } from "@/data/crewup";

export function EventCard({ event }: { event: VolunteerEvent }) {
  const filledPercent = Math.round((event.spotsFilled / event.spotsTotal) * 100);
  const isFull = event.spotsFilled >= event.spotsTotal;

  return (
    <article className="panel flex flex-col gap-4 p-5 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <Badge variant="outline" className="border-mint/40 text-mint">
          {event.category}
        </Badge>
        <span className="text-xs text-muted-foreground">{event.hours} h credit</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold leading-snug">{event.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          {event.organization}
          {event.verified && <ShieldCheck className="size-4 text-mint" aria-label="Verified organization" />}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>

      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="size-4 text-mint" /> {event.date}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="size-4 text-mint" /> {event.time}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4 text-mint" /> {event.city}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="size-4 text-mint" /> {event.spotsFilled}/{event.spotsTotal}
        </div>
      </dl>

      <div className="space-y-2">
        <Progress value={filledPercent} className="h-1.5" />
        <p className="text-xs text-muted-foreground">{filledPercent}% of spots filled</p>
      </div>

      <Button variant={isFull ? "soft" : "mint"} disabled={isFull} className="mt-auto">
        {isFull ? "Waitlist full" : "Register as volunteer"}
      </Button>
    </article>
  );
}