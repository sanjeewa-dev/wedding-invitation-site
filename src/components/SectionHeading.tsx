import { FadeIn } from "./FadeIn";

export function SectionHeading({
  title,
  lead,
  eyebrow,
}: {
  title: string;
  lead?: string;
  eyebrow?: string;
}) {
  return (
    <FadeIn className="mx-auto mb-10 max-w-2xl px-1 text-center md:mb-12">
      {eyebrow ? (
        <p className="font-script mb-1 text-3xl text-gold sm:text-4xl">{eyebrow}</p>
      ) : (
        <p className="font-script mb-1 text-3xl text-gold sm:text-4xl">Lotus</p>
      )}
      <h2 className="font-display text-2xl font-normal uppercase tracking-[0.12em] text-burgundy-dark sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-0.5 w-24 bg-gold" />
      {lead ? (
        <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
          {lead}
        </p>
      ) : null}
    </FadeIn>
  );
}
