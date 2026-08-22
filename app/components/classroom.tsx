import { Play } from "./icons";
import { ClassIllustration } from "./illustration";
import { Container, SectionHeading } from "./ui";
import { classroomMoments, courses } from "../data/site";
import { Reveal } from "./motion";

const courseName = Object.fromEntries(courses.map((c) => [c.key, c.name]));

/* A bento, not a uniform grid. Six equal tiles read as a contact sheet;
 * varying the weight tells the parent which moment matters most — and the
 * first tile is the one that answers "will my child actually enjoy this". */
const spans = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
];
const heights = [
  "h-64 sm:h-[300px]",
  "h-64 sm:h-[300px]",
  "h-60 sm:h-[280px]",
  "h-60 sm:h-[280px]",
  "h-60 sm:h-[272px]",
  "h-60 sm:h-[272px]",
];

export function Classroom() {
  return (
    <section id="classroom" className="bg-mist py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Inside a class"
            eyebrowAccent="coral"
            title={
              <>
                What an hour actually
                <br className="hidden sm:block" /> looks like.
              </>
            }
            description="Not slides. Kids building, testing, breaking and fixing something they can show you the same evening."
          />
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-line-strong bg-paper py-2 pl-2 pr-5 text-[13.5px] font-medium text-ink shadow-xs transition-all duration-300 hover:border-ink/25 hover:shadow-card"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-coral-500 text-white transition-transform duration-300 group-hover:scale-105">
              <Play className="size-3.5" />
            </span>
            Watch a full class
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {classroomMoments.map((moment, i) => (
            <Reveal
              key={moment.caption}
              delay={(i % 3) * 90}
              className={`flex ${spans[i] ?? "lg:col-span-2"}`}
            >
            <figure className="group card-lift w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card hover:-translate-y-1 hover:shadow-lift">
              <div className="relative overflow-hidden">
                <ClassIllustration
                  scene={moment.illustration}
                  className={`w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${
                    heights[i] ?? "h-52"
                  }`}
                />
                <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-xs backdrop-blur-sm">
                  {courseName[moment.course]}
                </span>
                {/* Labelled honestly until real class media is supplied. */}
                <span className="absolute right-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                  Illustration
                </span>
              </div>
              <figcaption className="px-5 py-4 text-[13.5px] leading-[1.55] text-ink-soft">
                {moment.caption}
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-muted">
          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-ink-muted" />
          Images are illustrative. Real photos and video from live classes will
          replace them — no stock photography, and no child shown without
          written parent consent.
        </p>
      </Container>
    </section>
  );
}
