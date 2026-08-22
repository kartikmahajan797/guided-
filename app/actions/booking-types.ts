/* Deliberately NOT a "use server" module: that directive requires every
 * export to be an async function, so the state shape and its initial value
 * have to live outside the action file. */

export type BookingState = {
  status: "idle" | "success" | "error";
  errors: Record<string, string>;
  message?: string;
};

export const initialBookingState: BookingState = { status: "idle", errors: {} };
