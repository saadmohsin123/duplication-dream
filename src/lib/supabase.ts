import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type SiteContent = {
  id: string;
  hero_title: string;
  hero_subtitle: string;
  framework_text: string;
  speaking_section_text: string;
  contact_email: string;
  phone_number: string;
  calendly_link: string;
  updated_at: string;
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  career_highlights: string;
  display_order: number;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  message: string;
  event_type: string;
  created_at: string;
};
