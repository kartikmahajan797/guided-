"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/* External browser state, so it belongs in useSyncExternalStore rather than
 * a useState/useEffect pair — that version set state during the effect and
 * caused a cascading render on every mount. Server snapshot is `false`:
 * markup is identical either way, only the transition differs. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

/* Fires once when the element enters view. Once-only is deliberate: elements
 * that re-animate every time you scroll past them feel like a demo, not a
 * product. */
function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      /* Deferred rather than set inline, so this never fires synchronously
         inside the effect body. */
      const t = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    io.observe(el);

    /* Safety net. Anything starting at opacity 0 must have a guaranteed path
       back to visible — if the observer never fires (odd viewports, embedded
       frames, prerender tooling), the content would be lost for good. */
    const failsafe = setTimeout(() => {
      setInView(true);
      io.disconnect();
    }, 2500);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, [rootMargin]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: ReactNode;
  /* ms — use small increments (60–90) to stagger siblings */
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const on = inView || reduced;

  return (
    <div
      ref={ref}
      data-reveal={on ? "shown" : "pending"}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "none" : `translate3d(0, ${y}px, 0)`,
        transition: reduced
          ? undefined
          : `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: on ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* Counts a stat up when it scrolls into view. Parses the trailing symbols off
 * the string ("15,000+", "92%") so the data file stays human-readable. */
export function CountUp({
  value,
  className = "",
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);

  const digits = value.replace(/[^0-9]/g, "");
  const target = Number(digits || 0);
  const prefix = value.slice(0, value.search(/[0-9]/) === -1 ? 0 : value.search(/[0-9]/));
  const suffix = value.slice(value.lastIndexOf(digits.slice(-1)) + 1);

  useEffect(() => {
    if (!inView || reduced || !target) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      /* easeOutExpo — fast start, long settle, so the final digits land softly */
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, target, duration]);

  const shown = reduced || !target ? target : n;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* Seamless logo marquee. Duplicates the row and translates by exactly -50%,
 * so the loop has no visible seam. Pauses on hover and for reduced motion. */
export function Marquee({
  children,
  className = "",
  speed = 32,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div
      className={`group/marquee relative overflow-hidden ${className}`}
      style={
        {
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        } as CSSProperties
      }
    >
      <div
        className="flex w-max animate-marquee items-center group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
