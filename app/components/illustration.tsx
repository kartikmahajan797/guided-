/* ============================================================================
 * Illustrative placeholders standing in for real classroom media.
 *
 * Design rule: we draw THE ARTEFACT THE CHILD MAKES — a working editor, a
 * budget sheet, a training run, a wired robot — never a cartoon child. Crude
 * figure drawing is what makes kids' ed-tech look like a toy; precise
 * schematics of real work look like a serious school. Every scene shares one
 * stroke weight, one corner radius language and one shadow, so the set reads
 * as a system rather than a pile of clipart.
 *
 * Replace <ClassIllustration /> with <img>/<video> once real media exists.
 * ========================================================================== */

export type Scene =
  | "robot"
  | "code"
  | "chart"
  | "brain"
  | "kit"
  | "screen"
  | "class";

/* Palette kept literal so each SVG stays self-contained and printable. */
const C = {
  ink: "#0a1729",
  soft: "#4d5b70",
  muted: "#808ea1",
  line: "#e7e3dc",
  mist: "#f4f2ee",
  paper: "#fcfbf9",
  teal: "#0fb5a4",
  tealLt: "#5eead4",
  tealPale: "#ccfbf1",
  sun: "#f0a021",
  sunLt: "#fcd34d",
  sunPale: "#fef3c7",
  coral: "#ef4d69",
  coralLt: "#fda4af",
  coralPale: "#ffe4e6",
  navy: "#10294a",
  navyLt: "#24548c",
} as const;

/* Warm, low-contrast grounds. Each scene owns its subject's accent. */
const grounds: Record<Scene, string> = {
  robot: "from-coral-200/40 via-paper to-coral-300/20",
  code: "from-navy-700/12 via-paper to-navy-900/10",
  chart: "from-sun-200/45 via-paper to-sun-400/15",
  brain: "from-brand-200/45 via-paper to-brand-400/15",
  kit: "from-mist via-paper to-navy-700/10",
  screen: "from-brand-200/35 via-paper to-sun-200/35",
  class: "from-brand-200/35 via-paper to-sun-200/30",
};

const viewBoxes: Record<Scene, string> = {
  robot: "0 0 400 264",
  code: "0 0 400 264",
  chart: "0 0 400 264",
  brain: "0 0 400 264",
  kit: "0 0 400 264",
  screen: "0 0 400 264",
  class: "0 0 400 280",
};

export function ClassIllustration({
  scene,
  className = "",
}: {
  scene: Scene;
  className?: string;
}) {
  const uid = `il-${scene}`;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-linear-to-br ${grounds[scene]} ${className}`}
    >
      {/* Dot grid — makes the letterboxing around a centred scene read as a
          deliberate drafting ground rather than empty space. */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-ink/[0.07]"
      >
        <defs>
          <pattern
            id={`${uid}-dots`}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uid}-dots)`} />
      </svg>

      <svg
        viewBox={viewBoxes[scene]}
        preserveAspectRatio="xMidYMid meet"
        className="relative h-full w-full"
        role="img"
        aria-label={labels[scene]}
      >
        <defs>
          {/* One shared elevation filter keeps every panel sitting in the
              same imaginary light. */}
          <filter
            id={`${uid}-lift`}
            x="-25%"
            y="-25%"
            width="150%"
            height="160%"
          >
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="9"
              floodColor={C.ink}
              floodOpacity="0.13"
            />
          </filter>
          <linearGradient id={`${uid}-sheen`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor={C.mist} />
          </linearGradient>
        </defs>
        {scenes(uid)[scene]}
      </svg>
    </div>
  );
}

const labels: Record<Scene, string> = {
  robot: "Illustration of a line-following robot on its test track",
  code: "Illustration of a code editor beside the game it builds",
  chart: "Illustration of a child's budget sheet",
  brain: "Illustration of an image classifier being trained",
  kit: "Illustration of the robotics kit components",
  screen: "Illustration of a published app on a phone and laptop",
  class: "Illustration of a live Guided class with eight children",
};

/* --------------------------------- helpers -------------------------------- */

/* Refined avatar silhouette. Kept small and abstract — a head-and-shoulders
   mark, correctly proportioned, never a face. */
