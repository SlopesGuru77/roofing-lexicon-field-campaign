import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { getProfile } from '../data/profiles';

export default function AuthCallback() {
  const { session, loading } = useAuth();
  const nav = useNavigate();
  const [params] = useSearchParams();
  const redirect = params.get('redirect');

  useEffect(() => {
    if (loading) return;
    if (!session) {
      nav('/login', { replace: true });
      return;
    }
    (async () => {
      const profile = await getProfile(session.user.id);
      if (!profile) nav('/welcome', { replace: true });
      else nav(redirect || '/map', { replace: true });
    })();
  }, [loading, session, redirect, nav]);

  return <div className="p-6">Signing you in…</div>;
}
