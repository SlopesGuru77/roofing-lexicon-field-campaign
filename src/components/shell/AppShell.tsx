import { Outlet } from 'react-router-dom';
import { TabBar } from './TabBar';

export function AppShell() {
  return (
    <div className="min-h-screen pb-16">
      <main className="px-4 pt-4"><Outlet /></main>
      <TabBar />
    </div>
  );
}
