import { Clock, ShieldCheck, Users } from "./icons";
import { Container, IconChip, SectionHeading } from "./ui";
import { Reveal } from "./motion";

/* Parent-facing objections, answered in the parent's own terms. */
const points = [
  {
    icon: <Users className="size-5" />,
    tone: "brand" as const,
    title: "Classes of 30 don't teach building.",
    body: "In a big class the confident kids answer and everyone else watches. Ours cap at eight, so every child has to touch the thing.",
  },
  {
    icon: <Clock className="size-5" />,
    tone: "sun" as const,
    title: "8 to 12 is the window.",
    body: "Old enough to follow real logic, young enough that it still feels like play. Start later and it becomes another subject to survive.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    tone: "coral" as const,
    title: "Screen time they build with.",
    body: "The same hour that would have gone to a feed goes into a robot, an app or a budget they made themselves.",
  },
];

export function Problem() {
  return (
    <section id="why" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Guided"
          title={
            <>
              Your child already uses this
              <br className="hidden sm:block" /> technology. This is where they
              learn to make it.
            </>
          }
          description="Money, AI, code and machines are the four things they will meet everywhere and be taught almost nowhere before senior school."
        />

        {/* Rules instead of card chrome. Three more bordered boxes here would
            be the fourth card grid on the page; a ruled column reads as
            argument, which is what this section is. */}
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 100} className="border-t-2 border-ink/8 pt-7">
              <IconChip tone={point.tone}>{point.icon}</IconChip>
              <h3 className="mt-6 font-display text-[18px] font-bold leading-snug tracking-[-0.03em] text-ink text-balance">
                {point.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
