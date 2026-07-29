import { Button, Container } from "./ui";
import { ArrowRight, Briefcase, Sparkle, Users } from "./icons";

const avatars = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-white to-mist">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-[620px] rounded-full bg-brand-400/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 size-[460px] rounded-full bg-navy-700/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:py-24">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium text-ink-soft">
              <Sparkle className="size-3.5 text-brand-500" />
              Mentorship, live projects and industry-built courses
            </span>

            <h1 className="heading mt-6 text-[44px] leading-[1.03] sm:text-[56px] lg:text-[64px]">
              Guided by
              <br />
              experts.
              <br />
              Ready for{" "}
              <span className="bg-linear-to-r from-navy-700 to-brand-500 bg-clip-text text-transparent">
                industry.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">
              Guided connects students with real industry professionals for
              mentorship, live projects and skills that actually matter once the
              classroom ends.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#programs">
                Start as a student
                <ArrowRight className="size-4" />
              </Button>
              <Button href="#for-schools" variant="ghost">
                Partner your school
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {avatars.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="size-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-[13px] leading-snug text-ink-muted">
                15,000+ students mentored across 80+ partner schools
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-float">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="A mentor reviewing a student's project on a laptop"
                className="h-[300px] w-full object-cover sm:h-[380px]"
              />
            </div>

            <FloatCard
              className="-right-2 -top-6 sm:right-2"
              icon={<Users className="size-4" />}
              title="Verified mentors"
              caption="From 120+ companies"
            />
            <FloatCard
              className="-bottom-8 -left-2 sm:left-4"
              icon={<Briefcase className="size-4" />}
              title="1,200+"
              caption="Live projects shipped"
              tone="brand"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatCard({
  icon,
  title,
  caption,
  className = "",
  tone = "ink",
}: {
  icon: React.ReactNode;
  title: string;
  caption: string;
  className?: string;
  tone?: "ink" | "brand";
}) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-float backdrop-blur-sm ${className}`}
    >
      <span
        className={`flex size-9 items-center justify-center rounded-xl ${
          tone === "brand"
            ? "bg-brand-400/15 text-brand-600"
            : "bg-ink text-white"
        }`}
      >
        {icon}
      </span>
      <span className="block">
        <span className="block font-display text-[14px] font-bold text-ink">
          {title}
        </span>
        <span className="block text-[11.5px] text-ink-muted">{caption}</span>
      </span>
    </div>
  );
}
