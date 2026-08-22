"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Container } from "./ui";
import { ArrowRight, Close, Logo, Menu } from "./icons";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Inside a class", href: "#classroom" },
  { label: "Instructors", href: "#instructors" },
  { label: "Reviews", href: "#testimonials" },
  { label: "For schools", href: "#for-schools" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* The header starts transparent over the hero's warm ground and only earns
     its border and shadow once you leave it. A hairline that is always there
     cuts the hero off at the knees. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || open
          ? "border-b border-line bg-paper/85 shadow-xs backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between gap-8 transition-all duration-500 ${
            scrolled ? "h-[62px]" : "h-[74px]"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex size-8 items-center justify-center rounded-[10px] bg-ink text-paper">
              <Logo className="size-[18px]" />
            </span>
            <span className="font-display text-[17.5px] font-bold tracking-[-0.03em] text-ink">
              Guided
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13.5px] font-medium text-ink-soft transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="tel:+910000000000"
              className="hidden text-[13.5px] font-medium text-ink transition-opacity hover:opacity-60 md:block"
            >
              Talk to us
            </Link>
            <Button href="#contact" size="sm" className="px-4 sm:px-4.5">
              <span className="sm:hidden">Free trial</span>
              <span className="hidden sm:inline">Book a free trial</span>
            </Button>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-xl border border-line-strong bg-paper text-ink transition-colors hover:bg-mist lg:hidden"
            >
              {open ? <Close className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-5">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 font-display text-[17px] font-bold tracking-[-0.02em] text-ink last:border-0"
              >
                {link.label}
                <ArrowRight className="size-4 text-ink-muted" />
              </Link>
            ))}
          </nav>
          <Button href="#contact" className="mt-5 w-full" onClick={() => setOpen(false)}>
            Book a free trial class
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Button>
        </Container>
      </div>
    </header>
  );
}
