import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { formatDateID, loadAllHafalan } from "@/lib/yaumiyah-storage";

export const Route = createFileRoute("/_authenticated/riwayat")({
  head: () => ({
    meta: [
      { title: "Riwayat Hafalan — Yaumiyah" },
      { name: "description", content: "Riwayat hafalan harian." },
    ],
  }),
  component: Riwayat,
});

function Riwayat() {
  const [items, setItems] = useState<{ date: string; content: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      const list = await loadAllHafalan(data.user.id);
      setItems(list);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-md px-5 pb-16 pt-8">
        <Link to="/" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Kembali
        </Link>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground">Riwayat Hafalan</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {loading ? "Memuat…" : `${items.length} hari tercatat`}
        </p>

        <div className="mt-6 space-y-4">
          {!loading && items.length === 0 && (
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
                {r.content}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
