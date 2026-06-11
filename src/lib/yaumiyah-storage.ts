// localStorage helpers for Yaumiyah tracker

export type ServiceEntry = {
  id: string;
  jenis: string;
  pelanggan: string;
  upah: number;
  selesai: boolean;
};

export type DayRecord = {
  date: string; // YYYY-MM-DD
  // legacy quick toggle (kept for migration); not used by new UI
  zikirPagi?: string | null;
  zikirPetang?: string | null;
  // new: checked dzikir item ids per session
  zikirPagiChecked?: string[];
  zikirPetangChecked?: string[];
  hafalan?: string;
  services?: ServiceEntry[];
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

export function isSessionComplete(
  checked: string[] | undefined,
  totalIds: string[],
): boolean {
  if (!checked || checked.length === 0) return false;
  return totalIds.every((id) => checked.includes(id));
}

export function computeStreak(
  records: Record<string, DayRecord>,
  pagiIds: string[],
  petangIds: string[],
): number {
  let streak = 0;
  const d = new Date();
  const isComplete = (r?: DayRecord) =>
    !!r &&
    isSessionComplete(r.zikirPagiChecked, pagiIds) &&
    isSessionComplete(r.zikirPetangChecked, petangIds) &&
    !!(r.hafalan && r.hafalan.trim().length > 0);
  const todayRec = records[todayKey(d)];
  if (!isComplete(todayRec)) {
    d.setDate(d.getDate() - 1);
  }
  while (isComplete(records[todayKey(d)])) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
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

export function formatRupiah(n: number): string {
  if (!Number.isFinite(n)) return "Rp 0";
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}
