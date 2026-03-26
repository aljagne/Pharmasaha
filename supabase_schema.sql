-- ─────────────────────────────────────────────────────────
-- Supabase Database Schema for PharmaSaha
-- ─────────────────────────────────────────────────────────

-- 1. Concierge & Partner Form Table
CREATE TABLE IF NOT EXISTS public.concierge_partner (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Enable Row Level Security (RLS) but allow anonymous inserts (for public forms)
ALTER TABLE public.concierge_partner ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts for concierge_partner" ON public.concierge_partner FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow authenticated read access for concierge_partner" ON public.concierge_partner FOR SELECT TO authenticated USING (true);


-- 2. Request Blueprint Form Table
CREATE TABLE IF NOT EXISTS public.request_blueprint (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    corporate_name TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
);

-- Enable Row Level Security (RLS) but allow anonymous inserts
ALTER TABLE public.request_blueprint ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts for request_blueprint" ON public.request_blueprint FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow authenticated read access for request_blueprint" ON public.request_blueprint FOR SELECT TO authenticated USING (true);


-- 3. Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    publish_date TEXT NOT NULL,
    reading_time TEXT NOT NULL,
    image_url TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    featured BOOLEAN DEFAULT false NOT NULL,
    body JSONB NOT NULL -- Stores the array of objects: { heading: string, content: string, pullQuote?: string }
);

-- Enable Row Level Security (RLS) for public reading
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access for blogs" ON public.blogs FOR SELECT TO public USING (true);
-- Only authenticated users (admins) can insert/update/delete
CREATE POLICY "Allow authenticated full access for blogs" ON public.blogs TO authenticated USING (true);
