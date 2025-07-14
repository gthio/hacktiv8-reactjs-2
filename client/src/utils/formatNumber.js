export const formatNumber = amount => {
  const amountInThousands = amount;
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(amountInThousands);
};
