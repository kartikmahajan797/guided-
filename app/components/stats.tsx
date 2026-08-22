import { Container } from "./ui";
import { stats } from "../data/site";
import { CountUp, Reveal } from "./motion";

export function Stats() {
  return (
    <section className="bg-paper pb-4">
      <Container>
        <div className="rounded-3xl border border-line bg-mist/70 px-7 py-10 sm:px-12 sm:py-12">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="text-center sm:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <CountUp
                    value={stat.value}
                    className="block font-display text-[34px] font-bold leading-none tracking-[-0.04em] text-ink tnum sm:text-[40px]"
                  />
                  <span className="mt-2.5 block text-[12.5px] leading-snug text-ink-muted">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
