/* ============================================================================
 * SINGLE SOURCE OF TRUTH for every stat, price, age band and claim on the site.
 *
 * ⚠️  ITEMS MARKED `@needs-real-data` ARE PLACEHOLDERS INVENTED FOR LAYOUT.
 *     Replace them before this goes live — do not publish them as fact.
 *     Search this file for "needs-real-data" to find every one of them.
 * ========================================================================== */

export type BandKey = "junior" | "middle" | "senior";
export type CourseKey = "finance" | "ai" | "development" | "robotics";

/* ------------------------------- age bands -------------------------------- */

export const ageBands: {
  key: BandKey;
  name: string;
  ages: string;
  blurb: string;
}[] = [
  {
    key: "junior",
    name: "Junior",
    ages: "Ages 8–9",
    blurb:
      "Hands-on and visual. Drag-and-drop tools, physical kits, lots of doing and very little typing.",
  },
  {
    key: "middle",
    name: "Middle",
    ages: "Ages 10–11",
    blurb:
      "First real code and first real budgets. Kids start planning a project before they build it.",
  },
  {
    key: "senior",
    name: "Senior",
    ages: "Age 12",
    blurb:
      "Full projects, start to finish. Kids debug their own work and present it to the class.",
  },
];

/* Age → band, kept here so the form, the course table and the copy can never
 * disagree about which band a 10-year-old lands in. */
export function bandForAge(age: number): BandKey {
  if (age <= 9) return "junior";
  if (age <= 11) return "middle";
  return "senior";
}

export const trialSlots = [
  "Weekday evening (4–7pm)",
  "Weekday late (7–9pm)",
  "Saturday morning",
  "Saturday afternoon",
  "Sunday morning",
  "Sunday afternoon",
] as const;

/* ------------------------------- logistics -------------------------------- */
/* The four facts parents scan for before reading a single line of copy.
 * Fees are deliberately NOT shown on the page — they are quoted on the
 * trial call instead, so nothing here can go stale or be misread. */

export const logistics = [
  {
    label: "Schedule",
    value: "1 class / week",
    detail: "60 minutes, live online",
    icon: "clock" as const,
  },
  {
    label: "Batch size",
    value: "Max 8 kids",
    detail: "Every child gets airtime",
    icon: "users" as const,
  },
  {
    label: "Age bands",
    value: "3 levels",
    detail: "Junior, Middle and Senior",
    icon: "layers" as const,
  },
  {
    label: "Materials",
    value: "Kit included",
    detail: "Robotics kit shipped free", // @needs-real-data
    icon: "box" as const,
  },
];

/* --------------------------------- courses -------------------------------- */

export const courses: {
  key: CourseKey;
  name: string;
  tagline: string;
  ages: string;
  duration: string;
  accent: "sun" | "brand" | "navy" | "coral";
  icon: "coin" | "brain" | "code" | "robot";
  /* Concrete things the child makes — never abstract skill language. */
  builds: string[];
  /* Same subject, different ceiling per age band. */
  byBand: Record<BandKey, string>;
}[] = [
  {
    key: "finance",
    name: "Finance",
    tagline: "Money sense that sticks before the first bank account.",
    ages: "Ages 8–12",
    duration: "24 classes · 6 months",
    accent: "sun",
    icon: "coin",
    builds: [
      "Run a pretend snack stall and work out whether it actually made money",
      "Plan a ₹2,000 birthday party inside a real budget",
      "Build a savings tracker for something they want to buy",
    ],
    byBand: {
      junior: "Needs vs wants, coins and change, a one-week saving jar",
      middle: "Budget a family outing and explain where every rupee went",
      senior: "Price a small business idea and pitch it with a profit sheet",
    },
  },
  {
    key: "ai",
    name: "AI",
    tagline: "Understand the thing everyone else is just using.",
    ages: "Ages 8–12",
    duration: "24 classes · 6 months",
    accent: "brand",
    icon: "brain",
    builds: [
      "Train a model to tell their pet apart from other animals",
      "Build a chatbot that answers questions about their favourite sport",
      "Catch an AI getting something wrong — and explain why it did",
    ],
    byBand: {
      junior: "Teach a computer to sort pictures by dragging examples in",
      middle: "Train and test a classifier, then improve its accuracy",
      senior: "Build a small AI assistant and write its safety rules",
    },
  },
  {
    key: "development",
    name: "Development",
    tagline: "From an idea in their head to a link they can share.",
    ages: "Ages 8–12",
    duration: "24 classes · 6 months",
    accent: "navy",
    icon: "code",
    builds: [
      "Publish a three-screen app about something they love",
      "Code a quiz game their friends can play on a phone",
      "Build a personal website and put their own work on it",
    ],
    byBand: {
      junior: "Block-based coding: animations, sounds and a first game",
      middle: "Real JavaScript basics — variables, loops, a working app",
      senior: "Plan, build and debug a multi-screen app on their own",
    },
  },
  {
    key: "robotics",
    name: "Robotics",
    tagline: "Something they built moves across the table.",
    ages: "Ages 8–12",
    duration: "24 classes · 6 months",
    accent: "coral",
    icon: "robot",
    builds: [
      "Build a robot that follows a black line on the floor",
      "Program a rover that stops before it hits the wall",
      "Make a sensor that turns a light on when the room gets dark",
    ],
    byBand: {
      junior: "Snap-together builds with motors — no soldering, no sharp parts",
      middle: "Add sensors and write the logic that reads them",
      senior: "Design, wire and code a robot to solve a set challenge",
    },
  },
];

