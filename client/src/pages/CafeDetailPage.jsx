import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCafe } from '../hooks/useCafe';
import { formatCurrency } from '../utils/formatCurrency';
import { formatNumber } from '../utils/formatNumber';

function CafeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cafe, loading, error } = useCafe(id);

  // Only log when cafe data actually changes
  useEffect(() => {
    if (cafe) {
      console.log(`✅ Cafe loaded: ${cafe.name} (ID: ${id})`);
    }
  }, [cafe, id]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!cafe) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-lg text-gray-600">Cafe not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-8 flex items-center">
        <button
          onClick={handleBackClick}
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Cafe Details</h1>
      </div>

      {/* Cafe Information Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 relative">
        <img
          src="/store.svg"
          alt="Store icon"
          className="absolute top-4 right-4 w-12 h-12 text-gray-400"
        />

        <h2 className="text-2xl font-semibold text-gray-900 mb-2 pr-16">
          {cafe.name} ({cafe.cafe_id})
        </h2>

        <p className="text-lg text-gray-500 border-b border-gray-200 pb-4 mb-6">
          {cafe.city} - {cafe.province}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sales */}
          <div className="bg-green-500 rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <img src="/money.svg" alt="Money icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-semibold text-white">Penjualan</h3>
            </div>
            <div className="text-3xl font-bold text-white text-center">
              {formatCurrency(cafe.sales)}
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-blue-500 rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/transaction.svg"
                alt="Transaction icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="text-lg font-semibold text-white">Transaksi</h3>
            </div>
            <div className="text-3xl font-bold text-white text-center">
              {formatNumber(cafe.transactions)}
            </div>
          </div>

          {/* Average */}
          <div className="bg-yellow-500 rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/average.svg"
                alt="Average icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="text-lg font-semibold text-white">Rata-rata</h3>
            </div>
            <div className="text-3xl font-bold text-white text-center">
              {formatCurrency(Math.round(cafe.sales / cafe.transactions))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeDetailPage;
