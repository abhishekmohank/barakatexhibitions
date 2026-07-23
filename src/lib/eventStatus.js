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

// Sort key for "newest first" ordering. Prefers the exact endDate when
// available; otherwise falls back to the latest 4-digit year mentioned in
// the free-text date string (e.g. "20 Nov 2025 to 18 April 2026" -> 2026),
// treated as the end of that year so it still compares sensibly against
// events that do have an exact endDate.
export const eventSortValue = (event) => {
  if (event.endDate) {
    const end = new Date(`${event.endDate}T23:59:59`);
    if (!Number.isNaN(end.getTime())) return end.getTime();
  }
  const years = String(event.date ?? "").match(/\d{4}/g);
  if (!years) return -Infinity;
  const latestYear = Math.max(...years.map(Number));
  return new Date(`${latestYear}-12-31T23:59:59`).getTime();
};
