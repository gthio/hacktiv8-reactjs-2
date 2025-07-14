import { useEffect, useState } from 'react';

export function useCafeList() {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCafeList() {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/cafes`);

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
  }, []);

  return {
    cafes,
    loading,
    error,
    refetch: fetchCafeList,
  };
}
