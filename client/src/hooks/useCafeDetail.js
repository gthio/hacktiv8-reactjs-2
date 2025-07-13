import { useEffect, useState } from 'react';

export function useCafeDetail(id) {
  const [cafe, setCafe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCafeDetail() {
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
  }

  useEffect(() => {
    if (id) {
      fetchCafeDetail();
    }
  }, [id]);

  return { cafe, loading, error, refetch: fetchCafeDetail };
}
