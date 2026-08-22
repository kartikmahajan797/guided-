import { ShieldCheck, Star } from "./icons";
import { Container } from "./ui";
import { rating, trust } from "../data/site";
import { Marquee } from "./motion";

export function TrustBar() {
  return (
    <section className="border-y border-line bg-mist/60">
      <Container>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 py-7 lg:flex-nowrap lg:justify-between lg:gap-x-6">
          {/* Rating */}
          <div className="flex shrink-0 items-center gap-3">
            <span className="flex items-center gap-0.5 text-sun-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4" />
              ))}
            </span>
            <p className="whitespace-nowrap text-[13.5px] text-ink-soft">
              <span className="font-display font-bold tracking-[-0.02em] text-ink tnum">
                {rating.score}
              </span>{" "}
              from {rating.count.toLocaleString("en-IN")} parent reviews
            </p>
          </div>

          {/* Scale */}
          <dl className="flex flex-wrap items-center gap-x-7 gap-y-3 lg:flex-nowrap">
            {trust.points.map((point) => (
              <div key={point.label} className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap">
                <dt className="sr-only">{point.label}</dt>
                <dd className="font-display text-[17px] font-bold tracking-[-0.03em] text-ink tnum">
                  {point.value}
                </dd>
                <span className="text-[13px] text-ink-muted">{point.label}</span>
              </div>
            ))}
          </dl>

          {/* Media — set in the display face at low contrast so it reads as a
              logo wall rather than four more links competing for attention. */}
          <div className="flex min-w-0 items-center gap-4 lg:max-w-[420px]">
            <span className="shrink-0 whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              As seen in
            </span>
            {/* Scrolls rather than wraps, so adding a fifth publication later
                never breaks the row. Pauses on hover. */}
            <Marquee className="min-w-0 grow" speed={26}>
              {trust.mediaLogos.map((logo) => (
                <span
                  key={logo}
                  className="whitespace-nowrap px-4 font-display text-[13.5px] font-semibold tracking-[-0.02em] text-ink/45 transition-colors hover:text-ink/70"
                >
                  {logo}
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        {/* The single most reassuring sentence on the page. */}
        <div className="flex items-start gap-2.5 border-t border-line py-4 sm:items-center">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-600 sm:mt-0" />
          <p className="text-[13px] leading-relaxed text-ink-soft">
            {trust.safety}
          </p>
        </div>
      </Container>
    </section>
  );
}
