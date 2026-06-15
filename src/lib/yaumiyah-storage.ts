// Supabase-backed storage for Yaumiyah tracker.
// Replaces previous localStorage-only implementation.
import { supabase } from "@/integrations/supabase/client";

export type ServiceEntry = {
  id: string;
  jenis: string;
  pelanggan: string;
  upah: number;
  selesai: boolean;
};

export type DayRecord = {
  date: string;
  zikirPagiChecked: string[];
  zikirPetangChecked: string[];
  zikirPagiCounters: Record<string, number>;
  zikirPetangCounters: Record<string, number>;
  hafalan: string;
  services: ServiceEntry[];
};

const PAGI = "pagi_";
const PETANG = "petang_";

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
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

export function emptyDay(date: string): DayRecord {
  return {
    date,
    zikirPagiChecked: [],
    zikirPetangChecked: [],
    zikirPagiCounters: {},
    zikirPetangCounters: {},
    hafalan: "",
    services: [],
  };
}

export function isSessionComplete(checked: string[], totalIds: string[]): boolean {
  if (!checked || checked.length === 0) return false;
  return totalIds.every((id) => checked.includes(id));
}

function parseServiceContent(id: string, content: string): ServiceEntry {
  try {
    const o = JSON.parse(content);
    return {
      id,
      jenis: o.jenis ?? "",
      pelanggan: o.pelanggan ?? "",
      upah: Number(o.upah) || 0,
      selesai: !!o.selesai,
    };
  } catch {
    return { id, jenis: "", pelanggan: "", upah: 0, selesai: false };
  }
}

export async function loadDay(userId: string, date: string): Promise<DayRecord> {
  const [dz, hf, sv] = await Promise.all([
    supabase.from("dzikir_log").select("dzikir_key, is_done, counter").eq("user_id", userId).eq("date", date),
    supabase.from("hafalan_log").select("content").eq("user_id", userId).eq("date", date).maybeSingle(),
    supabase.from("servis_log").select("id, content").eq("user_id", userId).eq("date", date).order("created_at", { ascending: true }),
  ]);
  const rec = emptyDay(date);
  rec.hafalan = hf.data?.content ?? "";
  rec.services = (sv.data ?? []).map((r) => parseServiceContent(r.id, r.content));
  for (const row of dz.data ?? []) {
    const key = row.dzikir_key;
    if (key.startsWith(PAGI)) {
      const id = key.slice(PAGI.length);
      if (row.is_done) rec.zikirPagiChecked.push(id);
      if (row.counter != null) rec.zikirPagiCounters[id] = row.counter;
    } else if (key.startsWith(PETANG)) {
      const id = key.slice(PETANG.length);
      if (row.is_done) rec.zikirPetangChecked.push(id);
      if (row.counter != null) rec.zikirPetangCounters[id] = row.counter;
    }
  }
  return rec;
}

export async function upsertDzikir(
  userId: string,
  date: string,
  session: "pagi" | "petang",
  itemId: string,
  patch: { is_done?: boolean; counter?: number | null },
) {
  const key = (session === "pagi" ? PAGI : PETANG) + itemId;
  const row: Record<string, unknown> = { user_id: userId, date, dzikir_key: key };
  if (patch.is_done !== undefined) row.is_done = patch.is_done;
  if (patch.counter !== undefined) row.counter = patch.counter;
  const { error } = await supabase
    .from("dzikir_log")
    .upsert(row as never, { onConflict: "user_id,date,dzikir_key" });
  if (error) console.error("upsertDzikir", error);
}

export async function resetDzikirSession(userId: string, date: string, session: "pagi" | "petang") {
  const prefix = session === "pagi" ? PAGI : PETANG;
  const { error } = await supabase
    .from("dzikir_log")
    .delete()
    .eq("user_id", userId)
    .eq("date", date)
    .like("dzikir_key", `${prefix}%`);
  if (error) console.error("resetDzikirSession", error);
}

export async function saveHafalan(userId: string, date: string, content: string) {
  const { error } = await supabase
    .from("hafalan_log")
    .upsert(
      { user_id: userId, date, content, updated_at: new Date().toISOString() } as never,
      { onConflict: "user_id,date" },
    );
  if (error) console.error("saveHafalan", error);
}

export async function addService(
  userId: string,
  date: string,
  entry: Omit<ServiceEntry, "id">,
): Promise<ServiceEntry | null> {
  const { data, error } = await supabase
    .from("servis_log")
    .insert({ user_id: userId, date, content: JSON.stringify(entry) } as never)
    .select("id")
    .single();
  if (error || !data) {
    console.error("addService", error);
    return null;
  }
  return { id: (data as { id: string }).id, ...entry };
}

export async function updateService(id: string, entry: Omit<ServiceEntry, "id">) {
  const { error } = await supabase
    .from("servis_log")
    .update({ content: JSON.stringify(entry) } as never)
    .eq("id", id);
  if (error) console.error("updateService", error);
}

export async function removeService(id: string) {
  const { error } = await supabase.from("servis_log").delete().eq("id", id);
  if (error) console.error("removeService", error);
}

