import { ArrowRight, Box, Clock, ShieldCheck, Star, Users } from "./icons";
import { KID_FACES, ADULT_FACES, Portrait } from "./people";
import { Button, Container } from "./ui";
import { rating } from "../data/site";

/* Four facts a parent needs before they will read anything else. */
const chips = [
  { icon: <Clock className="size-3.5" />, label: "60 min, once a week" },
  { icon: <Users className="size-3.5" />, label: "Max 8 kids per class" },
  { icon: <Box className="size-3.5" />, label: "Robotics kit included" },
  { icon: <ShieldCheck className="size-3.5" />, label: "Parents can sit in" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-paper via-paper to-mist">
      {/* Warm light from the top-right, cool from the left. Two soft sources
          give the flat ground some depth without any visible gradient band. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-10%] size-[680px] animate-aurora rounded-full bg-sun-300/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-32 size-[520px] animate-aurora-alt rounded-full bg-brand-400/18 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.06fr_1fr] lg:gap-14 lg:pb-28 lg:pt-16">
          {/* ------------------------------------------------------ copy -- */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper/80 py-1.5 pl-2 pr-3.5 text-[12.5px] font-medium text-ink-soft backdrop-blur-sm">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-coral-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-coral-500" />
              </span>
              Live online classes for ages 8–12
            </span>

            <h1 className="heading mt-7 text-[38px] leading-[1.05] sm:text-[50px] lg:text-[55px]">
              Finance, AI, Coding and Robotics — for kids who&apos;d rather{" "}
              <span className="relative inline-block">
                <span className="relative z-10">build</span>
                {/* One hand-drawn stroke, one colour. A three-colour gradient
                    across a headline reads as a template; a single deliberate
                    mark reads as a decision. */}
                <svg
                  aria-hidden
                  viewBox="0 0 200 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-0.5 left-0 z-0 h-[0.3em] w-full text-sun-400"
                >
                  <path
                    d="M3 12.5c38-6 62-8 96-7.5s58 3.5 98 6"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                  />
                </svg>
              </span>{" "}
              than watch.
            </h1>

            <p className="mt-7 max-w-[34rem] text-[16.5px] leading-[1.65] text-ink-soft text-pretty">
              One hour a week, in a class of no more than eight, taught by
              working engineers and finance professionals. Your child walks out
              of the first class with something they made themselves.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="#contact">
                Book a free trial class
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Button>
              <Button href="#courses" variant="ghost">
                See the 4 courses
              </Button>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-line pt-7 sm:grid-cols-2">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="flex items-center gap-2.5 text-[13.5px] text-ink-soft"
                >
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                    {chip.icon}
                  </span>
                  {chip.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------- visual --
              Built as real markup rather than one flat SVG so each child's
              tile can animate in on its own — and so the batch cap is shown
              by counting eight faces, not by asserting it in copy. */}
          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-[24px] border border-line bg-white p-2.5 shadow-float">
              {/* call chrome */}
              <div className="flex items-center gap-2.5 rounded-t-[16px] bg-navy-900 px-4 py-2.5">
                <span className="flex items-center gap-1.5 rounded-full bg-coral-500/90 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-white">
                  <span className="size-1.5 animate-blip rounded-full bg-white" />
                  Live
                </span>
                <span className="text-[11.5px] font-medium text-white/75">
                  Robotics · Middle band
                </span>
                <span className="ml-auto flex items-center gap-1 text-[11px] text-white/50">
                  <Users className="size-3.5" />8
                </span>
              </div>

              {/* the eight kids */}
              <div className="grid grid-cols-4 gap-1.5 bg-mist/70 p-1.5">
                {KID_FACES.map((face, i) => (
                  <div
                    key={i}
                    className={`relative aspect-square overflow-hidden rounded-[10px] bg-white ${
                      i === 2 ? "ring-2 ring-brand-400" : "ring-1 ring-line"
                    }`}
                    style={{
                      animation: `tile-in 0.6s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.07}s both`,
                    }}
                  >
                    <Portrait p={face} className="size-full" />
                    {i === 2 ? (
                      <span className="absolute inset-x-1 bottom-1 rounded bg-brand-500/90 py-0.5 text-center text-[8px] font-bold uppercase tracking-[0.08em] text-white">
                        Speaking
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              {/* instructor strip */}
              <div className="flex items-center gap-3 rounded-b-[16px] border-t border-line bg-white px-4 py-3">
                <span className="inline-flex size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                  <Portrait p={ADULT_FACES[0]} className="size-full" />
                </span>
                <span className="block leading-tight">
                  <span className="block text-[12.5px] font-semibold text-ink">
                    Your instructor
                  </span>
                  <span className="block text-[11px] text-ink-muted">
                    Robotics engineer · police-verified
                  </span>
                </span>
                <span className="ml-auto rounded-full bg-ink/60 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-white">
                  Illustration
                </span>
              </div>
            </div>

            {/* One card breaks the frame — the only place on the page that
                layers. A second one here duplicated the verification line the
                instructor strip already carries. */}
            <div className="mt-4 sm:mt-0 sm:block">
              <div className="flex animate-float items-center gap-2.5 rounded-2xl border border-line bg-paper/95 px-4 py-2.5 shadow-lift backdrop-blur-sm sm:absolute sm:-top-6 sm:right-0">
                <span className="flex items-center gap-0.5 text-sun-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-3.5" />
                  ))}
                </span>
                <span className="text-[12.5px] font-semibold text-ink tnum">
                  {rating.score}
                  <span className="ml-1 font-normal text-ink-muted">
                    · {rating.count.toLocaleString("en-IN")} parents
                  </span>
                </span>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
