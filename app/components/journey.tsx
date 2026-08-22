import type { ReactNode } from "react";
import { Calendar, Chart, Compass, Rocket, Users } from "./icons";
import { Container, SectionHeading } from "./ui";
import { journey } from "../data/site";
import { Reveal } from "./motion";

const icons: Record<string, ReactNode> = {
  calendar: <Calendar className="size-[18px]" />,
  compass: <Compass className="size-[18px]" />,
  users: <Users className="size-[18px]" />,
  chart: <Chart className="size-[18px]" />,
  rocket: <Rocket className="size-[18px]" />,
};

export function Journey() {
  return (
    <section id="how-it-works" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From a free trial to a course
              <br className="hidden sm:block" /> your child asks to go back to.
            </>
          }
          description="Five steps, no lock-in. You can watch any class and stop at the end of any month."
        />

        {/* A numbered path, not five boxes. The steps are sequential, so the
            layout should be sequential too — a card grid says "pick one",
            a track says "this is what happens next". */}
        <ol className="relative mt-16 grid gap-y-10 lg:grid-cols-5 lg:gap-x-6">
          {/* The rail. Desktop: horizontal, behind the nodes. Mobile: vertical
              down the left, ending at the last node. */}
          <span
            aria-hidden
            className="absolute left-[21px] top-3 h-[calc(100%-4rem)] w-px bg-linear-to-b from-brand-400/60 via-line-strong to-transparent lg:left-0 lg:top-[21px] lg:h-px lg:w-full lg:bg-linear-to-r lg:from-brand-400/60 lg:via-line-strong lg:to-transparent"
          />

          {journey.map((step, i) => (
            <Reveal key={step.step} delay={i * 90} className="relative pl-14 lg:pl-0">
              <div className="flex items-center gap-3 lg:block">
                <span
                  className={`absolute left-0 top-0 flex size-[42px] items-center justify-center rounded-full border text-[13px] font-bold shadow-xs lg:relative lg:size-[42px] ${
                    i === 0
                      ? "border-brand-500/30 bg-brand-500/10 text-brand-700"
                      : "border-line-strong bg-paper text-ink-muted"
                  }`}
                >
                  <span className="font-display tnum">{step.step}</span>
                </span>
              </div>

              <div className="lg:mt-6 lg:pr-3">
                <span className="mb-3 inline-flex text-ink-soft lg:mb-4">
                  {icons[step.icon]}
                </span>
                <h3 className="font-display text-[16px] font-bold leading-snug tracking-[-0.025em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
