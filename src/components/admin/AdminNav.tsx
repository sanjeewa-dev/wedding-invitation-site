import Link from "next/link";
import { logoutAdmin } from "@/app/actions/admin";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/guests", label: "Guests" },
  { href: "/admin/rsvps", label: "RSVPs" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminNav() {
  return (
    <header className="border-b border-gold/30 bg-ivory/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-display text-xl text-mauve">
            Lotus Admin
          </Link>
          <nav className="flex flex-wrap gap-3 text-sm text-ink/75">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="border border-gold/40 px-3 py-1.5 text-xs uppercase tracking-wider text-mauve"
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
