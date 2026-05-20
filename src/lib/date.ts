export function localTodayISO(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function isYesterday(maybeYesterday: string, today: string): boolean {
  const t = new Date(`${today}T00:00:00`);
  const prior = new Date(t.getTime() - 24 * 60 * 60 * 1000);
  return localTodayISO(prior) === maybeYesterday;
}
