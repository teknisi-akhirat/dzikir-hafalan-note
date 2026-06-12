import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  computeStreak,
  formatDateID,
  formatRupiah,
  getDay,
  isSessionComplete,
  loadAll,
  todayKey,
  updateDay,
  type DayRecord,
  type ServiceEntry,
} from "@/lib/yaumiyah-storage";
import { DZIKIR_PAGI, DZIKIR_PETANG, type DzikirItem } from "@/lib/yaumiyah-dzikir";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yaumiyah — Ibadah Tracker" },
      { name: "description", content: "Tracker ibadah harian sederhana: zikir pagi, petang, dan hafalan." },
      { name: "theme-color", content: "#4A7C59" },
    ],
  }),
  component: Home,
});

function Home() {
  const today = todayKey();
  const [record, setRecord] = useState<DayRecord>({ date: today });
  const [streak, setStreak] = useState(0);
  const [hour, setHour] = useState(12);
  const [hafalanDraft, setHafalanDraft] = useState("");

  const pagiIds = useMemo(() => DZIKIR_PAGI.map((d) => d.id), []);
  const petangIds = useMemo(() => DZIKIR_PETANG.map((d) => d.id), []);

  useEffect(() => {
    const r = getDay(today);
    setRecord(r);
    setHafalanDraft(r.hafalan ?? "");
    setStreak(computeStreak(loadAll(), pagiIds, petangIds));
    setHour(new Date().getHours());
  }, [today, pagiIds, petangIds]);

  const isNight = hour >= 19 || hour < 4;

  const refresh = (next: DayRecord) => {
    setRecord(next);
    setStreak(computeStreak(loadAll(), pagiIds, petangIds));
  };

  const toggleItem = (session: "pagi" | "petang", id: string) => {
    const key = session === "pagi" ? "zikirPagiChecked" : "zikirPetangChecked";
    const current = record[key] ?? [];
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];
    refresh(updateDay(today, { [key]: next }));
  };

  const resetSession = (session: "pagi" | "petang") => {
    refresh(updateDay(today, session === "pagi"
      ? { zikirPagiChecked: [], zikirPagiCounters: {} }
      : { zikirPetangChecked: [], zikirPetangCounters: {} }
    ));
  };

  const incrementCounter = (session: "pagi" | "petang", id: string, target: number) => {
    const currentCounters = session === "pagi"
      ? (record.zikirPagiCounters ?? {})
      : (record.zikirPetangCounters ?? {});
    const currentChecked = session === "pagi"
      ? (record.zikirPagiChecked ?? [])
      : (record.zikirPetangChecked ?? []);

    const currentCount = currentCounters[id] ?? 0;
    if (currentCount >= target) return;

    const nextCount = currentCount + 1;
    const nextCounters = { ...currentCounters, [id]: nextCount };

    const patch: Partial<DayRecord> = session === "pagi"
      ? { zikirPagiCounters: nextCounters }
      : { zikirPetangCounters: nextCounters };

    if (nextCount >= target && !currentChecked.includes(id)) {
      if (session === "pagi") patch.zikirPagiChecked = [...currentChecked, id];
      else patch.zikirPetangChecked = [...currentChecked, id];
    }

    refresh(updateDay(today, patch));
  };

  const saveHafalan = () => {
    refresh(updateDay(today, { hafalan: hafalanDraft }));
  };

  // Services
  const services = record.services ?? [];
  const addService = () => {
    const entry: ServiceEntry = {
      id: crypto.randomUUID(),
      jenis: "",
      pelanggan: "",
      upah: 0,
      selesai: false,
    };
    refresh(updateDay(today, { services: [...services, entry] }));
  };
  const updateService = (id: string, patch: Partial<ServiceEntry>) => {
    refresh(
      updateDay(today, {
        services: services.map((s) => (s.id === id ? { ...s, ...patch } : s)),
      }),
    );
  };
  const removeService = (id: string) => {
    refresh(updateDay(today, { services: services.filter((s) => s.id !== id) }));
  };
  const totalSelesai = services
    .filter((s) => s.selesai)
    .reduce((sum, s) => sum + (Number(s.upah) || 0), 0);

  const pagiDone = isSessionComplete(record.zikirPagiChecked, pagiIds);
  const petangDone = isSessionComplete(record.zikirPetangChecked, petangIds);
  const hafalanDone = !!(record.hafalan && record.hafalan.trim());
  const complete = pagiDone && petangDone && hafalanDone;

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-md px-5 pb-16 pt-8">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {isNight ? "Muhasabah Malam" : "Yaumiyah"}
          </p>
          <h1 className="mt-1 font-serif text-3xl font-semibold text-foreground">
            {isNight ? "Bagaimana hari ini?" : "Bismillah, mari mulai."}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{formatDateID(today)}</p>
        </header>

        {/* Streak */}
        <section className="mb-8 rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Streak</p>
              <p className="mt-1 text-4xl font-semibold text-primary">
                {streak} <span className="text-base font-normal text-muted-foreground">hari</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Hari ini</p>
              <p className={`mt-1 text-sm font-medium ${complete ? "text-success" : "text-muted-foreground"}`}>
                {complete ? "Lengkap ✓" : "Belum lengkap"}
              </p>
            </div>
          </div>
        </section>

        {/* Zikir Pagi */}
        <ZikirChecklist
          title="☀️ Zikir Pagi"
          items={DZIKIR_PAGI}
          checked={record.zikirPagiChecked ?? []}
          counters={record.zikirPagiCounters ?? {}}
          onToggle={(id) => toggleItem("pagi", id)}
          onCounter={(id, target) => incrementCounter("pagi", id, target)}
          onReset={() => resetSession("pagi")}
        />

        {/* Zikir Petang */}
        <ZikirChecklist
          title="🌙 Zikir Petang"
          items={DZIKIR_PETANG}
          checked={record.zikirPetangChecked ?? []}
          counters={record.zikirPetangCounters ?? {}}
          onToggle={(id) => toggleItem("petang", id)}
          onCounter={(id, target) => incrementCounter("petang", id, target)}
          onReset={() => resetSession("petang")}
        />

        {/* Hafalan */}
        <section className="mb-8">
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 className="text-sm font-medium text-muted-foreground">Hafalan Hari Ini</h2>
            <Link
              to="/riwayat"
              className="text-xs font-medium text-primary underline-offset-4 hover:underline"
            >
              Riwayat →
            </Link>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <textarea
              value={hafalanDraft}
              onChange={(e) => setHafalanDraft(e.target.value)}
              onBlur={saveHafalan}
              placeholder="Tulis ayat yang dihafal hari ini — Arab, latin, atau terjemahan."
              rows={5}
              className="w-full resize-none bg-transparent text-base leading-relaxed text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {hafalanDone ? "Tersimpan" : "Otomatis tersimpan"}
              </span>
              <button
                onClick={saveHafalan}
                className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 active:opacity-80"
              >
                Simpan
              </button>
            </div>
          </div>
        </section>

        {/* Servis HP */}
        <section className="mb-8">
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 className="text-sm font-medium text-muted-foreground">
              📱 Servis &amp; Iklan HP Hari Ini
            </h2>
            <span className="text-xs text-muted-foreground">{formatDateID(today)}</span>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            {services.length === 0 && (
              <p className="py-2 text-center text-sm text-muted-foreground">
                Belum ada catatan hari ini.
              </p>
            )}
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id} className="rounded-xl border bg-background p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <input
                        value={s.jenis}
                        onChange={(e) => updateService(s.id, { jenis: e.target.value })}
                        placeholder="Jenis pekerjaan (mis. Ganti LCD A52)"
                        className="w-full rounded-md border bg-card px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                      <input
                        value={s.pelanggan}
                        onChange={(e) => updateService(s.id, { pelanggan: e.target.value })}
                        placeholder="Nama pelanggan / keterangan"
                        className="w-full rounded-md border bg-card px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Rp</span>
                        <input
                          type="number"
                          inputMode="numeric"
                          value={s.upah || ""}
                          onChange={(e) =>
                            updateService(s.id, { upah: Number(e.target.value) || 0 })
                          }
                          placeholder="0"
                          className="w-28 rounded-md border bg-card px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                        <button
                          onClick={() => updateService(s.id, { selesai: !s.selesai })}
                          className={`ml-auto rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                            s.selesai
                              ? "bg-success text-success-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {s.selesai ? "Selesai ✓" : "Proses ⏳"}
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeService(s.id)}
                      aria-label="Hapus"
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={addService}
                className="rounded-lg border border-dashed border-primary/40 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/5"
              >
                + Tambah
              </button>
              <div className="text-sm">
                <span className="text-muted-foreground">Total hari ini: </span>
                <span className="font-semibold text-foreground">{formatRupiah(totalSelesai)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Muhasabah recap */}
        {isNight && (
          <section className="rounded-2xl border border-secondary/30 bg-accent/40 p-5">
            <h2 className="font-serif text-lg font-semibold text-secondary">Rekap Hari Ini</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <RecapRow label="Zikir Pagi" done={pagiDone} />
              <RecapRow label="Zikir Petang" done={petangDone} />
              <RecapRow label="Hafalan" done={hafalanDone} />
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Tutup hari dengan tenang. Renungkan sebentar — apa yang patut disyukuri,
              apa yang bisa diperbaiki esok.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

function ZikirChecklist({
  title,
  items,
  checked,
  counters,
  onToggle,
  onCounter,
  onReset,
}: {
  title: string;
  items: DzikirItem[];
  checked: string[];
  counters: Record<string, number>;
  onToggle: (id: string) => void;
  onCounter: (id: string, target: number) => void;
  onReset: () => void;
}) {
  const [open, setOpen] = useState(true);
  const done = items.filter((i) => checked.includes(i.id)).length;
  const total = items.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center justify-between px-1">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 text-left"
        >
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <span className="text-xs text-muted-foreground">{open ? "▾" : "▸"}</span>
        </button>
        <button
          onClick={onReset}
          className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Reset
        </button>
      </div>
      <div className="rounded-2xl border bg-card p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {done} / {total} selesai
          </span>
        </div>
        {open && (
          <ul className="space-y-2">
            {items.map((item) => {
              const isChecked = checked.includes(item.id);
              return (
                <li
                  key={item.id}
                  className={`rounded-xl border p-3 transition-opacity ${
                    isChecked ? "border-success/30 bg-success/5 opacity-70" : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {item.nama}
                        </p>
                        <span className="shrink-0 rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-accent-foreground">
                          {item.kali}x
                        </span>
                      </div>
                      <p
                        dir="rtl"
                        lang="ar"
                        className="mt-2 text-right text-xl leading-loose text-foreground"
                        style={{ fontFamily: "'Amiri', serif" }}
                      >
                        {item.arab}
                      </p>
                      <p className="mt-1.5 text-xs italic leading-relaxed text-muted-foreground">
                        {item.terjemahan}
                      </p>
                      {item.kali >= 50 && (
                        <CounterBlock
                          count={counters[item.id] ?? 0}
                          target={item.kali}
                          onIncrement={() => onCounter(item.id, item.kali)}
                        />
                      )}
                    </div>
                    <button
                      onClick={() => onToggle(item.id)}
                      aria-label={isChecked ? "Batalkan" : "Tandai selesai"}
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all active:scale-95 ${
                        isChecked
                          ? "border-success bg-success text-success-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {isChecked ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="text-xs">○</span>
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

function RecapRow({ label, done }: { label: string; done: boolean }) {
  return (
    <li className="flex items-center justify-between">
      <span className="text-foreground">{label}</span>
      <span className={done ? "text-success" : "text-muted-foreground"}>
        {done ? "✓" : "✗"}
      </span>
    </li>
  );
}

function CounterBlock({
  count,
  target,
  onIncrement,
}: {
  count: number;
  target: number;
  onIncrement: () => void;
}) {
  const done = count >= target;
  const pct = Math.min((count / target) * 100, 100);
  return (
    <div className="mt-3 flex flex-col items-center gap-2.5 rounded-xl border border-primary/20 bg-primary/5 p-3">
      <div className="flex w-full items-center gap-2.5">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className={`shrink-0 text-xs font-semibold ${done ? "text-success" : "text-primary"}`}>
          {count} / {target}
        </span>
      </div>
      <button
        onClick={onIncrement}
        disabled={done}
        className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-95 ${
          done
            ? "bg-success text-success-foreground"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        {done ? "Selesai ✓" : "+1 Kali"}
      </button>
    </div>
  );
}
