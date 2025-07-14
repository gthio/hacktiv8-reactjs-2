import { useState } from 'react';
import CafeList from '../components/CafeList';
import CafeSummary from '../components/CafeSummary';
import { useCafeList } from '../hooks/useCafeList'; // Add this import

function CafePage() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const { cafes, loading, error } = useCafeList(searchCriteria);

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Search cafes..."
        value={searchCriteria}
        onChange={e => setSearchCriteria(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />
      <CafeSummary cafes={cafes} />
      <CafeList cafes={cafes} />
    </div>
  );
}

export default CafePage;
