import { useParams, Link, Navigate } from 'react-router-dom';
import { useProfile } from '../state/ProfileContext';
import { ZONE_LABEL } from '../content/cards';
import type { Zone } from '../types';

function refNo(userId: string, zone: Zone): string {
  // Deterministic 6-char ref from userId+zone (FNV-1a-ish)
  let hash = 2166136261;
  for (const ch of (userId + zone)) hash = ((hash ^ ch.charCodeAt(0)) * 16777619) >>> 0;
  return ('00000' + hash.toString(36).toUpperCase()).slice(-6);
}

export default function Credential() {
  const { zone = '' } = useParams();
  const { profile } = useProfile();
  if (!profile) return null;
  const z = zone as Zone;
  if (!profile.masteryPassedZones.includes(z)) return <Navigate to="/profile" replace />;

  return (
    <div className="min-h-screen bg-newsprint p-10 print:p-0">
      <div className="max-w-2xl mx-auto border-4 border-ink p-10 bg-card">
        <div className="text-center">
          <div className="font-mono text-xs uppercase text-footnote">Justen Newton Media</div>
          <div className="font-display text-4xl mt-2">Certificate of Mastery</div>
          <div className="font-serif italic mt-1">Roofing Lexicon: Field Campaign</div>
        </div>
        <hr className="my-6 border-paper-line" />
        <p className="font-serif text-center">
          This certifies that
        </p>
        <p className="font-display text-3xl text-center my-3">{profile.displayName}</p>
        <p className="font-serif text-center">
          has completed the <strong>{ZONE_LABEL[z]}</strong> mastery track,
          collecting every card in the zone and passing the mastery exam at 90% or above.
        </p>
        <div className="mt-10 flex justify-between font-mono text-xs uppercase">
          <span>JNM-FC-{refNo(profile.userId, z)}</span>
          <span>{new Date().toISOString().slice(0,10)}</span>
        </div>
      </div>
      <div className="text-center mt-6 print:hidden">
        <Link to="/profile" className="font-mono text-sm uppercase mr-3">Back</Link>
        <button onClick={() => window.print()} className="bg-ink text-newsprint px-4 py-2 font-mono uppercase">Print</button>
      </div>
    </div>
  );
}
