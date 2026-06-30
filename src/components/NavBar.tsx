import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from './NavBar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/career', label: 'Career' },
];

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const location = useLocation();

  useEffect(() => {
    const updateIndicator = () => {
      const active = navRef.current?.querySelector('a[aria-current="page"]') as HTMLElement | null;
      if (active) {
        setIndicator((prev) => {
          const next = { left: active.offsetLeft, width: active.offsetWidth };
          return prev.left === next.left && prev.width === next.width ? prev : next;
        });
      }
    };
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    const id = window.setTimeout(updateIndicator, 50);
    return () => {
      window.removeEventListener('resize', updateIndicator);
      window.clearTimeout(id);
    };
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.brand}>Nikita Didus</span>
        <nav className={styles.nav} ref={navRef}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              {link.label}
            </NavLink>
          ))}
          <span
            className={styles.indicator}
            style={{ left: indicator.left, width: indicator.width }}
          />
        </nav>
      </div>
    </header>
  );
}
