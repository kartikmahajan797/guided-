import { CallToAction } from "./components/cta";
import { Courses } from "./components/courses";
import { ForSchools } from "./components/for-schools";
import { Hero } from "./components/hero";
import { Journey } from "./components/journey";
import { Mentors } from "./components/mentors";
import { Paths } from "./components/paths";
import { Problem } from "./components/problem";
import { RealWork } from "./components/real-work";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Paths />
        <Journey />
        <Courses />
        <RealWork />
        <Mentors />
        <ForSchools />
        <Testimonials />
        <Stats />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
