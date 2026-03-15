import { useState, useEffect } from 'react';
import { supabase, type Founder } from '@/lib/supabase';

export const useFounders = () => {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFounders = async () => {
    const { data, error } = await supabase
      .from('founders')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (!error && data) setFounders(data);
    setLoading(false);
  };

  useEffect(() => { fetchFounders(); }, []);

  return { founders, loading, refetch: fetchFounders };
};