export async function loadAllHafalan(userId: string): Promise<{ date: string; content: string }[]> {
  const { data, error } = await supabase
    .from("hafalan_log")
    .select("date, content")
    .eq("user_id", userId)
    .order("date", { ascending: false });
  if (error) {
    console.error("loadAllHafalan", error);
    return [];
  }
  return (data ?? []).filter((r) => r.content && r.content.trim().length > 0);
}

export async function computeStreakDb(
  userId: string,
  pagiIds: string[],
  petangIds: string[],
): Promise<number> {
  const start = new Date();
  start.setDate(start.getDate() - 60);
  const startStr = todayKey(start);
  const [dzRes, hfRes] = await Promise.all([
    supabase
      .from("dzikir_log")
      .select("date, dzikir_key, is_done")
      .eq("user_id", userId)
      .gte("date", startStr),
    supabase
      .from("hafalan_log")
      .select("date, content")
      .eq("user_id", userId)
      .gte("date", startStr),
  ]);
  type Entry = { pagi: Set<string>; petang: Set<string>; hafalan: string };
  const byDate = new Map<string, Entry>();
  const ensure = (d: string): Entry => {
    let e = byDate.get(d);
    if (!e) {
      e = { pagi: new Set(), petang: new Set(), hafalan: "" };
      byDate.set(d, e);
    }
    return e;
  };
  for (const r of dzRes.data ?? []) {
    if (!r.is_done) continue;
    const e = ensure(r.date);
    if (r.dzikir_key.startsWith(PAGI)) e.pagi.add(r.dzikir_key.slice(PAGI.length));
    else if (r.dzikir_key.startsWith(PETANG)) e.petang.add(r.dzikir_key.slice(PETANG.length));
  }
  for (const r of hfRes.data ?? []) ensure(r.date).hafalan = r.content ?? "";
  const complete = (d: string) => {
    const e = byDate.get(d);
    if (!e) return false;
    return (
      pagiIds.every((i) => e.pagi.has(i)) &&
      petangIds.every((i) => e.petang.has(i)) &&
      !!e.hafalan.trim()
    );
  };
  let streak = 0;
  const d = new Date();
  if (!complete(todayKey(d))) d.setDate(d.getDate() - 1);
  while (complete(todayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

// ---------- one-time localStorage → Supabase migration ----------
const MIG_KEY = "yaumiyah:migrated:v1";
const OLD_KEY = "yaumiyah:records:v1";

export async function migrateLocalIfNeeded(userId: string): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem(MIG_KEY)) return;
    const raw = localStorage.getItem(OLD_KEY);
    if (!raw) {
      localStorage.setItem(MIG_KEY, "1");
      return;
    }
    const all = JSON.parse(raw) as Record<string, {
      zikirPagiChecked?: string[];
      zikirPetangChecked?: string[];
      zikirPagiCounters?: Record<string, number>;
      zikirPetangCounters?: Record<string, number>;
      hafalan?: string;
      services?: { jenis?: string; pelanggan?: string; upah?: number; selesai?: boolean }[];
    }>;

    const dzRows: { user_id: string; date: string; dzikir_key: string; is_done: boolean; counter: number | null }[] = [];
    const hfRows: { user_id: string; date: string; content: string }[] = [];
    const svRows: { user_id: string; date: string; content: string }[] = [];

    for (const [date, rec] of Object.entries(all)) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
      const pCh = new Set(rec.zikirPagiChecked ?? []);
      const pCo = rec.zikirPagiCounters ?? {};
      const eCh = new Set(rec.zikirPetangChecked ?? []);
      const eCo = rec.zikirPetangCounters ?? {};
      const pIds = new Set<string>([...pCh, ...Object.keys(pCo)]);
      for (const id of pIds) {
        dzRows.push({
          user_id: userId,
          date,
          dzikir_key: PAGI + id,
          is_done: pCh.has(id),
          counter: pCo[id] ?? null,
        });
      }
      const eIds = new Set<string>([...eCh, ...Object.keys(eCo)]);
      for (const id of eIds) {
        dzRows.push({
          user_id: userId,
          date,
          dzikir_key: PETANG + id,
          is_done: eCh.has(id),
          counter: eCo[id] ?? null,
        });
      }
      if (rec.hafalan && rec.hafalan.trim()) {
        hfRows.push({ user_id: userId, date, content: rec.hafalan });
      }
      for (const s of rec.services ?? []) {
        svRows.push({
          user_id: userId,
          date,
          content: JSON.stringify({
            jenis: s.jenis ?? "",
            pelanggan: s.pelanggan ?? "",
            upah: Number(s.upah) || 0,
            selesai: !!s.selesai,
          }),
        });
      }
    }

    if (dzRows.length)
      await supabase.from("dzikir_log").upsert(dzRows as never, { onConflict: "user_id,date,dzikir_key" });
    if (hfRows.length)
      await supabase.from("hafalan_log").upsert(hfRows as never, { onConflict: "user_id,date" });
    if (svRows.length) await supabase.from("servis_log").insert(svRows as never);

    localStorage.setItem(MIG_KEY, "1");
    localStorage.removeItem(OLD_KEY);
  } catch (e) {
    console.error("[yaumiyah] migration failed", e);
  }
}
