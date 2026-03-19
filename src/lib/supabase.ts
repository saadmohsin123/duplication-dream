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
  show_trademarks: boolean;
  updated_at: string;
};

export type FounderStat = { num: string; label: string };
export type StoryBlock = { label: string; title: string; paragraphs: string[] };
export type Quote = { text: string };
export type SpeakingTopic = { title: string; body: string };

export type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  career_highlights: string;
  display_order: number;
  slug: string;
  subtitle: string;
  page_tagline: string;
  page_hero_text: string;
  homepage_quote: string;
  homepage_description: string;
  homepage_role_label: string;
  stats: FounderStat[];
  story_blocks: StoryBlock[];
  quotes: Quote[];
  teams: string[];
  speaking_topics: SpeakingTopic[];
  action_images: string[];
  badge_text: string;
  badge_number: string;
  cta_text: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  message: string;
  event_type: string;
  created_at: string;
};
