import { ArrowRight, Building } from "./icons";
import { Button, CheckList, Container, SectionHeading } from "./ui";
import { schools } from "../data/site";

const { benefits, process } = schools;

export function ForSchools() {
  return (
    <section id="for-schools" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="For schools"
              title={
                <>
                  Finance, AI, Development and
                  <br className="hidden sm:block" /> Robotics, inside your
                  timetable.
                </>
              }
              description="Guided runs the four subjects as a weekly period for grades 3–7, taught by our instructors, with kits and assessments supplied."
            />

            <div className="mt-9">
              <CheckList items={benefits} />
            </div>

            <Button href="#contact" className="mt-10">
              Book a school demo
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Button>
          </div>

          {/* Dark panel: this is a different buyer with a different decision,
              and the tonal switch marks the handover without a new section. */}
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 shadow-float sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-400/22 blur-[90px]"
            />
            <div
              aria-hidden
              className="grain-layer pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-brand-300 ring-1 ring-inset ring-white/15">
                  <Building className="size-5" />
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Onboarding
                </span>
              </div>

              <h3 className="heading mt-7 text-[22px] leading-tight text-white">
                From first call to a full year, in four steps.
              </h3>

              <ol className="mt-8 space-y-7">
                {process.map((item, index) => (
                  <li key={item} className="relative flex gap-4">
                    {index < process.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute left-[13px] top-8 h-[calc(100%+0.75rem)] w-px bg-white/12"
                      />
                    ) : null}
                    <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-400 font-display text-[11.5px] font-bold text-navy-950">
                      {index + 1}
                    </span>
                    <span className="pt-0.5 text-[14px] leading-[1.6] text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
