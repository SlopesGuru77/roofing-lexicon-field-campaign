import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { getProfile } from '../data/profiles';
import type { ProfileRow } from '../types';

interface Ctx {
  profile: ProfileRow | null;
  loading: boolean;
  reload: () => Promise<void>;
}
const C = createContext<Ctx | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [loading, setLoading] = useState(false);

  async function reload() {
    if (!user) { setProfile(null); return; }
    setLoading(true);
    setProfile(await getProfile(user.id));
    setLoading(false);
  }
  useEffect(() => { reload(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [user?.id]);

  return <C.Provider value={{ profile, loading, reload }}>{children}</C.Provider>;
}
export function useProfile() {
  const v = useContext(C);
  if (!v) throw new Error('useProfile must be inside ProfileProvider');
  return v;
}
