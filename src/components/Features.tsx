import React from 'react'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Roster Management',
    description: 'Easily add and manage all your players with positions, availability, and preferences. Import entire rosters from Excel in one tap.',
    accent: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Instant Lineup Generation',
    description: 'Generate fair, balanced lineups in seconds. Our smart algorithm distributes players evenly across all innings automatically.',
    accent: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: 'Fair Playing Time',
    description: 'Every player plays every inning. Set bench time limits to guarantee no one sits too long — keeping kids engaged and parents happy.',
    accent: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Game Calendar',
    description: 'Schedule and track all your games in one place. Record scores, locations, opponent info, and link lineups directly to each game.',
    accent: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'Export & Share',
    description: 'Export lineups as PDF or Excel files and share directly with parents, assistants, or your whole team. Print-ready and mobile-friendly.',
    accent: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: 'Custom Rules',
    description: 'Configure sport type, player counts, gender balance requirements, position locks, and custom instructions. Built for your team\'s unique needs.',
    accent: false,
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(126,207,157,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel text="FEATURES" />
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          marginBottom: 16,
          lineHeight: 1.1,
        }}>
          Everything a coach needs,{' '}
          <span style={{ color: '#f2a63b' }}>nothing they don't.</span>
        </h2>
        <p style={{ color: '#c9c0ab', fontSize: 17, maxWidth: 560, marginBottom: 60 }}>
          From building your roster to exporting the final lineup — Coachr handles the complexity so you can focus on coaching.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {features.map((feat, i) => (
            <FeatureCard key={i} {...feat} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent: boolean
}

function FeatureCard({ icon, title, description, accent }: FeatureCardProps) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: accent
          ? 'linear-gradient(135deg, rgba(242,166,59,0.12) 0%, rgba(24,49,41,0.9) 100%)'
          : 'rgba(24,49,41,0.6)',
        border: `1px solid ${accent ? 'rgba(242,166,59,0.35)' : hovered ? 'rgba(42,74,61,1)' : 'rgba(42,74,61,0.6)'}`,
        borderRadius: 16,
        padding: '28px 24px',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: accent ? 'rgba(242,166,59,0.2)' : 'rgba(42,74,61,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accent ? '#f2a63b' : '#7ecf9d',
        marginBottom: 16,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: 17,
        fontWeight: 700,
        color: '#f6f1e7',
        marginBottom: 8,
        letterSpacing: '-0.3px',
      }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#c9c0ab', lineHeight: 1.65 }}>{description}</p>
    </div>
  )
}

export function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
      color: '#7ecf9d',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '1.5px',
    }}>
      <span style={{ width: 20, height: 2, background: '#7ecf9d', display: 'inline-block', borderRadius: 2 }} />
      {text}
    </div>
  )
}
