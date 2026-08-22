import { Quote, Star } from "./icons";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion";
import { ADULT_FACES, KID_FACES, Portrait } from "./people";
import { kidTestimonials, parentTestimonials, rating } from "../data/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Reviews"
          eyebrowAccent="sun"
          title="What parents notice. What kids say."
          description="Two different measures of whether this worked — and they answer different questions."
        />

        {/* ------------------------------------------- rating + breakdown --
            A bare "4.8 stars" is a claim; a distribution is evidence. The
            shape of the bars is what a sceptical parent actually reads. */}
        <div className="mx-auto mt-14 grid max-w-3xl overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center justify-center border-b border-line px-8 py-7 text-center sm:border-b-0 sm:border-r sm:px-10">
            <p className="font-display text-[52px] font-bold leading-none tracking-[-0.04em] text-ink tnum">
              {rating.score}
            </p>
            <span className="mt-3 flex items-center gap-0.5 text-sun-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4" />
              ))}
            </span>
            <p className="mt-2.5 text-[12.5px] text-ink-muted">
              {rating.count.toLocaleString("en-IN")} parent reviews
            </p>
          </div>

          <dl className="space-y-2.5 px-7 py-7 sm:px-9">
            {rating.breakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-3">
                <dt className="flex w-8 shrink-0 items-center gap-1 text-[12.5px] text-ink-soft tnum">
                  {row.stars}
                  <Star className="size-3 text-ink-muted/45" />
                </dt>
                <dd className="flex grow items-center gap-3">
                  <span className="h-2 grow overflow-hidden rounded-full bg-mist">
                    <span
                      className="block h-full rounded-full bg-sun-400"
                      style={{ width: `${row.percent}%` }}
                    />
                  </span>
                  <span className="w-9 shrink-0 text-right text-[12px] text-ink-muted tnum">
                    {row.percent}%
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ------------------------------------------------------ parents --
            Parent quotes are about behaviour change — the thing they are
            actually buying. Set in the site's normal editorial voice. */}
        <div className="mt-20 flex items-center gap-4">
          <h3 className="shrink-0 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-ink">
            From parents
          </h3>
          <span aria-hidden className="h-px grow rule-fade" />
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {parentTestimonials.map((item, i) => (
            <Reveal key={item.author} delay={i * 90} className="flex">
            <figure className="card-lift flex w-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card hover:-translate-y-1 hover:shadow-lift">
              <Quote className="size-6 text-brand-400" />
              <blockquote className="mt-5 grow text-[15px] leading-[1.6] text-ink text-pretty">
                {item.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-4">
                <span className="inline-flex size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                  <Portrait p={ADULT_FACES[i % ADULT_FACES.length]} className="size-full" />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-ink">
                    {item.author}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-ink-muted">
                    {item.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>

        {/* --------------------------------------------------------- kids --
            Deliberately a different object: warm ground, rounder, bigger
            quote, no border chrome. The two voices must never blur into one
            wall of identical cards. */}
        <div className="mt-16 flex items-center gap-4">
          <h3 className="shrink-0 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-coral-600">
            From the kids
          </h3>
          <span aria-hidden className="h-px grow rule-fade" />
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {kidTestimonials.map((item, i) => (
            <Reveal key={item.author} delay={i * 90} className="flex">
            <figure className="card-lift relative w-full overflow-hidden rounded-[20px] bg-linear-to-br from-coral-200/45 via-sun-200/30 to-coral-300/25 p-7 hover:-translate-y-1">
              <blockquote className="font-display text-[17px] font-bold leading-[1.4] tracking-[-0.02em] text-ink text-pretty">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70">
                  <Portrait p={KID_FACES[i % KID_FACES.length]} className="size-full" />
                </span>
                <span className="text-[12.5px] text-ink-soft">
                  <span className="font-semibold text-ink">{item.author}</span> ·{" "}
                  {item.detail}
                </span>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
