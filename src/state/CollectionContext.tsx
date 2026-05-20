import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { fetchEarnedCards } from '../data/earned-cards';
import type { EarnedCard } from '../types';

interface Ctx {
  earned: EarnedCard[];
  loading: boolean;
  reload: () => Promise<void>;
}
const C = createContext<Ctx | null>(null);

export function CollectionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [earned, setEarned] = useState<EarnedCard[]>([]);
  const [loading, setLoading] = useState(false);

  async function reload() {
    if (!user) { setEarned([]); return; }
    setLoading(true);
    setEarned(await fetchEarnedCards(user.id));
    setLoading(false);
  }
  useEffect(() => { reload(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [user?.id]);

  return <C.Provider value={{ earned, loading, reload }}>{children}</C.Provider>;
}
export function useCollection() {
  const v = useContext(C);
  if (!v) throw new Error('useCollection must be inside CollectionProvider');
  return v;
}
