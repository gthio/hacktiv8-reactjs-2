import { useEffect, useState } from 'react';

export const useCafes = searchParams => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCafes = async () => {
    try {
      setLoading(true);
      setError(null);

      const query = searchParams.get('q') || '';
      const url = `http://localhost:3001/cafes?q=${query}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch cafes');
      }

      const data = await response.json();
      setCafes(data);
    } catch (error) {
      console.error('Error fetching cafe data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCafes();
  }, [searchParams]);

  return { cafes, loading, error, refetch: fetchCafes };
};
