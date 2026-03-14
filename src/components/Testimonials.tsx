import React from 'react'
import { SectionLabel } from './Features'

const testimonials = [
  {
    quote: "I used to spend 30 minutes every game day figuring out who plays where. Now I tap a button and it's done. Every kid plays every inning — parents love it.",
    name: 'Mike R.',
    role: 'Youth Softball Coach, 8 seasons',
    initials: 'MR',
    color: '#f2a63b',
  },
  {
    quote: "The fair play time feature is a game changer. No more arguments about who sat too long. Coachr tracks it all automatically and the kids stay engaged.",
    name: 'Sarah K.',
    role: 'Rec League Coach, ages 10–12',
    initials: 'SK',
    color: '#7ecf9d',
  },
  {
    quote: "I manage 3 teams and Coachr keeps everything organized. Separate rosters, different rules, and I can generate lineups back-to-back on game days. Incredible app.",
    name: 'David L.',
    role: 'Travel Ball Manager',
    initials: 'DL',
    color: '#f2a63b',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, transparent, rgba(24,49,41,0.25), transparent)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionLabel text="COACHES LOVE COACHR" />
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
          }}>
            Real coaches. <span style={{ color: '#f2a63b' }}>Real results.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(24,49,41,0.6)',
                border: '1px solid rgba(42,74,61,0.6)',
                borderRadius: 16,
                padding: '28px 24px',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 14 14" fill="#f2a63b">
                    <path d="M7 1l1.545 4.752H13.18l-3.895 2.83 1.487 4.574L7 10.323l-3.772 2.833 1.487-4.574L.82 5.752H5.455z" />
                  </svg>
                ))}
              </div>

              <p style={{
                fontSize: 15,
                color: '#c9c0ab',
                lineHeight: 1.7,
                marginBottom: 20,
                fontStyle: 'italic',
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: `${t.color}22`,
                  border: `1px solid ${t.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: t.color,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#f6f1e7' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#c9c0ab' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
