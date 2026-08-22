import { Classroom } from "./components/classroom";
import { CallToAction } from "./components/cta";
import { Courses } from "./components/courses";
import { ForSchools } from "./components/for-schools";
import { Hero } from "./components/hero";
import { Instructors } from "./components/instructors";
import { Journey } from "./components/journey";
import { Problem } from "./components/problem";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";
import { TrustBar } from "./components/trust-bar";

/* Order is the argument, in the sequence a parent actually makes it:
 *   can I trust you → what do you teach and what does it cost → what happens
 *   if I book → what will the hour look like → why this age at all → who
 *   stands in front of my child → does it work for other families → could my
 *   school do this → book.
 *
 * The old "Two ways to join" section was cut: it re-pitched the school offer
 * that `ForSchools` already makes in full, and re-listed the parent benefits
 * already covered by the logistics row. */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Courses />
        <Journey />
        <Classroom />
        <Problem />
        <Instructors />
        <Testimonials />
        <Stats />
        <ForSchools />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
