import { formatCurrency } from '../utils/formatCurrency';

const CafeSummarySales = ({ cafes = [] }) => {
  const totalSales = cafes.reduce((total, sale) => {
    return total + (sale.sales || 0);
  }, 0);

  return (
    <div className="cafe-summary">
      <div className="summary-card">
        <h3>Total Penjualan</h3>
        <div className="total-sales">
          <span className="amount">{formatCurrency(totalSales)}</span>
        </div>
      </div>
    </div>
  );
};

export default CafeSummarySales;