function Avatar({
  x,
  y,
  s = 1,
  fill,
}: {
  x: number;
  y: number;
  s?: number;
  fill: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <circle cx="0" cy="-7.5" r="5.6" />
      <path d="M-10.5 10c0-6.2 4.7-10.6 10.5-10.6S10.5 3.8 10.5 10Z" />
    </g>
  );
}

/* A window/device panel with consistent chrome across every scene. */
function Panel({
  x,
  y,
  w,
  h,
  uid,
  bar,
  r = 12,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  uid: string;
  bar?: string;
  r?: number;
  children?: React.ReactNode;
}) {
  return (
    <g filter={`url(#${uid}-lift)`}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={r}
        fill={`url(#${uid}-sheen)`}
        stroke={C.line}
        strokeWidth="1.5"
      />
      {bar ? (
        <>
          <path
            d={`M${x} ${y + r}a${r} ${r} 0 0 1 ${r}-${r}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v14H${x}Z`}
            fill={bar}
          />
          <circle cx={x + 13} cy={y + 13} r="2.6" fill="#fff" opacity="0.55" />
          <circle cx={x + 22} cy={y + 13} r="2.6" fill="#fff" opacity="0.35" />
          <circle cx={x + 31} cy={y + 13} r="2.6" fill="#fff" opacity="0.22" />
        </>
      ) : null}
      {children}
    </g>
  );
}

function Bar({
  x,
  y,
  w,
  h = 6,
  fill = C.line,
  o = 1,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  fill?: string;
  o?: number;
}) {
  return (
    <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} opacity={o} />
  );
}

/* --------------------------------- scenes --------------------------------- */

