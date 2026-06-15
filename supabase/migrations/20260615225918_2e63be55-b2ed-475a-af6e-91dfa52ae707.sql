
CREATE TABLE public.dzikir_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL,
  dzikir_key TEXT NOT NULL,
  is_done BOOLEAN NOT NULL DEFAULT false,
  counter INTEGER,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, date, dzikir_key)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.dzikir_log TO authenticated;
GRANT ALL ON public.dzikir_log TO service_role;
ALTER TABLE public.dzikir_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own dzikir" ON public.dzikir_log FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX dzikir_log_user_date_idx ON public.dzikir_log(user_id, date);

CREATE TABLE public.hafalan_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, date)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.hafalan_log TO authenticated;
GRANT ALL ON public.hafalan_log TO service_role;
ALTER TABLE public.hafalan_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own hafalan" ON public.hafalan_log FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX hafalan_log_user_date_idx ON public.hafalan_log(user_id, date);

CREATE TABLE public.servis_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.servis_log TO authenticated;
GRANT ALL ON public.servis_log TO service_role;
ALTER TABLE public.servis_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own servis" ON public.servis_log FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX servis_log_user_date_idx ON public.servis_log(user_id, date);
