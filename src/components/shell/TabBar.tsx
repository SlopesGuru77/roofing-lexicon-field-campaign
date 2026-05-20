import { NavLink } from 'react-router-dom';

const TABS = [
  { to: '/map', label: 'Map' },
  { to: '/collection', label: 'Collection' },
  { to: '/library', label: 'Library' },
  { to: '/profile', label: 'Profile' },
];

export function TabBar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 border-t border-paper-line bg-newsprint flex">
      {TABS.map(t => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) =>
            `flex-1 py-3 text-center font-mono text-sm uppercase tracking-wider ${
              isActive ? 'text-redline' : 'text-footnote'
            }`
          }
        >{t.label}</NavLink>
      ))}
    </nav>
  );
}
