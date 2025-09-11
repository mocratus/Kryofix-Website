'use client';

import { usePWA } from '@/hooks/usePWA';
import BalanceTermico from './BalanceTermico';
import OfflineIndicator from './OfflineIndicator';

export default function CalculadoraClient() {
  usePWA();

  return (
    <>
      <OfflineIndicator />
      <BalanceTermico />
    </>
  );
}
