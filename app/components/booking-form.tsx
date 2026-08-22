"use client";

import { useActionState, useId, useState } from "react";
import { bookTrial } from "../actions/book-trial";
import { initialBookingState } from "../actions/booking-types";
import { ageBands, bandForAge, courses, trialSlots } from "../data/site";
import { ArrowRight, Check, ShieldCheck } from "./icons";

const accentDot = {
  sun: "bg-sun-400",
  brand: "bg-brand-400",
  navy: "bg-navy-700",
  coral: "bg-coral-400",
} as const;

const inputBase =
  "w-full rounded-xl border bg-white px-3.5 py-3 text-[14.5px] text-ink placeholder:text-ink-muted/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export function BookingForm() {
  const [state, formAction, isPending] = useActionState(
    bookTrial,
    initialBookingState,
  );
  const [audience, setAudience] = useState<"parent" | "school">("parent");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const uid = useId();

  const band = age ? ageBands.find((b) => b.key === bandForAge(Number(age))) : null;

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-9 text-center shadow-card">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-500/12 text-brand-600 ring-1 ring-inset ring-brand-500/20">
          <Check className="size-7" />
        </span>
        <h3 className="heading mt-6 text-[22px]">You&apos;re booked in.</h3>
        <p className="mt-3 max-w-sm text-[14.5px] leading-[1.6] text-ink-soft">
          {state.message}
        </p>
        <p className="mt-6 border-t border-line pt-5 text-[12.5px] text-ink-muted">
          Nothing to pay, and nothing to cancel if you change your mind.
        </p>
      </div>
    );
  }

  const err = (k: string) => state.errors[k];

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      {/* Both the parent CTA and the school CTA land on this form, so it has
          to serve both without becoming two forms. */}
      <div className="flex gap-1 rounded-full bg-mist p-1">
        {(["parent", "school"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setAudience(key)}
            aria-pressed={audience === key}
            className={`flex-1 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
              audience === key
                ? "bg-white text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {key === "parent" ? "For my child" : "For my school"}
          </button>
        ))}
      </div>
      <input type="hidden" name="audience" value={audience} />

      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input id={`${uid}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          id={`${uid}-name`}
          name="name"
          autoComplete="name"
          placeholder="Priya Menon"
          error={err("name")}
        />
        <Field
          label="Mobile"
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="98765 43210"
          error={err("phone")}
          hint="We call to confirm the slot."
        />
        <div className="sm:col-span-2">
          <Field
            label="Email"
            id={`${uid}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={err("email")}
          />
        </div>

        {audience === "parent" ? (
          <>
            <div>
              <Label htmlFor={`${uid}-age`}>Child&apos;s age</Label>
              <select
                id={`${uid}-age`}
                name="childAge"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                aria-invalid={!!err("childAge")}
                className={`${inputBase} ${err("childAge") ? "border-coral-500" : "border-line-strong"}`}
              >
                <option value="">Select age</option>
                {[8, 9, 10, 11, 12].map((a) => (
                  <option key={a} value={a}>
                    {a} years old
                  </option>
                ))}
              </select>
              {/* Answers "which band is my child in" the moment they pick,
                  instead of making them scroll back to the table. */}
              {band ? (
                <p className="mt-2 text-[12.5px] text-brand-700">
                  → {band.name} band ({band.ages})
                </p>
              ) : null}
              <FieldError message={err("childAge")} />
            </div>

            <div>
              <Label htmlFor={`${uid}-slot`}>Preferred slot</Label>
              <select
                id={`${uid}-slot`}
                name="slot"
                defaultValue=""
                className={`${inputBase} border-line-strong`}
              >
                <option value="">No preference</option>
                {trialSlots.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <FieldError message={err("slot")} />
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="mb-2 text-[12.5px] font-medium text-ink">
                Which course?
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {courses.map((c) => (
                  <label
                    key={c.key}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-[13.5px] transition-all duration-200 ${
                      course === c.key
                        ? "border-ink bg-ink text-paper"
                        : "border-line-strong bg-white text-ink hover:border-ink/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="course"
                      value={c.key}
                      checked={course === c.key}
                      onChange={() => setCourse(c.key)}
                      className="sr-only"
                    />
                    <span
                      className={`size-2 rounded-full ${accentDot[c.accent]}`}
                    />
                    {c.name}
                  </label>
                ))}
              </div>
              <FieldError message={err("course")} />
            </fieldset>
          </>
        ) : (
          <div className="sm:col-span-2">
            <Field
              label="School name"
              id={`${uid}-org`}
              name="org"
              autoComplete="organization"
              placeholder="Springfield International"
              error={err("org")}
              hint="Tell us the grades you're thinking about in the notes."
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <Label htmlFor={`${uid}-notes`}>
            Anything we should know?{" "}
            <span className="font-normal text-ink-muted">(optional)</span>
          </Label>
          <textarea
            id={`${uid}-notes`}
            name="notes"
            rows={3}
            placeholder="What your child is into, timings that never work, anything else."
            className={`${inputBase} resize-none border-line-strong`}
          />
        </div>
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-coral-500/30 bg-coral-500/8 px-4 py-3 text-[13px] text-coral-600"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-paper shadow-[0_1px_2px_rgba(10,23,41,0.3),0_8px_20px_-8px_rgba(10,23,41,0.5)] transition-all duration-300 hover:bg-navy-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper" />
            Sending…
          </>
        ) : (
          <>
            {audience === "parent" ? "Book the free trial class" : "Request a school demo"}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
        <ShieldCheck className="mt-px size-3.5 shrink-0 text-brand-600" />
        No card needed. We use your number only to arrange the class — never for
        marketing lists.
      </p>
    </form>
  );
}

/* ------------------------------------------------------------- primitives -- */

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-[12.5px] font-medium text-ink"
    >
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-[12px] text-coral-600">
      {message}
    </p>
  );
}

function Field({
  label,
  id,
  error,
  hint,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
  hint?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={`${inputBase} ${error ? "border-coral-500" : "border-line-strong"}`}
        {...props}
      />
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[12px] text-ink-muted">
          {hint}
        </p>
      ) : null}
      <FieldError message={error} />
    </div>
  );
}
