import Link from "next/link";
import { Button, Container } from "./ui";
import { Logo } from "./icons";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Programs", href: "#programs" },
  { label: "Courses", href: "#courses" },
  { label: "Mentors", href: "#mentors" },
  { label: "For schools", href: "#for-schools" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-white">
              <Logo />
            </span>
            <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">
              Guided
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="#contact"
              className="hidden text-[13.5px] font-medium text-ink transition-opacity hover:opacity-70 sm:block"
            >
              Book a consultation
            </Link>
            <Button href="#contact" className="px-5 py-2 text-[13.5px]">
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
