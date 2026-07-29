import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ---------------------------------- layout --------------------------------- */

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  tone = "white",
  className = "",
  children,
}: {
  id?: string;
  tone?: "white" | "mist" | "navy";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    white: "bg-white",
    mist: "bg-mist",
    navy: "bg-navy-900 text-white",
  } as const;

  return (
    <section
      id={id}
      className={`${tones[tone]} py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* --------------------------------- headings -------------------------------- */

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-brand-300" : "text-brand-600"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`heading text-[32px] leading-[1.1] sm:text-[40px] lg:text-[44px] ${
          tone === "dark" ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[15px] leading-relaxed ${
            tone === "dark" ? "text-white/65" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* --------------------------------- buttons --------------------------------- */

type ButtonVariant = "primary" | "ghost" | "brand" | "outline";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:bg-navy-800",
  ghost:
    "border border-line bg-white text-ink hover:border-ink/25 hover:bg-mist",
  brand: "bg-brand-400 text-navy-950 hover:bg-brand-300",
  outline: "border border-white/25 text-white hover:bg-white/10",
};

export function Button({
  href = "#",
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

/* ---------------------------------- cards ---------------------------------- */

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-6 shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function IconChip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "brand" | "dark";
}) {
  const tones = {
    light: "bg-mist text-ink",
    brand: "bg-brand-400/15 text-brand-600",
    dark: "bg-white/10 text-brand-300",
  } as const;

  return (
    <span
      className={`inline-flex size-10 items-center justify-center rounded-xl ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* --------------------------------- lists ----------------------------------- */

export function CheckList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] leading-snug">
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className={`mt-0.5 size-4 shrink-0 ${
              tone === "dark" ? "text-brand-300" : "text-brand-500"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m4 10.5 4 4 8-9" />
          </svg>
          <span className={tone === "dark" ? "text-white/75" : "text-ink-soft"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
