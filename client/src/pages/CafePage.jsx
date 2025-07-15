import { useState } from 'react';
import CafeList from '../components/CafeList';
import CafeSummaryAverage from '../components/CafeSummaryAverage';
import CafeSummarySales from '../components/CafeSummarySales';
import CafeSummaryTransactions from '../components/CafeSummaryTransactions';
import { useCafeList } from '../hooks/useCafeList';

function CafePage() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const { cafes, loading, error } = useCafeList(searchCriteria);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search cafes..."
            value={searchCriteria}
            onChange={e => setSearchCriteria(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CafeSummarySales cafes={cafes} />
        <CafeSummaryTransactions cafes={cafes} />
        <CafeSummaryAverage cafes={cafes} />
      </div>

      {/* Cafe List Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <CafeList cafes={cafes} loading={loading} />
      </div>
    </div>
  );
}

export default CafePage;
