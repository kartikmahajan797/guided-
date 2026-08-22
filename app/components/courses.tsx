import type { ReactNode } from "react";
import {
  ArrowRight,
  Box,
  Brain,
  Clock,
  Code,
  Coin,
  Layers,
  Robot,
  Users,
} from "./icons";
import { Container, Pill, SectionHeading } from "./ui";
import { Reveal } from "./motion";
import { ageBands, courses, logistics } from "../data/site";

const courseIcons: Record<string, ReactNode> = {
  coin: <Coin className="size-5" />,
  brain: <Brain className="size-5" />,
  code: <Code className="size-5" />,
  robot: <Robot className="size-5" />,
};

const logisticsIcons: Record<string, ReactNode> = {
  clock: <Clock className="size-4" />,
  users: <Users className="size-4" />,
  layers: <Layers className="size-4" />,
  box: <Box className="size-4" />,
};

/* One accent per subject so the four courses are told apart at a glance —
 * teal and navy are existing brand colours, amber and coral the two warm
 * additions. Accents are used at full strength on the rail and icon, never
 * as wash over text, so nothing loses contrast. */
const accents = {
  sun: {
    chip: "bg-sun-500/12 text-sun-600 ring-sun-500/25",
    rail: "bg-sun-400",
    tick: "text-sun-500",
  },
  brand: {
    chip: "bg-brand-500/12 text-brand-700 ring-brand-500/25",
    rail: "bg-brand-400",
    tick: "text-brand-500",
  },
  navy: {
    chip: "bg-navy-700/10 text-navy-700 ring-navy-700/20",
    rail: "bg-navy-700",
    tick: "text-navy-700",
  },
  coral: {
    chip: "bg-coral-500/10 text-coral-600 ring-coral-500/25",
    rail: "bg-coral-400",
    tick: "text-coral-500",
  },
} as const;

export function Courses() {
  return (
    <section id="courses" className="bg-mist py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The four courses"
          title="Four subjects. One hour a week."
          description="Every course runs across all three age bands — the subject stays the same, the project gets harder as your child moves up."
        />

        {/* ------------------------------------------------ logistics row --
            The four numbers a parent checks before reading a word of copy,
            so they sit above the cards, not inside them. */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card sm:grid-cols-4">
          {logistics.map((item, i) => (
            <Reveal key={item.label} delay={i * 70} y={14} className="bg-white p-5 sm:p-6">
              <dt className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                <span className="text-brand-600">
                  {logisticsIcons[item.icon]}
                </span>
                {item.label}
              </dt>
              <dd className="mt-3.5">
                <span className="block font-display text-[17px] font-bold leading-tight tracking-[-0.03em] text-ink sm:text-[21px]">
                  {item.value}
                </span>
                <span className="mt-1.5 block text-[12.5px] leading-snug text-ink-muted">
                  {item.detail}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* -------------------------------------------------- course cards */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {courses.map((course, i) => {
            const a = accents[course.accent];
            return (
              <Reveal key={course.key} delay={i * 80} className="flex">
              <article
                className="group card-lift relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              >
                <span aria-hidden className={`block h-1 w-full ${a.rail}`} />

                <div className="flex grow flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ${a.chip}`}
                      >
                        {courseIcons[course.icon]}
                      </span>
                      <div>
                        <h3 className="font-display text-[21px] font-bold leading-none tracking-[-0.03em] text-ink">
                          {course.name}
                        </h3>
                        <span className="mt-1.5 block text-[12px] text-ink-muted">
                          {course.ages} · {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-[14.5px] leading-[1.6] text-ink-soft text-pretty">
                    {course.tagline}
                  </p>

                  <p className="mt-7 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    What your child will build
                  </p>
                  <ul className="mt-3.5 space-y-3">
                    {course.builds.map((build) => (
                      <li
                        key={build}
                        className="flex gap-2.5 text-[13.5px] leading-[1.5]"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden
                          className={`mt-[3px] size-3.5 shrink-0 ${a.tick}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m4 10.5 4 4 8-9" />
                        </svg>
                        <span className="text-ink-soft">{build}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                    <span className="text-[12.5px] text-ink-muted">
                      Starts with a free trial class
                    </span>
                    <a
                      href="#contact"
                      className="group/cta inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-paper px-4.5 py-2.5 text-[13px] font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      Book a free trial
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>

        {/* ------------------------------------------- age-band comparison --
            This used to repeat inside all four cards — twelve rows of the
            same table, four times over. Pulled out once, it becomes the
            thing that answers "which band is my child in and what changes". */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
          <div className="border-b border-line px-6 py-5 sm:px-8">
            <h3 className="font-display text-[17px] font-bold tracking-[-0.03em] text-ink">
              The same subject, three ceilings
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
              We place your child after a short chat in the trial class — you
              don&apos;t have to pick.
            </p>
          </div>

          {/* Matrix, from `md` up */}
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-mist/60">
                  <th className="w-[124px] px-6 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted sm:px-8">
                    Band
                  </th>
                  {courses.map((c) => (
                    <th
                      key={c.key}
                      className="border-l border-line px-5 py-3.5 text-[12.5px] font-semibold text-ink"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`size-2 rounded-full ${accents[c.accent].rail}`}
                        />
                        {c.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ageBands.map((band) => (
                  <tr key={band.key} className="border-t border-line">
                    <th
                      scope="row"
                      className="px-6 py-5 align-top sm:px-8"
                    >
                      <span className="block font-display text-[14px] font-bold tracking-[-0.02em] text-ink">
                        {band.name}
                      </span>
                      <span className="mt-0.5 block text-[12px] font-normal text-ink-muted">
                        {band.ages}
                      </span>
                    </th>
                    {courses.map((c) => (
                      <td
                        key={c.key}
                        className="border-l border-line px-5 py-5 align-top text-[12.5px] leading-[1.55] text-ink-soft"
                      >
                        {c.byBand[band.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stacked by band below `md` — a four-column table is unreadable
              at 375px and horizontal scroll hides half the offer. */}
          <div className="divide-y divide-line md:hidden">
            {ageBands.map((band) => (
              <div key={band.key} className="px-6 py-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-[15px] font-bold tracking-[-0.02em] text-ink">
                    {band.name}
                  </span>
                  <Pill>{band.ages}</Pill>
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
                  {band.blurb}
                </p>
                <dl className="mt-4 space-y-2.5">
                  {courses.map((c) => (
                    <div key={c.key} className="flex gap-3">
                      <dt className="flex w-[86px] shrink-0 items-start gap-2 pt-px text-[12px] font-semibold text-ink">
                        <span
                          className={`mt-1.5 size-2 shrink-0 rounded-full ${accents[c.accent].rail}`}
                        />
                        {c.name}
                      </dt>
                      <dd className="text-[12.5px] leading-[1.5] text-ink-soft">
                        {c.byBand[band.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