/* --------------------------- trust bar (under hero) ------------------------ */

export const trust = {
  /* @needs-real-data — replace with real publications or delete the row. */
  mediaLogos: ["YourStory", "Education Times", "Inc42", "The Better India"],
  points: [
    { value: "80+", label: "partner schools" }, // @needs-real-data — verify
    { value: "15,000+", label: "kids taught" }, // @needs-real-data — verify
    { value: "Max 8", label: "kids per batch" },
  ],
  safety:
    "Background-checked instructors · Every class recorded · Parents can sit in any time",
};

/* --------------------------------- rating --------------------------------- */

export const rating = {
  score: 4.8, // @needs-real-data
  count: 2140, // @needs-real-data
  /* Percentages, highest first. Must sum to 100. */
  breakdown: [
    { stars: 5, percent: 86 },
    { stars: 4, percent: 11 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ],
};

/* --------------------------- headline stats bar --------------------------- */

export const stats = [
  { value: "15,000+", label: "Kids taught" }, // @needs-real-data — verify
  { value: "80+", label: "Partner schools" }, // @needs-real-data — verify
  { value: "40+", label: "Cities" }, // @needs-real-data — verify
  { value: "92%", label: "Finish their course" }, // @needs-real-data — verify
];

/* ------------------------------ how it works ------------------------------ */

export const journey = [
  {
    step: "01",
    title: "Book a free trial class",
    body: "Pick a slot that fits around school. No card, no commitment.",
    icon: "calendar" as const,
  },
  {
    step: "02",
    title: "We match the age band",
    body: "A short chat with your child places them in Junior, Middle or Senior.",
    icon: "compass" as const,
  },
  {
    step: "03",
    title: "First class, max 8 kids",
    body: "They build something small in the first hour. You can watch.",
    icon: "users" as const,
  },
  {
    step: "04",
    title: "Progress reports every month",
    body: "What they built, what clicked, what they're still finding hard.",
    icon: "chart" as const,
  },
  {
    step: "05",
    title: "Continue or switch subjects",
    body: "Move up a band, change course, or pause. Month to month.",
    icon: "rocket" as const,
  },
];

/* ---------------------- what a class looks like (gallery) ----------------- */
/* @needs-real-data — swap `illustration` for real photo/video of your classes.
 * Until then these render as clearly-labelled illustrative placeholders.     */

export const classroomMoments: {
  caption: string;
  course: CourseKey;
  illustration: "robot" | "code" | "chart" | "brain" | "kit" | "screen";
  wide?: boolean;
}[] = [
  {
    caption: "Aarav, 9, testing whether his line-follower makes the turn.",
    course: "robotics",
    illustration: "robot",
    wide: true,
  },
  {
    caption: "A Middle band class debugging the same game together.",
    course: "development",
    illustration: "code",
  },
  {
    caption: "Snack-stall week: working out if the stall actually made a profit.",
    course: "finance",
    illustration: "chart",
  },
  {
    caption: "Training day — feeding the model its first 50 pictures.",
    course: "ai",
    illustration: "brain",
  },
  {
    caption: "The robotics kit that ships to your door before class one.",
    course: "robotics",
    illustration: "kit",
  },
  {
    caption: "Demo Friday: every kid shows what they built that month.",
    course: "development",
    illustration: "screen",
    wide: true,
  },
];

/* ------------------------------- instructors ------------------------------ */
/* @needs-real-data — real names, real photos, real employers, real teaching
 * history. Everything below is illustrative.                                 */

export const instructors = [
  {
    name: "Anika Menon",
    credential: "ML Engineer, 7 years in industry",
    teaches: "Teaches AI · Middle & Senior",
    whyKids:
      "Ran a weekend AI club for 11-year-olds for two years before joining Guided. Explains models with pictures, not maths.",
    initials: "AM",
    accent: "brand" as const,
  },
  {
    name: "Daniel Rossi",
    credential: "Backend engineer, ex-fintech",
    teaches: "Teaches Development · All bands",
    whyKids:
      "Trained in primary CS pedagogy. Starts every class with something on screen in the first ten minutes.",
    initials: "DR",
    accent: "navy" as const,
  },
  {
    name: "Riya Shah",
    credential: "Chartered Accountant, 9 years",
    teaches: "Teaches Finance · Junior & Middle",
    whyKids:
      "Built our money curriculum around games and stalls, not worksheets. Kids handle pretend cash from day one.",
    initials: "RS",
    accent: "sun" as const,
  },
  {
    name: "Marcus Cline",
    credential: "Robotics engineer, manufacturing",
    teaches: "Teaches Robotics · All bands",
    whyKids:
      "Ten years building real machines, four coaching a school FIRST Lego League team to nationals.",
    initials: "MC",
    accent: "coral" as const,
  },
];

/* ------------------------------ testimonials ------------------------------ */
/* @needs-real-data — replace with real, consented quotes. */

export const parentTestimonials = [
  {
    quote:
      "He used to give up the second something didn't work. Now he'll sit with a broken robot for forty minutes. That change is worth the fee on its own.",
    author: "Priya M.",
    detail: "Parent of Aarav, 9 · Robotics",
  },
  {
    quote:
      "She asked me what our electricity bill was, then made a spreadsheet for it. I didn't teach her that.",
    author: "Rahul S.",
    detail: "Parent of Meher, 11 · Finance",
  },
  {
    quote:
      "Eight kids in the class, so the instructor actually knows my son's name and what he's stuck on. That was the deciding factor.",
    author: "Fatima K.",
    detail: "Parent of Zain, 10 · Development",
  },
];

export const kidTestimonials = [
  {
    quote: "I made a robot that follows a line. It fell off once but I fixed it.",
    author: "Aarav",
    detail: "Age 9 · Robotics",
    initials: "A",
  },
  {
    quote: "I taught the computer to know my dog from other dogs. It got it right 9 times.",
    author: "Meher",
    detail: "Age 11 · AI",
    initials: "M",
  },
  {
    quote: "My quiz game is on my mum's phone. My friend got 4 out of 10.",
    author: "Zain",
    detail: "Age 10 · Development",
    initials: "Z",
  },
];

/* --------------------------------- schools -------------------------------- */

export const schools = {
  benefits: [
    "Finance, AI, Development and Robotics mapped to grades 3–7",
    "Runs inside your existing timetable — one period a week",
    "Instructors are working engineers and finance professionals",
    "Kits, worksheets and assessments supplied for the full year",
  ],
  process: [
    "A 30-minute call to understand your grades and calendar",
    "We map the four subjects to your year plan and age bands",
    "Pilot runs for one term with two sections, fully supported",
    "Review the outcome report together, then scale year-wide",
  ],
};

/* --------------------------------- footer --------------------------------- */

export const footerNav = [
  {
    title: "Courses",
    links: [
      { label: "Finance for kids", href: "#courses" },
      { label: "AI for kids", href: "#courses" },
      { label: "Development for kids", href: "#courses" },
      { label: "Robotics for kids", href: "#courses" },
    ],
  },
  {
    title: "By age",
    links: [
      { label: "Classes for ages 8–9", href: "#courses" },
      { label: "Classes for ages 10–11", href: "#courses" },
      { label: "Classes for age 12", href: "#courses" },
      { label: "Compare age bands", href: "#courses" },
    ],
  },
  {
    title: "For parents",
    links: [
      { label: "Book a free trial", href: "#contact" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Inside a class", href: "#classroom" },
      { label: "Fees & batches", href: "#courses" },
    ],
  },
  {
    title: "Guided",
    links: [
      { label: "Our instructors", href: "#instructors" },
      { label: "For schools", href: "#for-schools" },
      { label: "Safety & policy", href: "#" },
      { label: "Contact us", href: "#contact" },
    ],
  },
];
