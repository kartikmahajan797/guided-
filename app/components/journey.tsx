import { Book, Compass, Layers, Rocket, Users } from "./icons";
import { Card, IconChip, Section, SectionHeading } from "./ui";

const steps = [
  {
    step: "01",
    icon: <Compass className="size-4.5" />,
    title: "Enroll",
    body: "Pick a track, or join through your school's Guided cohort.",
  },
  {
    step: "02",
    icon: <Users className="size-4.5" />,
    title: "Get matched",
    body: "We pair you with a mentor working in that exact field today.",
  },
  {
    step: "03",
    icon: <Book className="size-4.5" />,
    title: "Learn",
    body: "Short, current modules built by practitioners — not textbooks.",
  },
  {
    step: "04",
    icon: <Layers className="size-4.5" />,
    title: "Build",
    body: "Ship a real brief from a partner company, reviewed like real work.",
  },
  {
    step: "05",
    icon: <Rocket className="size-4.5" />,
    title: "Move",
    body: "Leave with a portfolio, a reference and a clear next step.",
  },
];

export function Journey() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            A clear path from classroom
            <br className="hidden sm:block" /> to career.
          </>
        }
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <Card
            key={step.step}
            className="transition-shadow duration-200 hover:shadow-float"
          >
            <span className="font-display text-[12px] font-bold tracking-[0.1em] text-ink-muted/70">
              {step.step}
            </span>
            <div className="mt-4">
              <IconChip tone="brand">{step.icon}</IconChip>
            </div>
            <h3 className="mt-5 font-display text-[16px] font-bold tracking-[-0.02em] text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              {step.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
