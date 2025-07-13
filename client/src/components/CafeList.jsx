import CafeCard from './CafeCard';

function CafeList({ cafes }) {
  return (
    <div className="cafe-list">
      <div className="cafes-grid">
        {cafes.map(cafe => (
          <CafeCard key={cafe.cafe_id} cafe={cafe} />
        ))}
      </div>
    </div>
  );
}

export default CafeList;
