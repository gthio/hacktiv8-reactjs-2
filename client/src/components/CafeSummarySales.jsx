import { formatCurrency } from '../utils/formatCurrency';

const CafeSummarySales = ({ cafes = [] }) => {
  const totalSales = cafes.reduce((total, sale) => {
    return total + (sale.sales || 0);
  }, 0);

  return (
    <div className="bg-green-500 rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-white mb-4">Total Penjualan</h3>
      <div className="text-3xl font-bold text-white">
        {formatCurrency(totalSales)}
      </div>
    </div>
  );
};

export default CafeSummarySales;
