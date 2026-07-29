import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Base>
);

export const Sparkle = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
  </Base>
);

export const Book = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 1 2-1h4.5A1.5 1.5 0 0 1 20 5.5v11a1.5 1.5 0 0 1-1.5 1.5H14a2.5 2.5 0 0 0-2 1 2.5 2.5 0 0 0-2-1H5.5A1.5 1.5 0 0 1 4 16.5v-11ZM12 5v13" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-4A3.5 3.5 0 0 0 5 17.5V19M10.5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 19v-1.5a3.5 3.5 0 0 0-2.6-3.4M15 4.8a3 3 0 0 1 0 5.6" />
  </Base>
);

export const Briefcase = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 8.5h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9ZM9 8.5v-1A1.5 1.5 0 0 1 10.5 6h3A1.5 1.5 0 0 1 15 7.5v1M4 12.5h16" />
  </Base>
);

export const Code = (p: IconProps) => (
  <Base {...p}>
    <path d="m9 8-5 4 5 4M15 8l5 4-5 4" />
  </Base>
);

export const Brain = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5.5a2.5 2.5 0 0 0-5 0A2.5 2.5 0 0 0 5 8a2.5 2.5 0 0 0 .8 4.4A2.5 2.5 0 0 0 8 16.5a2.5 2.5 0 0 0 4 1.4M12 5.5a2.5 2.5 0 0 1 5 0A2.5 2.5 0 0 1 19 8a2.5 2.5 0 0 1-.8 4.4A2.5 2.5 0 0 1 16 16.5a2.5 2.5 0 0 1-4 1.4M12 5.5v12.4" />
  </Base>
);

export const Layers = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" />
  </Base>
);

export const Chart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" />
  </Base>
);

export const Compass = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="m14.8 9.2-1.4 4.2-4.2 1.4 1.4-4.2 4.2-1.4Z" />
  </Base>
);

export const Rocket = (p: IconProps) => (
  <Base {...p}>
    <path d="M13.5 4.5c3 1 5 3.5 5.5 7-3 2.5-6 4-9 4.5l-3-3C7.5 10 9.5 6.5 13.5 4.5ZM7 16c-1.5.5-2 2-2 4 2 0 3.5-.5 4-2M12 10.5h.01" />
  </Base>
);

export const Target = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4l7 2.5v5c0 4-3 6.8-7 8.5-4-1.7-7-4.5-7-8.5v-5L12 4Zm-3 8 2 2 4-4" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 20V6l7-2v16M12 20h7V10l-7-2M8 9h1M8 12h1M8 15h1M15 12h1M15 15h1M3 20h18" />
  </Base>
);

export const Palette = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4a8 8 0 0 0 0 16c1.1 0 1.7-.8 1.7-1.6 0-.9-.7-1.4-.7-2.2 0-.8.6-1.4 1.5-1.4H16a4 4 0 0 0 4-4c0-3.9-3.6-6.8-8-6.8ZM8 11h.01M10.5 8h.01M14 8h.01" />
  </Base>
);

export const Megaphone = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 10v4a1 1 0 0 0 1 1h2l7 4V5l-7 4H5a1 1 0 0 0-1 1ZM7 15v4M18 9.5a3.5 3.5 0 0 1 0 5" />
  </Base>
);

export const Quote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-6" {...p}>
    <path d="M9.6 6C6.5 7.4 4.8 10 4.8 13.2c0 2.9 1.6 4.8 4 4.8 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.8.1.3-1.4 1.4-2.7 3-3.5L9.6 6Zm8.5 0c-3.1 1.4-4.8 4-4.8 7.2 0 2.9 1.6 4.8 4 4.8 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.8.1.3-1.4 1.4-2.7 3-3.5L18.1 6Z" />
  </svg>
);

export const Logo = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-5" {...p}>
    <path
      d="M12 3.2 20 7v6.4c0 4.2-3.2 7-8 8.4-4.8-1.4-8-4.2-8-8.4V7l8-3.8Z"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
    <path
      d="M9 12.2 11.2 14.5 15.4 10"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
