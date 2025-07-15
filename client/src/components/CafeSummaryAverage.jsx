import { formatCurrency } from '../utils/formatCurrency';

const CafeSummaryAverage = ({ cafes = [] }) => {
  const totalSales = cafes.reduce((total, sale) => {
    return total + (sale.sales || 0);
  }, 0);

  const totalTransactions = cafes.reduce((total, sale) => {
    return total + (sale.transactions || 0);
  }, 0);

  const averageAmount =
    totalTransactions > 0 ? totalSales / totalTransactions : 0;

  return (
    <div className="bg-yellow-500 rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-white mb-4">
        Rata-rata Penjualan
      </h3>
      <div className="text-3xl font-bold text-white">
        {formatCurrency(averageAmount)}
      </div>
    </div>
  );
};

export default CafeSummaryAverage;
