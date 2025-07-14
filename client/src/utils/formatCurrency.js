export const formatCurrency = amount => {
  const amountInThousands = amount / 1000;
  return (
    'Rp. ' +
    new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(amountInThousands) +
    ' rb'
  );
};