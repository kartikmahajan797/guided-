import { ArrowRight, Building, Users } from "./icons";
import { Button, CheckList, Section, SectionHeading } from "./ui";

const student = [
  "Self-paced, mentor-backed tracks",
  "1:1 sessions with an industry mentor",
  "Live projects from partner companies",
  "Portfolio review before you apply",
];

const school = [
  "Runs inside your timetable, no extra periods",
  "Curriculum mapped to your existing syllabus",
  "Mentor cohorts assigned per batch",
  "Termly outcome reports for parents",
];

export function Paths() {
  return (
    <Section id="programs" tone="mist">
      <SectionHeading
        align="center"
        eyebrow="Two ways in"
        title="With your school, or on your own."
        description="Guided plugs into your school's timetable — or works directly with you if your school isn't there yet."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Individual */}
        <div className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-brand-400/15 text-brand-600">
              <Users className="size-4.5" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              For students
            </span>
          </div>

          <h3 className="heading mt-6 text-[26px] leading-tight">
            Individual Enrollment
          </h3>
          <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
            Enroll directly, pick a track and get matched with a mentor working
            in the field you want to end up in.
          </p>

          <div className="mt-7">
            <CheckList items={student} />
          </div>

          <Button href="#courses" className="mt-9">
            See student programs
            <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* School */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-900 via-navy-950 to-navy-900 p-8 shadow-float sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-brand-400/20 blur-[80px]"
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                <Building className="size-4.5" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                For schools
              </span>
            </div>

            <h3 className="heading mt-6 text-[26px] leading-tight text-white">
              School-Integrated Program
            </h3>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/65">
              Bring industry mentors, live briefs and career readiness into the
              school year — without rebuilding your timetable.
            </p>

            <div className="mt-7">
              <CheckList items={school} tone="dark" />
            </div>

            <Button href="#for-schools" variant="brand" className="mt-9">
              Partner with Guided
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
