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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-3 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/admin" className="font-display text-lg text-mauve sm:text-xl">
            Lotus Admin
          </Link>
          <nav className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink/75">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="tap-target px-1 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="tap-target border border-gold/40 px-3 py-1.5 text-xs uppercase tracking-wider text-mauve"
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
