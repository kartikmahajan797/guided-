import { Container, SectionHeading } from "./ui";

const mentors = [
  {
    name: "Anika Menon",
    role: "Senior ML Engineer, Corewave",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2.6&w=640&h=800&q=80",
  },
  {
    name: "Daniel Rossi",
    role: "VP Engineering, Northwind Capital",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2.6&w=640&h=800&q=80",
  },
  {
    name: "Riya Shah",
    role: "Lead Product Designer, Arclight",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=2.6&w=640&h=800&q=80",
  },
  {
    name: "Marcus Cline",
    role: "Staff Data Scientist, Sundial",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2.6&w=640&h=800&q=80",
  },
];

export function Mentors() {
  return (
    <section
      id="mentors"
      className="relative overflow-hidden bg-linear-to-br from-navy-900 via-navy-950 to-navy-900 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 size-[500px] rounded-full bg-navy-700/40 blur-[130px]"
      />

      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Meet the mentors"
          title={
            <>
              People who built the things
              <br className="hidden sm:block" /> you want to build.
            </>
          }
          description="Every Guided mentor is currently working in industry — not a career coach, not a lecturer, not someone who left the field a decade ago."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <figure
              key={mentor.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="px-5 py-5">
                <p className="font-display text-[15px] font-bold tracking-[-0.02em] text-white">
                  {mentor.name}
                </p>
                <p className="mt-1 text-[12.5px] text-white/55">{mentor.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
