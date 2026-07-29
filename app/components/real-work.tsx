import { Section, SectionHeading } from "./ui";

const partners = [
  "Northwind",
  "Arclight",
  "Vector Labs",
  "Bluepeak",
  "Sundial",
  "Corewave",
  "Fathom",
  "Kitehouse",
];

const stats = [
  { value: "1,200+", label: "Projects shipped" },
  { value: "120+", label: "Partner companies" },
  { value: "92%", label: "Completion rate" },
];

const brief = [
  "A real, scoped brief from a company with a real deadline.",
  "Weekly reviews from a mentor who does this work full time.",
  "A shipped outcome you can show, explain and defend.",
];

export function RealWork() {
  return (
    <Section id="real-work">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Real industry exposure"
            title={
              <>
                Not simulations. Real
                <br className="hidden sm:block" /> work, real companies.
              </>
            }
            description="Students take on scoped briefs from industry partners and get reviewed the way a junior teammate would be — on the work, not the effort."
          />

          <dl className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[30px] font-bold tracking-[-0.03em] text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[12.5px] text-ink-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-16 items-center justify-center rounded-xl border border-line bg-white px-2 text-center text-[12.5px] font-medium text-ink-soft shadow-card"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-mist/70 p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
              What a project looks like
            </p>
            <ul className="mt-5 space-y-3.5">
              {brief.map((item, index) => (
                <li key={item} className="flex gap-3.5 text-[13.5px] leading-relaxed">
                  <span className="mt-0.5 font-display text-[12px] font-bold text-ink-muted/60">
                    0{index + 1}
                  </span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
