// localStorage helpers for Yaumiyah tracker

export type DayRecord = {
  date: string; // YYYY-MM-DD
  zikirPagi?: string | null; // ISO timestamp or null
  zikirPetang?: string | null;
  hafalan?: string; // free text
};

const KEY = "yaumiyah:records:v1";

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function loadAll(): Record<string, DayRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveAll(records: Record<string, DayRecord>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(records));
}

export function getDay(date: string): DayRecord {
  const all = loadAll();
  return all[date] ?? { date };
}

export function updateDay(date: string, patch: Partial<DayRecord>): DayRecord {
  const all = loadAll();
  const next = { ...(all[date] ?? { date }), ...patch, date };
  all[date] = next;
  saveAll(all);
  return next;
}

export function computeStreak(records: Record<string, DayRecord>): number {
  let streak = 0;
  const d = new Date();
  // If today not yet complete, start from yesterday
  const todayRec = records[todayKey(d)];
  const isComplete = (r?: DayRecord) =>
    !!r && !!r.zikirPagi && !!r.zikirPetang && !!r.hafalan && r.hafalan.trim().length > 0;
  if (!isComplete(todayRec)) {
    d.setDate(d.getDate() - 1);
  }
  while (isComplete(records[todayKey(d)])) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

export function formatTime(iso: string): string {
  try {
    return new Date(iso).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

export function formatDateID(date: string): string {
  try {
    return new Date(date + "T00:00:00").toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}
