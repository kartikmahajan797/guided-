import { ArrowRight } from "./icons";
import { Button, Container } from "./ui";

export function CallToAction() {
  return (
    <section id="contact" className="bg-white pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-900 via-navy-950 to-navy-800 px-8 py-16 text-center shadow-float sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-400/25 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-navy-700/50 blur-[100px]"
          />

          <div className="relative">
            <h2 className="heading text-[34px] leading-tight text-white sm:text-[42px]">
              Ready to be guided?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
              Whether you&apos;re a student, a parent or a school — the next
              cohort starts soon.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="#programs" variant="brand">
                Start as a student
                <ArrowRight className="size-4" />
              </Button>
              <Button href="#for-schools" variant="outline">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
