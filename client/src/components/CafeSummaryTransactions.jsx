import { formatNumber } from '../utils/formatNumber';

const CafeSummaryTransactions = ({ cafes = [] }) => {
  const totalTransactions = cafes.reduce((total, sale) => {
    return total + (sale.transactions || 0);
  }, 0);

  return (
    <div className="bg-blue-500 rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-white mb-4">Total Transaksi</h3>
      <div className="text-3xl font-bold text-white">
        {formatNumber(totalTransactions)}
      </div>
    </div>
  );
};

export default CafeSummaryTransactions;
