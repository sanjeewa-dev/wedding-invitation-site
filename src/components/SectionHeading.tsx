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
    <FadeIn className="mx-auto mb-7 max-w-2xl px-1 text-center sm:mb-10 md:mb-12">
      {eyebrow ? (
        <p className="font-script mb-1 text-2xl text-gold sm:text-4xl">{eyebrow}</p>
      ) : (
        <p className="font-script mb-1 text-2xl text-gold sm:text-4xl">Lotus</p>
      )}
      <h2 className="font-display text-xl font-normal uppercase tracking-[0.1em] text-burgundy-dark sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-16 bg-gold sm:mt-4 sm:w-24" />
      {lead ? (
        <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:mt-4 md:text-base">
          {lead}
        </p>
      ) : null}
    </FadeIn>
  );
}
