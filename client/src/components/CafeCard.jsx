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
      className="cafe-card"
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      tabIndex={0}
    >
      <h2>
        {cafe.name} ({cafe.cafe_id})
      </h2>
      <p>
        {cafe.city} - {cafe.province}
      </p>
      <p>Penjualan: {formatCurrency(cafe.sales)}</p>
      <p>Transaksi: {formatNumber(cafe.transactions)}</p>
      <p>
        Rata-rata: {formatNumber(Math.round(cafe.sales / cafe.transactions))}
      </p>
    </div>
  );
}

export default CafeCard;
