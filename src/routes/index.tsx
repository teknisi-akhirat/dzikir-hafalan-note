import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  computeStreak,
  formatDateID,
  formatTime,
  getDay,
  loadAll,
  todayKey,
  updateDay,
  type DayRecord,
} from "@/lib/yaumiyah-storage";

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

  useEffect(() => {
    const r = getDay(today);
    setRecord(r);
    setHafalanDraft(r.hafalan ?? "");
    setStreak(computeStreak(loadAll()));
    setHour(new Date().getHours());
  }, [today]);

  const isNight = hour >= 19 || hour < 4;

  const toggle = (key: "zikirPagi" | "zikirPetang") => {
    const next = updateDay(today, {
      [key]: record[key] ? null : new Date().toISOString(),
    });
    setRecord(next);
    setStreak(computeStreak(loadAll()));
  };

  const saveHafalan = () => {
    const next = updateDay(today, { hafalan: hafalanDraft });
    setRecord(next);
    setStreak(computeStreak(loadAll()));
  };

  const complete =
    !!record.zikirPagi && !!record.zikirPetang && !!(record.hafalan && record.hafalan.trim());

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

        {/* Zikir */}
        <section className="mb-8 space-y-3">
          <h2 className="px-1 text-sm font-medium text-muted-foreground">Zikir</h2>
          <ZikirButton
            label="Zikir Pagi"
            time={record.zikirPagi}
            onToggle={() => toggle("zikirPagi")}
          />
          <ZikirButton
            label="Zikir Petang"
            time={record.zikirPetang}
            onToggle={() => toggle("zikirPetang")}
          />
        </section>

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
                {record.hafalan && record.hafalan.trim() ? "Tersimpan" : "Otomatis tersimpan"}
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

        {/* Muhasabah recap */}
        {isNight && (
          <section className="rounded-2xl border border-secondary/30 bg-accent/40 p-5">
            <h2 className="font-serif text-lg font-semibold text-secondary">Rekap Hari Ini</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <RecapRow label="Zikir Pagi" done={!!record.zikirPagi} />
              <RecapRow label="Zikir Petang" done={!!record.zikirPetang} />
              <RecapRow label="Hafalan" done={!!(record.hafalan && record.hafalan.trim())} />
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

function ZikirButton({
  label,
  time,
  onToggle,
}: {
  label: string;
  time?: string | null;
  onToggle: () => void;
}) {
  const done = !!time;
  return (
    <button
      onClick={onToggle}
      className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left shadow-sm transition-all active:scale-[0.98] ${
        done
          ? "border-success/40 bg-success text-success-foreground"
          : "border-border bg-card text-foreground hover:border-primary/40"
      }`}
    >
      <div>
        <p className="text-lg font-medium">{label}</p>
        <p className={`mt-0.5 text-xs ${done ? "text-success-foreground/80" : "text-muted-foreground"}`}>
          {done ? `Selesai · ${formatTime(time!)}` : "Tap jika sudah"}
        </p>
      </div>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
          done ? "border-success-foreground/40 bg-success-foreground/10" : "border-border bg-background"
        }`}
        aria-hidden
      >
        {done ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <span className="text-muted-foreground">○</span>
        )}
      </div>
    </button>
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
