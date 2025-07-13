import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/currency';

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
    </div>
  );
}

export default CafeCard;
