import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from '../state/AuthContext';

export default function Login() {
  const { signInWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    const { error } = await signInWithEmail(email);
    if (error) {
      setError(error);
      setStatus('error');
    } else {
      setStatus('sent');
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="font-display text-4xl text-redline mb-2">Field Campaign</h1>
      <p className="font-serif text-footnote mb-8">Sign in with a magic link.</p>
      {status === 'sent' ? (
        <p className="text-good font-mono">Check your inbox at {email}.</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col w-full max-w-sm gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border border-paper-line bg-card px-3 py-2 font-mono"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-ink text-newsprint py-2 font-mono uppercase tracking-wide"
          >
            {status === 'sending' ? 'Sending…' : 'Send link'}
          </button>
          {error && <p className="text-redline font-mono text-sm">{error}</p>}
        </form>
      )}
    </div>
  );
}
