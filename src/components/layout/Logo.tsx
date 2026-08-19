import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-xl bg-mint text-mint-foreground">
        <Sprout className="size-5" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">CrewUp</span>
    </Link>
  );
}