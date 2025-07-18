import { useEffect, useState } from 'react';
import { buildApiUrl, API_ENDPOINTS } from '../config/api';

export function useCafeList(criteria = null) {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCafeList() {
    try {
      setLoading(true);
      const url = buildApiUrl(API_ENDPOINTS.CAFES, criteria ? { q: criteria } : {});

      console.log(url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch cafe list');
      }

      const cafeData = await response.json();

      setCafes(cafeData);
    } catch (error) {
      console.error('Error fetching cafe list:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCafeList();
  }, [criteria]);

  return {
    cafes,
    loading,
    error,
    refetch: fetchCafeList,
  };
}
