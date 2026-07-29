import { ArrowRight } from "./icons";
import { Button, CheckList, Section, SectionHeading } from "./ui";

const benefits = [
  "Runs inside your existing timetable and academic calendar",
  "Mentor-led sessions mapped to the subjects you already teach",
  "Live industry briefs your students complete as coursework",
  "Termly outcome reports for parents and leadership",
];

const process = [
  "A 30-minute call to understand your cohort and calendar",
  "We map tracks and mentors to your subjects and grades",
  "Pilot cohort runs for one term, fully supported",
  "Review outcomes together, then scale across the school",
];

export function ForSchools() {
  return (
    <Section id="for-schools">
      <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="For schools"
            title={
              <>
                Make industry exposure
                <br className="hidden sm:block" /> part of your curriculum.
              </>
            }
            description="Guided partners with schools and colleges to run mentorship, live projects and career readiness inside the academic year."
          />

          <div className="mt-9">
            <CheckList items={benefits} />
          </div>

          <Button href="#contact" className="mt-10">
            Book a school demo
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10">
          <p className="font-display text-[15px] font-bold tracking-[-0.02em] text-ink">
            How onboarding works
          </p>
          <ol className="mt-7 space-y-6">
            {process.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[11.5px] font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-[14px] leading-relaxed text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
