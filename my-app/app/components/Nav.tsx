'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

type Theme = 'dark' | 'light';
type Mode = 'bp' | 'built';

export default function Nav() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mode, setMode] = useState<Mode>('bp');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let savedTheme: string | null = null;
    let savedMode: string | null = null;
    try {
      savedTheme = localStorage.getItem('un-theme');
      savedMode = localStorage.getItem('un-mode');
    } catch {
      // localStorage unavailable, fall back to defaults
    }

    const initialTheme: Theme = savedTheme === 'light' ? 'light' : 'dark';
    const initialMode: Mode = savedMode === 'built' ? 'built' : 'bp';

    document.documentElement.classList.toggle('light', initialTheme === 'light');
    document.body.classList.remove('bp', 'built');
    document.body.classList.add(initialMode);

    setTheme(initialTheme);
    setMode(initialMode);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('light', next === 'light');
    try {
      localStorage.setItem('un-theme', next);
    } catch {
      // ignore
    }
    setTheme(next);
  }

  function selectMode(next: Mode) {
    document.body.classList.remove('bp', 'built');
    document.body.classList.add(next);
    try {
      localStorage.setItem('un-mode', next);
    } catch {
      // ignore
    }
    setMode(next);
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/#top" className="brand">
          <span className="mono-box">UN</span>
          <span className="brand-text">
            <span className="brand-name">Usman Naveed</span>
            <span className="brand-sub">SOFTWARE DEVELOPER</span>
          </span>
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'light' ? 'Switch to night mode' : 'Switch to day mode'}
            aria-pressed={theme === 'light'}
            onClick={toggleTheme}
          >
            <svg
              className="icon icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="12" y1="2" x2="12" y2="4"></line>
              <line x1="12" y1="20" x2="12" y2="22"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="2" y1="12" x2="4" y2="12"></line>
              <line x1="20" y1="12" x2="22" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg className="icon icon-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z"></path>
            </svg>
          </button>

          <div className={`mode-toggle${mode === 'built' ? ' is-built' : ''}`} role="group" aria-label="Display mode">
            <button type="button" className="mode-btn" aria-pressed={mode === 'bp'} onClick={() => selectMode('bp')}>
              Blueprint
            </button>
            <button type="button" className="mode-btn" aria-pressed={mode === 'built'} onClick={() => selectMode('built')}>
              Built
            </button>
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
