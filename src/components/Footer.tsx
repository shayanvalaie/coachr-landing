import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Download CTA band */}
      <section
        id="download"
        style={{
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(242,166,59,0.1) 0%, rgba(126,207,157,0.08) 100%)',
          borderTop: '1px solid rgba(42,74,61,0.6)',
          borderBottom: '1px solid rgba(42,74,61,0.6)',
        }} />
        <div style={{ position: 'relative', maxWidth: 560, margin: '0 auto' }}>
          <div style={{
            width: 56, height: 56,
            borderRadius: 14,
            background: 'rgba(242,166,59,0.15)',
            border: '1px solid rgba(242,166,59,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#f2a63b" />
              <path d="M7 21L14 7L21 21" stroke="#1c1205" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 16.5H18.5" stroke="#1c1205" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Ready to coach <span style={{ color: '#f2a63b' }}>smarter?</span>
          </h2>
          <p style={{ color: '#c9c0ab', fontSize: 16, marginBottom: 36 }}>
            Join thousands of coaches who use Coachr to run fair, organized games every week.
          </p>
          <div style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <StoreButton type="apple" />
            <StoreButton type="google" />
          </div>
          <p style={{ color: '#c9c0ab', fontSize: 12, marginTop: 20, opacity: 0.6 }}>
            Free to download · No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        borderTop: '1px solid rgba(42,74,61,0.4)',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#f2a63b" />
              <path d="M6 18L12 6L18 18" stroke="#1c1205" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 14H16" stroke="#1c1205" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Coachr
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Contact'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  color: '#c9c0ab',
                  fontSize: 13,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f6f1e7')}
                onMouseLeave={e => (e.currentTarget.style.color = '#c9c0ab')}
              >
                {link}
              </a>
            ))}
          </div>

          <p style={{ color: '#c9c0ab', fontSize: 12, opacity: 0.6 }}>
            © {new Date().getFullYear()} Coachr. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

function StoreButton({ type }: { type: 'apple' | 'google' }) {
  return (
    <a
      href="#"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: '#f2a63b',
        color: '#1c1205',
        padding: '12px 22px',
        borderRadius: 12,
        fontWeight: 700,
        fontSize: 15,
        transition: 'background 0.2s, transform 0.1s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.background = '#d4882a'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.background = '#f2a63b'
      }}
    >
      {type === 'apple' ? (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1c1205">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </>
      ) : (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1c1205">
            <path d="M3.18 23.76c.37.2.8.25 1.23.13l12.44-7.19-2.63-2.63-11.04 9.69zm-1.04-21.3C2.06 2.6 2 2.79 2 3v18c0 .21.06.4.14.57l.1.09 10.09-10.09v-.24L2.24 2.37l-.1.09zm18.7 9.16l-2.57-1.48-2.89 2.89 2.89 2.89 2.59-1.5c.74-.43.74-1.36-.02-1.8zm-16.13 9.92l11.26-6.5-2.62-2.62-8.64 9.12z" />
          </svg>
          Google Play
        </>
      )}
    </a>
  )
}
