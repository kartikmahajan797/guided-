"use server";

import { courses, trialSlots } from "../data/site";
import type { BookingState } from "./booking-types";

const COURSE_KEYS = courses.map((c) => c.key) as string[];
const SLOTS = trialSlots as readonly string[];

/* Indian mobile numbers: 10 digits starting 6–9, tolerating +91 / 0 prefixes
 * and any spacing or dashes the parent happens to type. */
function normalisePhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  const local = digits.replace(/^(91|0)/, "");
  return /^[6-9]\d{9}$/.test(local) ? `+91${local}` : null;
}

function str(data: FormData, key: string) {
  const v = data.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function bookTrial(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  /* Honeypot — a real parent never fills a field they cannot see. */
  if (str(formData, "company")) {
    return { status: "success", errors: {} };
  }

  const audience = str(formData, "audience") === "school" ? "school" : "parent";
  const name = str(formData, "name");
  const email = str(formData, "email");
  const phoneRaw = str(formData, "phone");
  const course = str(formData, "course");
  const slot = str(formData, "slot");
  const childAge = str(formData, "childAge");
  const org = str(formData, "org");
  const notes = str(formData, "notes");

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Please enter a valid email address.";

  const phone = normalisePhone(phoneRaw);
  if (!phone) errors.phone = "Enter a 10-digit mobile number.";

  if (audience === "parent") {
    const age = Number(childAge);
    if (!Number.isInteger(age) || age < 8 || age > 12)
      errors.childAge = "Guided is for children aged 8 to 12.";
    if (!COURSE_KEYS.includes(course))
      errors.course = "Pick the course you'd like to try.";
    if (slot && !SLOTS.includes(slot)) errors.slot = "Pick a valid time slot.";
  } else {
    if (org.length < 2) errors.org = "Please enter your school's name.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      message: "Please check the highlighted fields.",
    };
  }

  /* ==========================================================================
   * INTEGRATION POINT — nothing is delivered anywhere yet.
   *
   * This validates and returns success, but the enquiry only reaches the
   * server log. Before launch, replace this block with one of:
   *   • a POST to your CRM (HubSpot / Zoho / LeadSquared)
   *   • a transactional email (Resend / SendGrid) to your admissions inbox
   *   • an insert into your own database
   * Whatever you choose, keep it inside this server action so the parent's
   * phone number never passes through the browser bundle.
   * ======================================================================== */
  console.info("[guided] trial enquiry", {
    audience,
    name,
    email,
    phone,
    ...(audience === "parent" ? { childAge, course, slot } : { org }),
    notes: notes || undefined,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    errors: {},
    message:
      audience === "parent"
        ? "Booked. We'll call you within one working day to confirm the slot."
        : "Thanks — our schools team will be in touch within one working day.",
  };
}
