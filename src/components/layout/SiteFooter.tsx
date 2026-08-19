import { Logo } from "@/components/layout/Logo";

const columns = [
  { title: "Platform", links: ["Browse events", "Volunteer dashboard", "Organizer tools", "Certificates"] },
  { title: "Organizations", links: ["Get verified", "Create an event", "Attendance tracking", "Pricing"] },
  { title: "Resources", links: ["Volunteer guide", "Safety policy", "Support", "Contact"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            One place for volunteers, NGOs and student clubs to find each other, run events and keep a
            verified record of every hour served.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="space-y-3">
            <h4 className="text-sm font-semibold">{column.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={link} className="transition-colors hover:text-foreground">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CrewUp. Built with the MERN stack.
      </div>
    </footer>
  );
}