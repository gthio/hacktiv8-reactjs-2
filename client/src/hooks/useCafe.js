import { useCallback, useEffect, useState } from 'react';

export function useCafe(id) {
  const [cafe, setCafe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCafe = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/cafes?cafe_id=${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch cafe details');
      }

      const cafeData = await response.json();

      setCafe(cafeData[0]);
    } catch (error) {
      console.error('Error fetching cafe details:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      console.log(`useCafe: before`);
      fetchCafe();
      console.log(`useCafe: after`);
    }
  }, [id, fetchCafe]);

  return { cafe, loading, error, refetch: fetchCafe };
}
