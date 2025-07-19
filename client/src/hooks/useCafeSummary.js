import { useMemo } from 'react';
import {
  averageAmount,
  totalSales,
  totalTransactions,
} from '../utils/cafeListSummary';
import { formatCurrency } from '../utils/formatCurrency';
import { formatNumber } from '../utils/formatNumber';
import { useCafeList } from './useCafeList';

export default function useCafeSummary() {
  const { cafes } = useCafeList();

  const totalSalesValue = useMemo(() => totalSales(cafes), [cafes]);

  const totalTransactionsValue = useMemo(
    () => totalTransactions(cafes),
    [cafes]
  );

  const averageAmountValue = useMemo(() => averageAmount(cafes), [cafes]);

  console.log(`totalSalesValue: ${totalSalesValue}`);

  return {
    totalSales: formatCurrency(totalSalesValue),
    totalTransactions: formatNumber(totalTransactionsValue),
    averageAmount: formatCurrency(averageAmountValue),
  };
}
