import Link from "next/link";
import { Trophy, Radio, User, ShieldAlert, Zap } from "lucide-react";

const NAV_ITEMS = [
  { href: "/tournaments", icon: Trophy, label: "Tournois" },
  { href: "/live", icon: Radio, label: "Direct" },
  { href: "/player", icon: User, label: "Espace Joueur" },
  { href: "/admin", icon: ShieldAlert, label: "Administration" },
];

export function Sidebar() {
  return (
    <aside className="group fixed left-4 top-4 bottom-4 z-40 w-16 hover:w-72 flex flex-col rounded-2xl border border-border bg-card shadow-xl transition-all duration-300 overflow-hidden">
      {/* En-tête / Logo principal */}
      <div className="flex h-20 shrink-0 items-center border-b border-border/50">
        <div className="flex h-full w-16 shrink-0 items-center justify-center">
          <Zap className="h-8 w-8 text-primary" />
        </div>
        <span className="text-2xl font-bold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
          EPIck&apos;em
        </span>
      </div>

      {/* Liens de navigation */}
      <nav className="flex flex-1 flex-col gap-3 p-2 mt-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex h-14 items-center rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <div className="flex h-full w-12 shrink-0 items-center justify-center">
              <item.icon className="h-6 w-6" />
            </div>
            <span className="text-base font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
