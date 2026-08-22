/* ============================================================================
 * Character system — the kids and parents shown across the site.
 *
 * These are illustrated portraits, not photographs. Style rules that keep
 * them from sliding into clipart: real skin-tone range, hair with actual
 * silhouette (not a helmet), soft-but-not-round faces, and a restrained
 * palette that matches the rest of the page. Kids get a larger head-to-
 * shoulder ratio than adults — that single proportion is what reads as
 * "child" without resorting to cartoon eyes.
 *
 * Swap <Portrait/> for <img> the moment consented photography exists.
 * ========================================================================== */

const SKIN = ["#f6d3b5", "#eab98e", "#d69a6c", "#b3714b", "#8a5334", "#6b3d26"];
const SKIN_SHADE = ["#e9bd98", "#dba576", "#c28455", "#9c5d3b", "#754429", "#5a3120"];
const HAIR = ["#2a1f18", "#4a3524", "#6b4a2e", "#171514", "#8a5a2b", "#c07a35", "#3d2b1f"];
const SHIRT = ["#0fb5a4", "#f0a021", "#ef4d69", "#24548c", "#5eead4", "#1a3d68"];
const BG = [
  "#ccfbf1",
  "#fef3c7",
  "#ffe4e6",
  "#dbeafe",
  "#e7e3dc",
  "#d1fae5",
  "#fde8d7",
  "#e0e7ff",
];

export type PersonSpec = {
  skin: number;
  hair: number;
  shirt: number;
  bg: number;
  style: number; // hair silhouette
  kid: boolean;
  glasses?: boolean;
};

/* Fixed casts so the same face never changes between renders or routes. */
export const KID_FACES: PersonSpec[] = [
  { skin: 2, hair: 0, shirt: 0, bg: 0, style: 3, kid: true },
  { skin: 0, hair: 5, shirt: 2, bg: 2, style: 1, kid: true },
  { skin: 4, hair: 3, shirt: 1, bg: 1, style: 2, kid: true },
  { skin: 1, hair: 1, shirt: 3, bg: 3, style: 0, kid: true },
  { skin: 3, hair: 0, shirt: 4, bg: 5, style: 5, kid: true },
  { skin: 5, hair: 3, shirt: 2, bg: 6, style: 2, kid: true },
  { skin: 0, hair: 4, shirt: 5, bg: 7, style: 4, kid: true },
  { skin: 2, hair: 2, shirt: 0, bg: 4, style: 1, kid: true },
];

export const ADULT_FACES: PersonSpec[] = [
  { skin: 3, hair: 0, shirt: 0, bg: 0, style: 3, kid: false },
  { skin: 1, hair: 1, shirt: 3, bg: 3, style: 0, kid: false, glasses: true },
  { skin: 2, hair: 3, shirt: 1, bg: 1, style: 1, kid: false },
  { skin: 4, hair: 0, shirt: 2, bg: 2, style: 4, kid: false },
  { skin: 0, hair: 5, shirt: 4, bg: 5, style: 5, kid: false },
  { skin: 5, hair: 3, shirt: 5, bg: 7, style: 2, kid: false, glasses: true },
];

export function Portrait({
  p,
  className = "",
  plain = false,
}: {
  p: PersonSpec;
  className?: string;
  /* plain = no background disc, for placing on an existing tile */
  plain?: boolean;
}) {
  const skin = SKIN[p.skin];
  const shade = SKIN_SHADE[p.skin];
  const hair = HAIR[p.hair];
  const shirt = SHIRT[p.shirt];

  /* Kids: bigger cranium, shorter neck, shoulders lower in frame. */
  const headY = p.kid ? 40 : 38;
  const rx = p.kid ? 20.5 : 18.5;
  const ry = p.kid ? 22 : 21.5;
  const shoulderY = p.kid ? 72 : 68;

  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label="Illustrated portrait"
    >
      {!plain ? <circle cx="48" cy="48" r="48" fill={BG[p.bg]} /> : null}

      {/* shoulders */}
      <path
        d={`M10 96c0-${96 - shoulderY - 4} 17-${96 - shoulderY - 10} 38-${96 - shoulderY - 10}s38 ${96 - shoulderY - 16} 38 ${96 - shoulderY - 4}Z`}
        fill={shirt}
      />
      {/* collar */}
      <path
        d={`M40 ${shoulderY - 4}q8 9 16 0`}
        fill="none"
        stroke="#000"
        strokeOpacity="0.12"
        strokeWidth="2"
      />
      {/* neck */}
      <path
        d={`M41 ${headY + ry - 8}h14v${shoulderY - headY - ry + 12}h-14Z`}
        fill={shade}
      />
      {/* ears */}
      <ellipse cx={48 - rx - 1} cy={headY + 3} rx="4" ry="5" fill={shade} />
      <ellipse cx={48 + rx + 1} cy={headY + 3} rx="4" ry="5" fill={shade} />
      {/* head */}
      <ellipse cx="48" cy={headY} rx={rx} ry={ry} fill={skin} />

      <Hair style={p.style} color={hair} headY={headY} rx={rx} ry={ry} />

      {/* eyes — offset ellipses with a highlight read as alive, dots read flat */}
      <ellipse cx={48 - 7} cy={headY + 2} rx="2.1" ry="2.7" fill="#1c1917" />
      <ellipse cx={48 + 7} cy={headY + 2} rx="2.1" ry="2.7" fill="#1c1917" />
      <circle cx={48 - 6.3} cy={headY + 1} r="0.75" fill="#fff" />
      <circle cx={48 + 7.7} cy={headY + 1} r="0.75" fill="#fff" />
      {/* brows */}
      <path
        d={`M${48 - 10.5} ${headY - 4.5}q3.5-2 7 0M${48 + 3.5} ${headY - 4.5}q3.5-2 7 0`}
        stroke={hair}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      {/* smile */}
      <path
        d={`M${48 - 5} ${headY + 10}q5 4.5 10 0`}
        stroke="#8a4b3c"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* cheeks */}
      <ellipse cx={48 - 12} cy={headY + 8} rx="3.4" ry="2.2" fill="#ef4d69" opacity="0.16" />
      <ellipse cx={48 + 12} cy={headY + 8} rx="3.4" ry="2.2" fill="#ef4d69" opacity="0.16" />

      {p.glasses ? (
        <g stroke="#1c1917" strokeWidth="1.5" fill="none" opacity="0.8">
          <circle cx={48 - 7} cy={headY + 2} r="6" />
          <circle cx={48 + 7} cy={headY + 2} r="6" />
          <path d={`M${48 - 1} ${headY + 2}h2`} />
        </g>
      ) : null}
    </svg>
  );
}

