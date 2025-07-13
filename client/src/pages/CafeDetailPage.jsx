import { useNavigate, useParams } from 'react-router-dom';
import { useCafeDetail } from '../hooks/useCafeDetail';

function CafeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cafe, loading, error } = useCafeDetail(id);

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cafe) {
    return <div>Cafe not found</div>;
  }

  return (
    <div>
      <button onClick={handleBackClick}>← Back</button>
      <h1>{cafe.name}</h1>
      <h2>
        {cafe.city} - {cafe.province}
      </h2>
      <div>
        <p>
          <strong>sales:</strong> {cafe.sales}
        </p>
      </div>
    </div>
  );
}

export default CafeDetailPage;
