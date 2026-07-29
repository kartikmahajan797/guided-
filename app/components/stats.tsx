import { Container } from "./ui";

const stats = [
  { value: "15,000+", label: "Students mentored" },
  { value: "1,200+", label: "Projects shipped" },
  { value: "80+", label: "Schools partnered" },
  { value: "40+", label: "Cities covered" },
];

export function Stats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[34px] font-bold tracking-[-0.03em] text-ink sm:text-[38px]">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-[12.5px] text-ink-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
