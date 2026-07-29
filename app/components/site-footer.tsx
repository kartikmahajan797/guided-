import Link from "next/link";
import { Logo } from "./icons";
import { Container } from "./ui";

const columns = [
  {
    title: "Platform",
    links: ["How it works", "Programs", "Courses", "Mentors"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["For schools", "For parents", "Student stories", "Help centre"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-white">
                <Logo />
              </span>
              <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">
                Guided
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-ink-soft">
              Mentorship, live projects and industry-built courses that get
              students ready for real work.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-[12.5px] font-semibold text-ink">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-ink-muted">
            © {new Date().getFullYear()} Guided. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
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
