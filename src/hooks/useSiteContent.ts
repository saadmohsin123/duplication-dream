import { useState, useEffect } from 'react';
import { supabase, type SiteContent } from '@/lib/supabase';

export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (!error && data) setContent(data);
    setLoading(false);
  };

  useEffect(() => { fetchContent(); }, []);

  return { content, loading, refetch: fetchContent };
};