/* Hair is built from one reliable primitive — a crescent "cap" that follows
 * the skull — plus optional length, curls or puffs. Hand-tuned bezier blobs
 * per style is what produced the stray spikes in the first pass. */
function cap(cx: number, cy: number, rx: number, ry: number, lift: number) {
  const l = cx - rx - 1;
  const r = cx + rx + 1;
  const top = cy - ry - lift;
  return `M${l} ${cy + 1}C${l} ${top} ${r} ${top} ${r} ${cy + 1}C${r} ${cy - ry * 0.42} ${l} ${cy - ry * 0.42} ${l} ${cy + 1}Z`;
}

function Hair({
  style,
  color,
  headY,
  rx,
  ry,
}: {
  style: number;
  color: string;
  headY: number;
  rx: number;
  ry: number;
}) {
  const cx = 48;
  const sideY = headY + ry * 0.55;

  switch (style) {
    case 0: // short crop
      return <path d={cap(cx, headY, rx, ry, 3)} fill={color} />;

    case 1: // bob — cap plus two short side panels ending at the jaw
      return (
        <g fill={color}>
          <path d={cap(cx, headY, rx, ry, 4)} />
          <path d={`M${cx - rx - 1} ${headY - 4}q-3 ${ry * 0.9} 1 ${ry * 0.95}h5q-3-${ry * 0.5}-1-${ry * 0.95}Z`} />
          <path d={`M${cx + rx + 1} ${headY - 4}q3 ${ry * 0.9}-1 ${ry * 0.95}h-5q3-${ry * 0.5} 1-${ry * 0.95}Z`} />
        </g>
      );

    case 2: // curls
      return (
        <g fill={color}>
          <path d={cap(cx, headY, rx, ry, 1)} />
          {[-14, -6.5, 1, 8.5, 15].map((dx, i) => (
            <circle
              key={i}
              cx={cx + dx}
              cy={headY - ry + (i === 2 ? 1 : 4)}
              r="7"
            />
          ))}
          <circle cx={cx - rx - 1} cy={headY - ry * 0.35} r="6" />
          <circle cx={cx + rx + 1} cy={headY - ry * 0.35} r="6" />
        </g>
      );

    case 3: // long straight
      return (
        <g fill={color}>
          <path
            d={`M${cx - rx - 3} ${sideY + 22}V${headY - 2}q0-${ry + 6} ${rx + 3}-${ry + 6}t${rx + 3} ${ry + 6}v${ry + 24}h-6V${headY - 1}q-${rx * 0.7} 5-${rx * 1.4} 0v${ry + 25}Z`}
          />
        </g>
      );

    case 4: // buzz
      return <path d={cap(cx, headY, rx, ry, 0)} fill={color} opacity="0.95" />;

    case 5: // puffs
      return (
        <g fill={color}>
          <path d={cap(cx, headY, rx, ry, 2)} />
          <circle cx={cx - rx - 4} cy={headY - 1} r="7.5" />
          <circle cx={cx + rx + 4} cy={headY - 1} r="7.5" />
        </g>
      );

    default:
      return null;
  }
}

/* A cluster of overlapping kid portraits — used wherever the page needs to
 * say "other families are already here" without a stock photo. */
export function FaceStack({
  count = 5,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      {KID_FACES.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="-ml-2.5 inline-flex size-9 overflow-hidden rounded-full ring-2 ring-paper first:ml-0"
        >
          <Portrait p={p} className="size-full" />
        </span>
      ))}
    </div>
  );
}
