import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { useProfile } from '../state/ProfileContext';
import { createProfile } from '../data/profiles';
import { fire } from '../lib/plausible';
import type { Role } from '../types';

const ROLES: { value: Role; label: string }[] = [
  { value: 'estimator', label: 'Estimator' },
  { value: 'supplement_writer', label: 'Supplement Writer' },
  { value: 'inspector', label: 'Inspector' },
  { value: 'claims_adjuster', label: 'Claims Adjuster' },
  { value: 'public_adjuster', label: 'Public Adjuster' },
  { value: 'other', label: 'Other' },
];

export default function Welcome() {
  const { user } = useAuth();
  const { reload } = useProfile();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState<Role>('estimator');
  const [submitting, setSubmitting] = useState(false);

  if (!user) return null;

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await createProfile({ userId: user!.id, displayName: name.trim(), role });
    fire('signup_completed', { role });
    await reload();
    nav('/map', { replace: true });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="font-display text-3xl text-redline mb-6">Welcome.</h1>
      <form onSubmit={submit} className="flex flex-col w-full max-w-sm gap-3">
        <label className="font-mono text-sm uppercase">What should we call you?</label>
        <input
          required minLength={1} maxLength={60}
          value={name} onChange={e => setName(e.target.value)}
          className="border border-paper-line bg-card px-3 py-2 font-serif"
        />
        <label className="font-mono text-sm uppercase mt-3">Your role</label>
        <select value={role} onChange={e => setRole(e.target.value as Role)}
          className="border border-paper-line bg-card px-3 py-2 font-serif">
          {ROLES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
        <button type="submit" disabled={submitting}
          className="mt-4 bg-ink text-newsprint py-2 font-mono uppercase">
          {submitting ? 'Saving…' : 'Start'}
        </button>
      </form>
    </div>
  );
}
