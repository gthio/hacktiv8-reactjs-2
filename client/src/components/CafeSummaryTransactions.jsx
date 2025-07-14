import { formatNumber } from '../utils/formatNumber';

const CafeSummaryTransactions = ({ cafes = [] }) => {
  const totalTransactions = cafes.reduce((total, sale) => {
    return total + (sale.transactions || 0);
  }, 0);

  return (
    <div className="cafe-summary">
      <div className="summary-card">
        <h3>Total Transaksi</h3>
        <div className="total-sales">
          <span className="amount">{formatNumber(totalTransactions)}</span>
        </div>
      </div>
    </div>
  );
};

export default CafeSummaryTransactions;
