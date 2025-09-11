'use client';

import { usePWA } from '@/hooks/usePWA';
import BalanceTermico from './BalanceTermico';

export default function CalculadoraClient() {
  usePWA();

  return <BalanceTermico />;
}
