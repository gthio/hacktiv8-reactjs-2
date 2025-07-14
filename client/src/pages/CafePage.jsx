import { useState } from 'react';
import CafeList from '../components/CafeList';
import CafeSummaryAverage from '../components/CafeSummaryAverage';
import CafeSummarySales from '../components/CafeSummarySales';
import CafeSummaryTransactions from '../components/CafeSummaryTransactions';
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
      <CafeSummarySales cafes={cafes} />
      <CafeSummaryTransactions cafes={cafes} />
      <CafeSummaryAverage cafes={cafes} />
      <CafeList cafes={cafes} />
    </div>
  );
}

export default CafePage;
