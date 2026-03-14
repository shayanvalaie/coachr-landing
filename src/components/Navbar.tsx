import React, { useState } from 'react'

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 24px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(15, 31, 24, 0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(42, 74, 61, 0.6)' : '1px solid transparent',
  }

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: '-0.5px',
    color: '#f6f1e7',
  }

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: 32,
    alignItems: 'center',
  }

  const linkStyle: React.CSSProperties = {
    color: '#c9c0ab',
    fontSize: 14,
    fontWeight: 500,
    transition: 'color 0.2s',
    cursor: 'pointer',
  }

  const ctaStyle: React.CSSProperties = {
    background: '#f2a63b',
    color: '#1c1205',
    padding: '8px 20px',
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 14,
    transition: 'background 0.2s, transform 0.1s',
  }

  const hamburgerStyle: React.CSSProperties = {
    display: 'none',
    flexDirection: 'column',
    gap: 5,
    background: 'none',
    padding: 4,
    cursor: 'pointer',
  }

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: 64,
    left: 0,
    right: 0,
    background: 'rgba(15, 31, 24, 0.98)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(42, 74, 61, 0.6)',
    padding: '16px 24px 24px',
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: 16,
    zIndex: 99,
  }

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-link:hover { color: #f6f1e7 !important; }
        .nav-cta:hover { background: #d4882a !important; }
        .nav-cta:active { transform: scale(0.97); }
      `}</style>
      <nav style={navStyle}>
        <div style={logoStyle}>
          <LogoIcon />
          Coachr
        </div>

        <div className="nav-links" style={navLinksStyle}>
          {['Features', 'How It Works', 'Pricing'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="nav-link"
              style={linkStyle}
            >
              {item}
            </a>
          ))}
          <a href="#download" className="nav-cta" style={ctaStyle}>
            Download Free
          </a>
        </div>

        <button
          className="nav-hamburger"
          style={hamburgerStyle}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#f6f1e7',
                borderRadius: 2,
                transition: 'all 0.2s',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : i === 2
                      ? 'rotate(-45deg) translate(5px, -5px)'
                      : 'opacity 0'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      <div style={mobileMenuStyle}>
        {['Features', 'How It Works', 'Pricing'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ ...linkStyle, fontSize: 16, color: '#f6f1e7' }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href="#download"
          style={{ ...ctaStyle, textAlign: 'center', padding: '12px 20px' }}
          onClick={() => setMenuOpen(false)}
        >
          Download Free
        </a>
      </div>
    </>
  )
}

function LogoIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" rx="8" fill="#f2a63b" />
      <path d="M8 22L15 8L22 22" stroke="#1c1205" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 17.5H19.5" stroke="#1c1205" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="15" cy="8" r="2" fill="#1c1205" />
    </svg>
  )
}
