import { useSearchParams } from 'react-router-dom';
import CafeList from '../components/CafeList';
import CafeSummary from '../components/CafeSummary';
import Filter from '../components/Filter';
import { useCafes } from '../hooks/useCafes';

function CafePage() {
  const [searchParams] = useSearchParams();
  const { cafes, loading, error } = useCafes(searchParams);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <Filter />
      <CafeSummary cafes={cafes} />
      <CafeList cafes={cafes} />
    </div>
  );
}

export default CafePage;
