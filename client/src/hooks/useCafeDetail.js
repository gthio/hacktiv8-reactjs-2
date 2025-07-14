import { useCallback, useEffect, useState } from 'react';

export function useCafeDetail(id) {
  const [cafeDetail, setCafeDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCafeDetail = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/cafe-details/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch cafe details');
      }

      const cafeDetailData = await response.json();

      setCafeDetail(cafeDetailData);
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
      fetchCafeDetail();
      console.log(`useCafe: after`);
    }
  }, [id, fetchCafeDetail]);

  return { cafeDetail, loading, error, refetch: fetchCafeDetail };
}
