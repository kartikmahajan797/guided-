import { BookingForm } from "./booking-form";
import { Box, Clock, ShieldCheck, Star, Users } from "./icons";
import { Container } from "./ui";
import { rating } from "../data/site";
import { KID_FACES, Portrait } from "./people";

const reassure = [
  { icon: <Clock className="size-4" />, label: "60 minutes, live online" },
  { icon: <Users className="size-4" />, label: "Never more than 8 kids" },
  { icon: <Box className="size-4" />, label: "Kit posted before class one" },
  { icon: <ShieldCheck className="size-4" />, label: "No card, cancel anytime" },
];

export function CallToAction() {
  return (
    <section id="contact" className="bg-paper pb-20 pt-20 sm:pb-24 sm:pt-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-navy-950 p-6 shadow-float sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-28 size-96 animate-aurora rounded-full bg-brand-400/25 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 size-96 animate-aurora-alt rounded-full bg-sun-500/18 blur-[110px]"
          />
          <div
            aria-hidden
            className="grain-layer pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
          />

          {/* The pitch stays on the dark ground; the form sits on white.
              Asking a parent to type their child's details into a dark panel
              measurably costs completions. */}
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <h2 className="heading text-[30px] leading-[1.06] text-white sm:text-[40px]">
                Start with one free class.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-[1.65] text-white/60">
                Pick a slot that fits around school. We&apos;ll call to confirm,
                place your child in the right band, and you&apos;re welcome to
                watch the whole hour.
              </p>

              <ul className="mt-8 space-y-3.5">
                {reassure.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-[14px] text-white/75"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-brand-300 ring-1 ring-inset ring-white/10">
                      {item.icon}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-7">
                <div className="flex items-center">
                  {KID_FACES.slice(0, 4).map((face, i) => (
                    <span
                      key={i}
                      className="-ml-2.5 inline-flex size-9 overflow-hidden rounded-full ring-2 ring-navy-950 first:ml-0"
                    >
                      <Portrait p={face} className="size-full" />
                    </span>
                  ))}
                </div>
                <p className="text-[13px] text-white/60">
                  <span className="flex items-center gap-0.5 text-sun-400">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="size-3.5" />
                    ))}
                  </span>
                  <span className="mt-1 block">
                    {rating.score} from{" "}
                    {rating.count.toLocaleString("en-IN")} parents
                  </span>
                </p>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
