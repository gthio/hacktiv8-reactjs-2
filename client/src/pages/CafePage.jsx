import CafeList from '../components/CafeList';
import CafeSummary from '../components/CafeSummary';
import { useCafeList } from '../hooks/useCafeList'; // Add this import

function CafePage() {
  const { cafes } = useCafeList(); // Use the hook to get cafes data

  return (
    <div>
      <h1>Dashboard</h1>
      <CafeSummary cafes={cafes} />
      <CafeList cafes={cafes} />
    </div>
  );
}

export default CafePage;
