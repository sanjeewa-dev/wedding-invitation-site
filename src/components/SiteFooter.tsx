import { dict } from "@/lib/i18n/dictionaries";
import { coupleNames, formatWeddingDate } from "@/lib/format";
import type { WeddingSettings } from "@/lib/types";

export function SiteFooter({ settings }: { settings: WeddingSettings }) {
  const names = coupleNames(settings);

  return (
    <footer className="mt-auto border-t-4 border-gold bg-burgundy-dark py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center text-gold/90 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-3 px-4">
        <p className="font-script text-3xl text-gold sm:text-4xl">
          {names.bride} <span className="text-gold/80">&</span> {names.groom}
        </p>
        <p className="font-display text-[11px] uppercase tracking-[0.2em] text-gold/80">
          {formatWeddingDate(settings.wedding_date)}
        </p>
        <p className="text-[10px] tracking-wide text-gold/50">
          {dict.footer.withLove}
        </p>
      </div>
    </footer>
  );
}
