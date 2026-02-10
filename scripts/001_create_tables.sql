-- Create quotes table for translation quote requests
CREATE TABLE IF NOT EXISTS quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  source_language TEXT NOT NULL,
  target_language TEXT NOT NULL,
  document_type TEXT NOT NULL,
  word_count INTEGER,
  urgency TEXT NOT NULL DEFAULT 'standard',
  additional_notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Create bookings table for interpretation sessions
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  source_language TEXT NOT NULL,
  target_language TEXT NOT NULL,
  interpretation_type TEXT NOT NULL,
  session_date DATE NOT NULL,
  session_time TIME NOT NULL,
  duration_hours INTEGER NOT NULL DEFAULT 1,
  location TEXT,
  additional_notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Create contacts table for general inquiries
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread'
);

-- Enable Row Level Security (public access for form submissions)
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for public form submissions
CREATE POLICY "Allow anonymous inserts on quotes" ON quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts on bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts on contacts" ON contacts FOR INSERT WITH CHECK (true);
