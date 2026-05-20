import { useMemo, useState } from 'react';
import { TERMS } from '../../content/library';

export function TermBrowser() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return TERMS;
    return TERMS.filter(t => t.t.toLowerCase().includes(needle) || t.d.toLowerCase().includes(needle));
  }, [q]);

  return (
    <div>
      <input value={q} onChange={e => setQ(e.target.value)}
        placeholder="Search 223 terms…"
        className="w-full border border-paper-line bg-card px-3 py-2 font-mono"/>
      <ul className="mt-3 divide-y divide-paper-line">
        {filtered.map(t => (
          <li key={t.t} className="py-3">
            <div className="font-display text-lg">{t.t}</div>
            <div className="font-mono text-xs uppercase text-footnote">{t.c} · Tier {t.tier}</div>
            <p className="font-serif text-sm mt-1">{t.d}</p>
            {t.n && <p className="font-serif text-xs text-footnote italic mt-1">Field note: {t.n}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
