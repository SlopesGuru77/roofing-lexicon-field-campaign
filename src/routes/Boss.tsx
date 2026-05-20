import { useParams, Navigate } from 'react-router-dom';
import { cardById } from '../content/cards';
import { bossBank } from '../content/bosses';
import { BossRunner } from '../components/boss/BossRunner';

export default function Boss() {
  const { id = '' } = useParams();
  const card = cardById(id);
  const bank = bossBank(id);
  if (!card || !bank) return <Navigate to="/map" replace />;
  return <BossRunner card={card} bank={bank} />;
}
