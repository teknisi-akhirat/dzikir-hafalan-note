import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { formatDateID, loadAll, type DayRecord } from "@/lib/yaumiyah-storage";

export const Route = createFileRoute("/riwayat")({
  head: () => ({
    meta: [
      { title: "Riwayat Hafalan — Yaumiyah" },
      { name: "description", content: "Riwayat hafalan harian." },
    ],
  }),
  component: Riwayat,
});

function Riwayat() {
  const [items, setItems] = useState<DayRecord[]>([]);

  useEffect(() => {
    const all = loadAll();
    const list = Object.values(all)
      .filter((r) => r.hafalan && r.hafalan.trim().length > 0)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    setItems(list);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-md px-5 pb-16 pt-8">
        <Link to="/" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Kembali
        </Link>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground">Riwayat Hafalan</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {items.length} hari tercatat
        </p>

        <div className="mt-6 space-y-4">
          {items.length === 0 && (
            <p className="rounded-2xl border bg-card p-6 text-center text-sm text-muted-foreground">
              Belum ada hafalan. Mulai dari satu ayat hari ini.
            </p>
          )}
          {items.map((r) => (
            <article key={r.date} className="rounded-2xl border bg-card p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {formatDateID(r.date)}
              </p>
              <p className="mt-2 whitespace-pre-wrap text-base leading-relaxed text-foreground">
                {r.hafalan}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
