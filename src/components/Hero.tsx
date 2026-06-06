import React from 'react'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(126,207,157,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(242,166,59,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 0 !important; }
            .hero-phone { display: none !important; }
            .hero-badges { justify-content: center !important; }
            .hero-store-btns { justify-content: center !important; }
            .hero-stat-row { justify-content: center !important; }
            .hero-desc { max-width: 100% !important; }
          }
          @media (max-width: 768px) {
            #hero { padding: 80px 20px 60px !important; }
          }
          .store-btn:hover { background: rgba(42,74,61,0.8) !important; border-color: rgba(242,166,59,0.5) !important; }
          .store-btn:active { transform: scale(0.97); }
        `}</style>

      <div
        className="hero-grid"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* Left: Copy */}
          <div>
            <div
              className="hero-badges"
              style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}
            >
              <span style={{
                background: 'rgba(126,207,157,0.15)',
                color: '#7ecf9d',
                border: '1px solid rgba(126,207,157,0.3)',
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}>
                FREE TO START
              </span>
              <span style={{
                background: 'rgba(242,166,59,0.15)',
                color: '#f2a63b',
                border: '1px solid rgba(242,166,59,0.3)',
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}>
                iOS & ANDROID
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: 20,
            }}>
              Coach Smarter.{' '}
              <span style={{ color: '#f2a63b' }}>Play Fairer.</span>
            </h1>

            <p className="hero-desc" style={{
              fontSize: 18,
              color: '#c9c0ab',
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 480,
            }}>
              Generate balanced, fair lineups for every game in seconds.
              Every player gets their time — Coachr makes sure of it.
            </p>

            {/* Store buttons */}
            <div
              className="hero-store-btns"
              style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}
            >
              <a
                href="#download"
                className="store-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(24,49,41,0.8)',
                  border: '1px solid rgba(42,74,61,0.8)',
                  borderRadius: 12,
                  padding: '12px 20px',
                  color: '#f6f1e7',
                  transition: 'all 0.2s',
                  minWidth: 160,
                }}
              >
                <AppleIcon />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: '#c9c0ab', lineHeight: 1 }}>Download on the</div>
                  <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
                </div>
              </a>

              <a
                href="#download"
                className="store-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(24,49,41,0.8)',
                  border: '1px solid rgba(42,74,61,0.8)',
                  borderRadius: 12,
                  padding: '12px 20px',
                  color: '#f6f1e7',
                  transition: 'all 0.2s',
                  minWidth: 160,
                }}
              >
                <GooglePlayIcon />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: '#c9c0ab', lineHeight: 1 }}>Get it on</div>
                  <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div
              className="hero-stat-row"
              style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}
            >
              {[
                { value: '10k+', label: 'Coaches' },
                { value: '50k+', label: 'Lineups Generated' },
                { value: '4.9★', label: 'App Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#f2a63b' }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: '#c9c0ab' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className="hero-phone"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <PhoneMockup />
          </div>
        </div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f6f1e7">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#f6f1e7">
      <path d="M3.18 23.76c.37.2.8.25 1.23.13l12.44-7.19-2.63-2.63-11.04 9.69zm-1.04-21.3C2.06 2.6 2 2.79 2 3v18c0 .21.06.4.14.57l.1.09 10.09-10.09v-.24L2.24 2.37l-.1.09zm18.7 9.16l-2.57-1.48-2.89 2.89 2.89 2.89 2.59-1.5c.74-.43.74-1.36-.02-1.8zm-16.13 9.92l11.26-6.5-2.62-2.62-8.64 9.12z" />
    </svg>
  )
}
