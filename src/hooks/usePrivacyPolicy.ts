import { useEffect, useState } from 'react';
import { PrivacyPolicy } from '@/types/privacy-policy';

export const usePrivacyPolicy = (id: string) => {
  const [policy, setPolicy] = useState<PrivacyPolicy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch(`/data/privacy-policies/${id}.json`);
        if (!response.ok) {
          throw new Error('Privacy policy not found');
        }
        const data = await response.json();
        setPolicy(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load privacy policy');
        setPolicy(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, [id]);

  return { policy, loading, error };
}; 