import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/lotus.svg" alt="" className="mb-6 h-16 w-auto" />
      <h1 className="font-display text-4xl text-mauve">Page not found</h1>
      <p className="mt-3 text-ink/65">
        This invitation or page does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 border border-gold px-5 py-2 text-sm text-mauve"
      >
        Return home
      </Link>
    </div>
  );
}
