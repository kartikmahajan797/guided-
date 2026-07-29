"use client";

import { useState, type ReactNode } from "react";
import { Brain, Chart, Code, Layers, Megaphone, Palette, Briefcase, Target } from "./icons";
import { Card, Container, IconChip, SectionHeading } from "./ui";

type Course = {
  icon: ReactNode;
  title: string;
  body: string;
  meta: string;
};

const catalogue: Record<string, Course[]> = {
  Technology: [
    {
      icon: <Code className="size-4.5" />,
      title: "Coding & Programming",
      body: "Foundations to production habits — version control, reviews, testing and shipping.",
      meta: "12 weeks",
    },
    {
      icon: <Brain className="size-4.5" />,
      title: "AI & Machine Learning",
      body: "Model intuition, prompt and data work, and how teams actually put models in front of users.",
      meta: "14 weeks",
    },
    {
      icon: <Layers className="size-4.5" />,
      title: "Web & App Development",
      body: "Build and deploy real interfaces, from first component to a live URL you can share.",
      meta: "12 weeks",
    },
    {
      icon: <Chart className="size-4.5" />,
      title: "Data Science",
      body: "Question to dataset to decision — analysis that people in a room actually act on.",
      meta: "10 weeks",
    },
  ],
  Business: [
    {
      icon: <Target className="size-4.5" />,
      title: "Product Management",
      body: "Scope a problem, write the brief, run the tradeoffs and ship something people use.",
      meta: "10 weeks",
    },
    {
      icon: <Megaphone className="size-4.5" />,
      title: "Digital Marketing",
      body: "Positioning, channels and measurement — run a real campaign on a real budget.",
      meta: "8 weeks",
    },
    {
      icon: <Briefcase className="size-4.5" />,
      title: "Finance & Analytics",
      body: "Read a business the way an analyst does: models, metrics and the story behind them.",
      meta: "10 weeks",
    },
    {
      icon: <Palette className="size-4.5" />,
      title: "Design & UX",
      body: "Research, interface craft and critique — with feedback from working product designers.",
      meta: "12 weeks",
    },
  ],
};

const tracks = Object.keys(catalogue);

export function Courses() {
  const [active, setActive] = useState(tracks[0]);

  return (
    <section id="courses" className="bg-mist py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Courses & tracks"
            title={
              <>
                Future-ready courses, taught
                <br className="hidden sm:block" /> by people already working in
                <br className="hidden sm:block" /> the field.
              </>
            }
          />

          <div className="inline-flex shrink-0 rounded-full border border-line bg-white p-1">
            {tracks.map((track) => (
              <button
                key={track}
                type="button"
                onClick={() => setActive(track)}
                className={`rounded-full px-5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  active === track
                    ? "bg-ink text-white"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {catalogue[active].map((course) => (
            <Card
              key={course.title}
              className="flex flex-col p-7 transition-shadow duration-200 hover:shadow-float"
            >
              <IconChip tone="brand">{course.icon}</IconChip>
              <h3 className="mt-6 font-display text-[16px] font-bold tracking-[-0.02em] text-ink">
                {course.title}
              </h3>
              <p className="mt-3 grow text-[13.5px] leading-relaxed text-ink-soft">
                {course.body}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="text-[12px] text-ink-muted">{course.meta}</span>
                <span className="text-[12.5px] font-medium text-brand-600">
                  Explore →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
