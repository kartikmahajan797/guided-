import { Quote } from "./icons";
import { Card, Section, SectionHeading } from "./ui";

const testimonials = [
  {
    quote:
      "My mentor was a backend engineer at a company I'd only read about. That changed how I studied.",
    author: "Rhea, Class 12 student",
  },
  {
    quote:
      "The first real deadline, real feedback loop my daughter had before college.",
    author: "Parent, Bengaluru",
  },
  {
    quote:
      "The easiest curriculum addition we've made. Students turned up differently after week three.",
    author: "Principal, partner school",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="mist">
      <SectionHeading
        eyebrow="What they say"
        title={
          <>
            Students, parents, and
            <br className="hidden sm:block" /> schools.
          </>
        }
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.author} className="p-7">
            <Quote className="size-5 text-brand-400" />
            <blockquote className="mt-5 text-[14.5px] leading-relaxed text-ink">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-[12.5px] text-ink-muted">— {item.author}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
