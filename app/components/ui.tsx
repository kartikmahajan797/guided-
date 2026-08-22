import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ---------------------------------------------------------------- layout -- */

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* Section rhythm is deliberate: `lg` for the three sections that carry the
 * sale (courses, class, reviews), `md` for supporting ones. Uniform padding
 * on every section is what makes a long page feel like a list rather than a
 * argument. */
export function Section({
  id,
  tone = "paper",
  size = "md",
  className = "",
  children,
}: {
  id?: string;
  tone?: "paper" | "mist" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    paper: "bg-paper",
    mist: "bg-mist",
    navy: "bg-navy-900 text-white",
  } as const;

  const sizes = {
    sm: "py-16 sm:py-20",
    md: "py-20 sm:py-24 lg:py-28",
    lg: "py-24 sm:py-28 lg:py-36",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} ${sizes[size]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* -------------------------------------------------------------- headings -- */

export function Eyebrow({
  children,
  tone = "light",
  accent = "brand",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  accent?: "brand" | "sun" | "coral";
}) {
  const dot = {
    brand: "bg-brand-500",
    sun: "bg-sun-500",
    coral: "bg-coral-500",
  }[accent];

  return (
    <p
      className={`mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-white/55" : "text-ink-muted"
      }`}
    >
      <span className={`h-px w-6 ${dot} opacity-70`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowAccent,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  eyebrowAccent?: "brand" | "sun" | "coral";
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-[46rem] text-center" : "max-w-[42rem]"} ${className}`}
    >
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={tone} accent={eyebrowAccent}>
            {eyebrow}
          </Eyebrow>
        </div>
      ) : null}
      <h2
        className={`heading text-[30px] leading-[1.08] sm:text-[38px] lg:text-[46px] ${
          tone === "dark" ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[15.5px] leading-[1.65] text-pretty ${
            tone === "dark" ? "text-white/65" : "text-ink-soft"
          } ${align === "center" ? "mx-auto max-w-[38rem]" : "max-w-[36rem]"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* --------------------------------------------------------------- buttons -- */

type ButtonVariant = "primary" | "ghost" | "brand" | "outline";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper shadow-[0_1px_2px_rgba(10,23,41,0.3),0_8px_20px_-8px_rgba(10,23,41,0.5)] hover:bg-navy-800 hover:shadow-[0_2px_4px_rgba(10,23,41,0.3),0_14px_28px_-10px_rgba(10,23,41,0.55)]",
  ghost:
    "border border-line-strong bg-paper text-ink hover:border-ink/30 hover:bg-white",
  brand:
    "bg-brand-400 text-navy-950 shadow-[0_1px_2px_rgba(13,148,136,0.35),0_10px_24px_-10px_rgba(13,148,136,0.6)] hover:bg-brand-300",
  outline: "border border-white/25 text-white hover:border-white/45 hover:bg-white/10",
};

/* `group/btn` + the arrow's `group-hover/btn:translate-x` in callers gives
 * every CTA the same small forward nudge — cheap, but it is the difference
 * between a link and a button that feels built. */
export function Button({
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: {
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const sizes = {
    sm: "px-4.5 py-2.5 text-[13px]",
    md: "px-6 py-3.5 text-[14.5px]",
  } as const;

  return (
    <Link
      href={href}
      className={`group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985] ${sizes[size]} ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

/* ----------------------------------------------------------------- cards -- */

export function Card({
  className = "",
  hover = true,
  children,
}: {
  className?: string;
  hover?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-6 shadow-card ${
        hover
          ? "card-lift hover:-translate-y-[3px] hover:border-line-strong hover:shadow-lift"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

const chipTones = {
  light: "bg-mist text-ink ring-line",
  brand: "bg-brand-500/10 text-brand-700 ring-brand-500/20",
  sun: "bg-sun-500/12 text-sun-600 ring-sun-500/25",
  coral: "bg-coral-500/10 text-coral-600 ring-coral-500/20",
  dark: "bg-white/10 text-brand-300 ring-white/15",
} as const;

export function IconChip({
  children,
  tone = "light",
  size = "md",
}: {
  children: ReactNode;
  tone?: keyof typeof chipTones;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl ring-1 ring-inset ${
        size === "sm" ? "size-9" : "size-11"
      } ${chipTones[tone]}`}
    >
      {children}
    </span>
  );
}

/* Small capsule for ages, durations, bands. */
export function Pill({
  children,
  tone = "line",
}: {
  children: ReactNode;
  tone?: "line" | "solid";
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11.5px] font-medium ${
        tone === "solid"
          ? "bg-ink text-paper"
          : "border border-line-strong bg-paper text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- lists -- */

export function CheckList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14.5px] leading-[1.55]">
          <span
            className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full ${
              tone === "dark" ? "bg-brand-400/20" : "bg-brand-500/12"
            }`}
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden
              className={`size-3 ${tone === "dark" ? "text-brand-300" : "text-brand-600"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4 10.5 4 4 8-9" />
            </svg>
          </span>
          <span className={tone === "dark" ? "text-white/75" : "text-ink-soft"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
