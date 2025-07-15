import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
import { formatNumber } from '../utils/formatNumber';

function CafeCard({ cafe }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(`Navigating to cafe ${cafe.cafe_id}`);
    navigate(`/cafe/${cafe.cafe_id}`);
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg relative"
      onClick={handleCardClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${cafe.name}`}
    >
      <img
        src="/store.svg"
        alt="Store icon"
        className="absolute top-4 right-4 w-12 h-12 text-gray-400"
      />

      <h2 className="text-xl font-semibold text-gray-900 mb-4 pr-16">
        {cafe.name} ({cafe.cafe_id})
      </h2>
      <p className="text-gray-500 border-b border-gray-200 pb-2 mb-4">
        {cafe.city} - {cafe.province}
      </p>
      <p className="text-gray-700 text-sm mb-1 flex items-center">
        <img src="/money.svg" alt="Money icon" className="w-4 h-4 mr-2" />
        Penjualan: {formatCurrency(cafe.sales)}
      </p>
      <p className="text-gray-700 text-sm mb-1 flex items-center">
        <img
          src="/transaction.svg"
          alt="Transaction icon"
          className="w-4 h-4 mr-2"
        />
        Transaksi: {formatNumber(cafe.transactions)}
      </p>
      <p className="text-gray-700 text-sm font-medium flex items-center">
        <img src="/average.svg" alt="Average icon" className="w-4 h-4 mr-2" />
        Rata-rata: {formatNumber(Math.round(cafe.sales / cafe.transactions))}
      </p>
    </div>
  );
}

export default CafeCard;
