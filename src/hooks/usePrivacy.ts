import { useEffect, useState } from 'react';
import { Privacy } from '@/types/privacy';

export const usePrivacy = (id: string) => {
  const [privacy, setPrivacy] = useState<Privacy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrivacy = async () => {
      try {
        const response = await fetch(`/data/privacy/${id}.json`);
        if (!response.ok) {
          throw new Error('Privacy not found');
        }
        const data = await response.json();
        setPrivacy(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load privacy');
        setPrivacy(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacy();
  }, [id]);

  return { privacy, loading, error };
}; 