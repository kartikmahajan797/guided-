import Link from "next/link";
import { Logo, ShieldCheck } from "./icons";
import { Container } from "./ui";
import { footerNav } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-[10px] bg-ink text-paper">
                <Logo className="size-[18px]" />
              </span>
              <span className="font-display text-[17.5px] font-bold tracking-[-0.03em] text-ink">
                Guided
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[13.5px] leading-[1.65] text-ink-soft">
              Live Finance, AI, Development and Robotics classes for 8–12 year
              olds. Eight kids per class, taught by working professionals.
            </p>
            <p className="mt-5 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
              <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-brand-600" />
              Background-checked instructors. Every class recorded.
            </p>
          </div>

          {/* Grouped by course and by age band — the two ways a parent
              searches, and the two ways they scan a footer. */}
          {footerNav.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] leading-snug text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-ink-muted">
            © {new Date().getFullYear()} Guided. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Privacy", "Terms", "Safeguarding"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12.5px] text-ink-muted transition-colors hover:text-ink"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
