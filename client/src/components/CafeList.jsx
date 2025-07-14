import CafeCard from './CafeCard';

function CafeList({ cafes }) {
  // Add safety check for cafes
  if (!cafes || cafes.length === 0) {
    return (
      <div className="cafe-list">
        <p>No cafes available</p>
      </div>
    );
  }

  console.log('CafeList: Rendering cafes', cafes);

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
