import CafeCard from './CafeCard';

function CafeList({ cafes, loading = false }) {
  // Add safety check for cafes
  if (!cafes || cafes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600 text-center">No cafes available</p>
      </div>
    );
  }

  console.log('CafeList: Rendering cafes', cafes);

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        loading ? 'opacity-50 pointer-events-none' : ''
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cafes.map(cafe => (
          <CafeCard key={cafe.cafe_id} cafe={cafe} />
        ))}
      </div>
    </div>
  );
}

export default CafeList;
