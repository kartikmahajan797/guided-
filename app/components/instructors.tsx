import { ShieldCheck } from "./icons";
import { Container, SectionHeading } from "./ui";
import { instructors } from "../data/site";
import { Reveal } from "./motion";
import { ADULT_FACES, Portrait } from "./people";

/* Uniform neutral frames with only the monogram carrying the subject accent.
 * Tinting the whole tile sent amber-over-navy olive, and four identical
 * frames is also what this grid will look like once real portraits land. */
const accents = {
  brand: { mark: "text-brand-300", tag: "text-brand-300" },
  navy: { mark: "text-white/80", tag: "text-white/65" },
  sun: { mark: "text-sun-300", tag: "text-sun-300" },
  coral: { mark: "text-coral-300", tag: "text-coral-300" },
} as const;

export function Instructors() {
  return (
    <section
      id="instructors"
      className="relative overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-36"
    >
      {/* Grain + two light sources. A flat navy fill this large reads as dead
          ink; the texture is what makes it look printed rather than filled. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 size-[560px] rounded-full bg-navy-700/50 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[440px] rounded-full bg-brand-600/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="grain-layer pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
      />

      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Who teaches your child"
          title={
            <>
              Working engineers and finance
              <br className="hidden sm:block" /> professionals — trained to
              teach kids.
            </>
          }
          description="Every instructor does this work for a living and has taught this age group before. Subject knowledge alone doesn't get you in front of an 8-year-old."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((person, i) => {
            const a = accents[person.accent];
            return (
              <Reveal key={person.name} delay={i * 80} className="flex">
              <article className="card-lift group flex w-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                {/* Portrait slot — sized and framed as a real photo will be,
                    so dropping images in later changes nothing else. */}
                <div className="relative flex aspect-4/3 items-end justify-center overflow-hidden rounded-xl bg-linear-to-br from-white/[0.1] to-white/[0.03] ring-1 ring-inset ring-white/10">
                  <Portrait
                    p={ADULT_FACES[i % ADULT_FACES.length]}
                    plain
                    className="h-[122%] w-auto transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <span
                    className={`absolute left-2.5 top-2 font-display text-[11px] font-bold tracking-[0.08em] ${a.mark}`}
                  >
                    {person.initials}
                  </span>
                </div>

                <p className="mt-5 font-display text-[16px] font-bold tracking-[-0.025em] text-white">
                  {person.name}
                </p>
                <p className="mt-1 text-[12.5px] leading-snug text-white/50">
                  {person.credential}
                </p>
                <p
                  className={`mt-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${a.tag}`}
                >
                  {person.teaches}
                </p>
                <p className="mt-3.5 border-t border-white/10 pt-3.5 text-[13px] leading-[1.6] text-white/70">
                  {person.whyKids}
                </p>
              </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 sm:items-center">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300 ring-1 ring-inset ring-brand-400/20">
            <ShieldCheck className="size-5" />
          </span>
          <p className="text-[13.5px] leading-[1.6] text-white/70">
            Every instructor is police-verified, trained in child-safe teaching
            practice, and observed in class each term. Classes are recorded and
            available to you for 30 days.
          </p>
        </div>
      </Container>
    </section>
  );
}
