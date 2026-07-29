import { Book, Target, Users } from "./icons";
import { Card, IconChip, Section, SectionHeading } from "./ui";

const points = [
  {
    icon: <Book />,
    title: "Classrooms teach theory.",
    body: "Students spend years learning concepts they never get to apply to anything that ships or gets reviewed.",
  },
  {
    icon: <Users />,
    title: "Mentors, not lecturers.",
    body: "Guidance is one-way. Almost nobody shows students how the work is actually done, day to day.",
  },
  {
    icon: <Target />,
    title: "Portfolios, not certificates.",
    body: "Employers want evidence — real projects, real feedback, real decisions made under a real deadline.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="The problem"
        title={
          <>
            There&apos;s a gap between
            <br className="hidden sm:block" /> school and the real world.
          </>
        }
        description="Curricula move slower than industry does. Students graduate without real projects, real feedback, or a clear picture of the work waiting for them."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <Card key={point.title} className="p-7">
            <IconChip>{point.icon}</IconChip>
            <h3 className="mt-6 font-display text-[17px] font-bold tracking-[-0.02em] text-ink">
              {point.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              {point.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