const scenes = (uid: string): Record<Scene, React.ReactNode> => ({
  /* Hero: what a live class actually is — the instructor's shared screen,
     with the eight children as a filmstrip. Sells batch size visually. */
  class: (
    <>
      <Panel x={26} y={26} w={288} h={186} uid={uid} bar={C.navy}>
        <text
          x={46}
          y={44}
          fontSize="8.5"
          fill="#fff"
          opacity="0.75"
          fontFamily="system-ui, sans-serif"
        >
          Robotics · Middle band · Class 12
        </text>
        <circle cx={296} cy={39} r="3.2" fill={C.coral} />
        {/* Shared screen: a robot being wired live */}
        <rect
          x={40}
          y={64}
          width={260}
          height={134}
          rx="8"
          fill={C.paper}
          stroke={C.line}
        />
        <rect x={52} y={76} width={110} height={110} rx="6" fill={C.mist} />
        <rect
          x={74}
          y={100}
          width={66}
          height={48}
          rx="8"
          fill="#fff"
          stroke={C.ink}
          strokeWidth="2"
        />
        <circle cx={92} cy={120} r="5" fill={C.coral} />
        <circle cx={122} cy={120} r="5" fill={C.coral} />
        <path
          d="M96 136h22"
          stroke={C.soft}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M107 100V88"
          stroke={C.ink}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx={107} cy={85} r="4" fill={C.sun} />
        <rect x={66} y={148} width={16} height={9} rx="4.5" fill={C.ink} />
        <rect x={130} y={148} width={16} height={9} rx="4.5" fill={C.ink} />
        <path
          d="M56 172h102"
          stroke={C.ink}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 11"
          opacity="0.3"
        />
        {/* Instructor's notes beside it */}
        <Bar x={176} y={82} w={54} h={7} fill={C.navyLt} o={0.85} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx={180} cy={104 + i * 19} r="3.5" fill={C.teal} />
            <Bar x={190} y={101 + i * 19} w={[92, 70, 84, 58][i]} />
          </g>
        ))}
      </Panel>

      {/* Eight children — the batch cap, shown not stated */}
      <g filter={`url(#${uid}-lift)`}>
        <rect
          x={26}
          y={224}
          width={288}
          height={40}
          rx="10"
          fill="#fff"
          stroke={C.line}
          strokeWidth="1.5"
        />
        {[C.teal, C.sun, C.navyLt, C.coral, C.tealLt, C.sunLt, C.navy, C.coralLt].map(
          (c, i) => (
            <g key={i} transform={`translate(${45 + i * 34} 232)`}>
              <rect
                x={-14}
                y={-4}
                width={28}
                height={28}
                rx="7"
                fill={C.mist}
              />
              <Avatar x={0} y={10} s={0.82} fill={c} />
            </g>
          ),
        )}
      </g>

      {/* Instructor tile, overlapping — establishes depth */}
      <g filter={`url(#${uid}-lift)`}>
        <rect
          x={302}
          y={150}
          width={72}
          height={80}
          rx="10"
          fill="#fff"
          stroke={C.line}
          strokeWidth="1.5"
        />
        <rect x={310} y={158} width={56} height={50} rx="7" fill={C.tealPale} />
        <Avatar x={338} y={192} s={1.5} fill={C.teal} />
        <Bar x={312} y={214} w={40} h={5} />
        <Bar x={312} y={223} w={26} h={5} o={0.6} />
      </g>
    </>
  ),

  /* Development: a real editor next to the thing it produces. */
  code: (
    <>
      <Panel x={18} y={40} w={236} h={186} uid={uid} bar={C.navy}>
        {/* file rail */}
        <path d="M18 54h44v158a12 12 0 0 1-12 12H30a12 12 0 0 1-12-12Z" fill={C.mist} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={27}
              y={68 + i * 17}
              width={7}
              height={7}
              rx="1.5"
              fill={i === 1 ? C.teal : C.muted}
              opacity={i === 1 ? 1 : 0.5}
            />
            <Bar x={39} y={69 + i * 17} w={[16, 14, 12, 15][i]} h={5} />
          </g>
        ))}
        {/* code */}
        {[
          { i: 8, w: 74, c: C.navyLt },
          { i: 20, w: 116, c: C.teal },
          { i: 20, w: 92, c: C.soft },
          { i: 32, w: 130, c: C.sun },
          { i: 32, w: 68, c: C.soft },
          { i: 20, w: 104, c: C.coral },
          { i: 8, w: 56, c: C.navyLt },
        ].map((l, i) => (
          <g key={i}>
            <text
              x={72}
              y={78 + i * 20}
              fontSize="7"
              fill={C.muted}
              fontFamily="ui-monospace, monospace"
            >
              {i + 1}
            </text>
            <Bar x={84 + l.i} y={72 + i * 20} w={l.w} h={6} fill={l.c} o={0.8} />
          </g>
        ))}
      </Panel>

      {/* the game it renders */}
      <Panel x={244} y={78} w={138} h={130} uid={uid} bar={C.teal} r={10}>
        <rect x={256} y={104} width={114} height={70} rx="6" fill={C.mist} />
        <circle cx={286} cy={132} r="11" fill={C.sun} />
        <path
          d="M282 130h2m6 0h2"
          stroke={C.ink}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M281 137a7 7 0 0 0 10 0"
          stroke={C.ink}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <rect x={306} y={120} width={54} height={7} rx="3.5" fill={C.coral} opacity="0.85" />
        <rect x={306} y={132} width={38} height={7} rx="3.5" fill={C.line} />
        <path
          d="M262 164h102"
          stroke={C.navyLt}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.35"
        />
        <rect x={256} y={182} width={62} height={16} rx="8" fill={C.ink} />
        <rect x={266} y={188} width={42} height={4} rx="2" fill="#fff" opacity="0.7" />
      </Panel>
    </>
  ),

  /* Finance: the child's own budget sheet, with a real total. */
  chart: (
    <>
      <Panel x={30} y={34} w={244} h={196} uid={uid} bar={C.sun}>
        <text
          x={46}
          y={66}
          fontSize="9"
          fill={C.muted}
          fontFamily="system-ui, sans-serif"
        >
          MY BIRTHDAY BUDGET
        </text>
        <text
          x={46}
          y={92}
          fontSize="27"
          fontWeight="700"
          fill={C.ink}
          fontFamily="system-ui, sans-serif"
        >
          ₹2,000
        </text>
        <rect x={46} y={104} width={212} height={9} rx="4.5" fill={C.mist} />
        <rect x={46} y={104} width={168} height={9} rx="4.5" fill={C.sun} />
        {[
          { l: "Food", w: 88, c: C.sun },
          { l: "Games", w: 62, c: C.teal },
          { l: "Decor", w: 44, c: C.coral },
          { l: "Left", w: 30, c: C.navyLt },
        ].map((row, i) => (
          <g key={i}>
            <circle cx={51} cy={137 + i * 22} r="4" fill={row.c} />
            <text
              x={62}
              y={140 + i * 22}
              fontSize="8.5"
              fill={C.soft}
              fontFamily="system-ui, sans-serif"
            >
              {row.l}
            </text>
            <rect
              x={110}
              y={133 + i * 22}
              width={row.w}
              height={8}
              rx="4"
              fill={row.c}
              opacity="0.55"
            />
            <rect x={110} y={133 + i * 22} width={148} height={8} rx="4" fill={row.c} opacity="0.1" />
          </g>
        ))}
      </Panel>

      {/* coin, as a physical object beside the sheet */}
      <g filter={`url(#${uid}-lift)`}>
        <circle cx={318} cy={96} r="30" fill={C.sunLt} stroke={C.ink} strokeWidth="2.5" />
        <circle cx={318} cy={96} r="23" fill="none" stroke={C.ink} strokeWidth="1.2" opacity="0.35" />
        <text
          x={318}
          y={106}
          fontSize="24"
          fontWeight="700"
          fill={C.ink}
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          ₹
        </text>
      </g>
      <g filter={`url(#${uid}-lift)`}>
        <rect x={286} y={152} width={64} height={54} rx="9" fill="#fff" stroke={C.line} strokeWidth="1.5" />
        <path
          d="M296 190l12-14 10 8 14-20"
          stroke={C.teal}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <Bar x={296} y={162} w={30} h={5} />
      </g>
    </>
  ),

  /* AI: examples in, model in the middle, a confidence read-out. */
  brain: (
    <>
      {/* training examples */}
      <g filter={`url(#${uid}-lift)`}>
        <rect x={22} y={62} width={92} height={140} rx="12" fill="#fff" stroke={C.line} strokeWidth="1.5" />
        <text x={34} y={80} fontSize="8" fill={C.muted} fontFamily="system-ui, sans-serif">
          EXAMPLES · 50
        </text>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${34 + (i % 2) * 38} ${90 + Math.floor(i / 2) * 38})`}>
            <rect width={32} height={32} rx="6" fill={i % 3 === 0 ? C.tealPale : C.mist} />
            <circle cx={16} cy={13} r="6" fill={C.teal} opacity={0.35 + (i % 3) * 0.22} />
            <path d="M6 26c3-6 6-9 10-9s7 3 10 9Z" fill={C.navyLt} opacity="0.3" />
          </g>
        ))}
      </g>

      {/* the model */}
      <path
        d="M120 132h26"
        stroke={C.muted}
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <path d="M140 126l7 6-7 6" stroke={C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <g filter={`url(#${uid}-lift)`}>
        <rect x={152} y={62} width={116} height={140} rx="12" fill="#fff" stroke={C.line} strokeWidth="1.5" />
        {[0, 1, 2].map((c) =>
          [0, 1, 2, 3].map((r) => {
            if (c === 1 && r === 3) return null;
            const x = 176 + c * 34;
            const y = 96 + r * 28 - (c === 1 ? 0 : 0);
            return (
              <g key={`${c}-${r}`}>
                {c < 2 &&
                  [0, 1, 2].map((t) => (
                    <path
                      key={t}
                      d={`M${x + 6} ${y}L${x + 28} ${96 + t * 28}`}
                      stroke={C.line}
                      strokeWidth="1"
                    />
                  ))}
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill={c === 1 ? C.navyLt : C.teal}
                  opacity={0.35 + r * 0.18}
                />
              </g>
            );
          }),
        )}
      </g>

      <path d="M274 132h26" stroke={C.muted} strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" />
      <path d="M294 126l7 6-7 6" stroke={C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* the answer */}
      <g filter={`url(#${uid}-lift)`}>
        <rect x={306} y={82} width={72} height={100} rx="12" fill="#fff" stroke={C.line} strokeWidth="1.5" />
        <rect x={318} y={94} width={48} height={40} rx="7" fill={C.tealPale} />
        <circle cx={342} cy={110} r="7" fill={C.teal} />
        <path d="M330 126c3-7 7-10 12-10s9 3 12 10Z" fill={C.teal} opacity="0.6" />
        <text x={318} y={150} fontSize="9" fontWeight="700" fill={C.ink} fontFamily="system-ui, sans-serif">
          My dog
        </text>
        <rect x={318} y={158} width={48} height={6} rx="3" fill={C.mist} />
        <rect x={318} y={158} width={44} height={6} rx="3" fill={C.teal} />
        <text x={318} y={176} fontSize="8" fill={C.muted} fontFamily="system-ui, sans-serif">
          92% sure
        </text>
      </g>
    </>
  ),

  /* Robotics: the line-follower mid-run, with its sensor cone drawn. */
  robot: (
    <>
      {/* the track */}
      <path
        d="M44 214c46 0 30-56 84-56s44 56 96 56 68-30 68-72"
        stroke={C.ink}
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M44 214c46 0 30-56 84-56s44 56 96 56 68-30 68-72"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 12"
        fill="none"
        opacity="0.5"
      />

      {/* sensor cone */}
      <path d="M200 150l30 44h-60Z" fill={C.coral} opacity="0.16" />

      <g filter={`url(#${uid}-lift)`}>
        {/* chassis */}
        <rect x={148} y={78} width={104} height={74} rx="16" fill="#fff" stroke={C.ink} strokeWidth="2.5" />
        <rect x={160} y={90} width={80} height={30} rx="7" fill={C.navy} />
        <circle cx={176} cy={105} r="5.5" fill={C.tealLt} />
        <circle cx={200} cy={105} r="5.5" fill={C.sunLt} />
        <circle cx={224} cy={105} r="5.5" fill={C.coralLt} />
        {/* board detail */}
        <rect x={160} y={128} width={38} height={14} rx="4" fill={C.mist} stroke={C.line} />
        <path d="M166 135h26" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" />
        <rect x={206} y={128} width={34} height={14} rx="4" fill={C.mist} stroke={C.line} />
        <circle cx={216} cy={135} r="3" fill={C.coral} />
        <circle cx={228} cy={135} r="3" fill={C.sun} />
        {/* antenna */}
        <path d="M200 78V58" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={200} cy={54} r="6" fill={C.sun} />
        {/* wheels */}
        <rect x={132} y={112} width={22} height={34} rx="10" fill={C.ink} />
        <rect x={246} y={112} width={22} height={34} rx="10" fill={C.ink} />
        <rect x={137} y={121} width={12} height={16} rx="6" fill={C.muted} opacity="0.5" />
        <rect x={251} y={121} width={12} height={16} rx="6" fill={C.muted} opacity="0.5" />
        {/* sensor pod */}
        <rect x={186} y={150} width={28} height={9} rx="4.5" fill={C.coral} />
      </g>

      {/* read-out card */}
      <g filter={`url(#${uid}-lift)`}>
        <rect x={286} y={46} width={90} height={62} rx="10" fill="#fff" stroke={C.line} strokeWidth="1.5" />
        <text x={298} y={64} fontSize="7.5" fill={C.muted} fontFamily="system-ui, sans-serif">
          LINE SENSOR
        </text>
        <path
          d="M298 92c8 0 8-16 16-16s10 16 18 16 10-12 18-12 8 8 14 8"
          stroke={C.coral}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  ),

  /* Kit: components laid out like a product shot, not a cardboard box. */
  kit: (
    <>
      <g filter={`url(#${uid}-lift)`}>
        <rect x={34} y={40} width={332} height={184} rx="16" fill="#fff" stroke={C.line} strokeWidth="1.5" />
      </g>
      {/* tray dividers */}
      <path d="M34 132h332M170 40v184M268 132v92" stroke={C.line} strokeWidth="1.5" />

      {/* controller board */}
      <rect x={60} y={66} width={84} height={44} rx="6" fill={C.navy} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={66 + i * 13} y={72} width={7} height={7} rx="1.5" fill={C.tealLt} opacity="0.7" />
      ))}
      <rect x={70} y={86} width={30} height={16} rx="3" fill={C.navyLt} />
      <circle cx={124} cy={94} r="6" fill={C.sun} />

      {/* motors + wheels */}
      <rect x={196} y={62} width={44} height={26} rx="8" fill={C.mist} stroke={C.ink} strokeWidth="2" />
      <rect x={236} y={70} width={14} height={10} rx="5" fill={C.ink} />
      <circle cx={296} cy={78} r="24" fill={C.ink} />
      <circle cx={296} cy={78} r="12" fill={C.mist} />
      <circle cx={296} cy={78} r="4" fill={C.ink} />
      <circle cx={342} cy={98} r="14" fill={C.ink} />
      <circle cx={342} cy={98} r="6" fill={C.mist} />

      {/* sensors */}
      <rect x={62} y={152} width={38} height={20} rx="5" fill={C.coral} />
      <circle cx={72} cy={162} r="4" fill="#fff" opacity="0.75" />
      <circle cx={90} cy={162} r="4" fill="#fff" opacity="0.75" />
      <rect x={112} y={152} width={38} height={20} rx="5" fill={C.teal} />
      <path d="M120 162h22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

      {/* cables */}
      <path
        d="M192 190c22-26 42 6 64-16"
        stroke={C.sun}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M192 204c24-20 40 12 64-8"
        stroke={C.coral}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M192 162h58"
        stroke={C.navyLt}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* screws / small parts */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle
          key={i}
          cx={288 + (i % 4) * 22}
          cy={158 + Math.floor(i / 4) * 26}
          r="7"
          fill={C.mist}
          stroke={C.line}
          strokeWidth="1.5"
        />
      ))}
    </>
  ),

  /* Screen: the finished thing, live on real devices. */
  screen: (
    <>
      {/* laptop */}
      <g filter={`url(#${uid}-lift)`}>
        <rect x={44} y={54} width={216} height={140} rx="12" fill="#fff" stroke={C.line} strokeWidth="1.5" />
        <path d="M44 66a12 12 0 0 1 12-12h192a12 12 0 0 1 12 12v10H44Z" fill={C.navy} />
        <circle cx={57} cy={65} r="2.6" fill="#fff" opacity="0.5" />
        <rect x={72} y={61} width={110} height={8} rx="4" fill="#fff" opacity="0.14" />
        <rect x={60} y={90} width={184} height={54} rx="8" fill={C.tealPale} />
        <circle cx={92} cy={117} r="16" fill={C.teal} opacity="0.85" />
        <path d="M86 117h12M92 111v12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <Bar x={120} y={106} w={104} h={8} fill={C.navyLt} o={0.7} />
        <Bar x={120} y={122} w={72} h={8} />
        <Bar x={60} y={158} w={60} h={7} fill={C.sun} o={0.8} />
        <Bar x={128} y={158} w={44} h={7} />
        <Bar x={180} y={158} w={64} h={7} />
        <Bar x={60} y={174} w={100} h={7} o={0.6} />
      </g>
      <path d="M28 202h248" stroke={C.line} strokeWidth="5" strokeLinecap="round" />

      {/* phone, overlapping the laptop for depth */}
      <g filter={`url(#${uid}-lift)`}>
        <rect x={268} y={84} width={86} height={148} rx="16" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <rect x={276} y={100} width={70} height={116} rx="8" fill={C.mist} />
        <rect x={298} y={90} width={26} height={4} rx="2" fill={C.line} />
        <rect x={276} y={100} width={70} height={40} rx="8" fill={C.sunPale} />
        <circle cx={296} cy={120} r="10" fill={C.sun} />
        <path d="M292 118h2m6 0h2" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M291 125a7 7 0 0 0 10 0" stroke={C.ink} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <Bar x={314} y={114} w={26} h={5} fill={C.coral} o={0.8} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={284} y={150 + i * 22} width={54} height={14} rx="7" fill={i === 0 ? C.teal : C.line} opacity={i === 0 ? 0.9 : 1} />
          </g>
        ))}
      </g>
    </>
  ),
});
