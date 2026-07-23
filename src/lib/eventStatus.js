// If an event has a proper endDate (YYYY-MM-DD), status is derived
// automatically by comparing it to today - no one has to remember to flip
// it. Events without a usable endDate (e.g. only "2025 - 2026" is known)
// fall back to whatever status was manually set.
export const resolveEventStatus = (event) => {
  if (event.endDate) {
    const end = new Date(`${event.endDate}T23:59:59`);
    if (!Number.isNaN(end.getTime())) {
      return end.getTime() < Date.now() ? "past" : "upcoming";
    }
  }
  return event.status || "upcoming";
};
