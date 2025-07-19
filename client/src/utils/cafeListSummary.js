export function totalSales(cafes) {
  const totalSales = cafes.reduce((total, sale) => {
    return total + (sale.sales || 0);
  }, 0);

  return totalSales;
}

export function totalTransactions(cafes) {
  const totalTransactions = cafes.reduce((total, sale) => {
    return total + (sale.transactions || 0);
  }, 0);

  return totalTransactions;
}

export function averageAmount(cafes) {
  const totalSales = cafes.reduce((total, sale) => {
    return total + (sale.sales || 0);
  }, 0);

  const totalTransactions = cafes.reduce((total, sale) => {
    return total + (sale.transactions || 0);
  }, 0);

  return totalTransactions > 0 ? totalSales / totalTransactions : 0;
}
