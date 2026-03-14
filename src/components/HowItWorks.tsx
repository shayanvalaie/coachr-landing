import React from 'react'
import { SectionLabel } from './Features'

const steps = [
  {
    number: '01',
    title: 'Build Your Roster',
    description: 'Add your players with their names, preferred positions, and availability. Import from a spreadsheet or add them one by one in minutes.',
    detail: 'Supports unlimited players, gender flags, and position preferences',
  },
  {
    number: '02',
    title: 'Set Your Rules',
    description: 'Configure your team rules once — sport type, innings, number of players on field, bench limits, and any special requirements.',
    detail: 'Saved automatically and reused every game',
  },
  {
    number: '03',
    title: 'Generate & Go',
    description: 'Tap generate and get a fair, balanced lineup instantly. Edit manually, export as PDF or Excel, and share with your team.',
    detail: 'Export to PDF, Excel, or share directly',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(24,49,41,0.3) 50%, transparent 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(242,166,59,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <SectionLabel text="HOW IT WORKS" />
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
          }}>
            Up and running in <span style={{ color: '#f2a63b' }}>3 minutes</span>
          </h2>
          <p style={{ color: '#c9c0ab', fontSize: 17, marginTop: 16, maxWidth: 500, margin: '16px auto 0' }}>
            No setup complexity. No learning curve. Just open the app and start coaching.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 0,
          position: 'relative',
        }}>
          {/* Connector line */}
          <style>{`
            @media (min-width: 880px) {
              .connector-line { display: block !important; }
            }
          `}</style>
          <div
            className="connector-line"
            style={{
              display: 'none',
              position: 'absolute',
              top: 48,
              left: '16.5%',
              right: '16.5%',
              height: 1,
              background: 'linear-gradient(90deg, transparent 0%, rgba(42,74,61,0.8) 20%, rgba(42,74,61,0.8) 80%, transparent 100%)',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface StepData {
  number: string
  title: string
  description: string
  detail: string
}

function StepCard({ step, isLast }: { step: StepData; isLast: boolean }) {
  return (
    <div style={{
      padding: '0 24px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Circle */}
      <div style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(242,166,59,0.2), rgba(24,49,41,0.8))',
        border: '2px solid rgba(242,166,59,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        position: 'relative',
        boxShadow: '0 0 30px rgba(242,166,59,0.15)',
      }}>
        <span style={{
          fontSize: 22,
          fontWeight: 900,
          color: '#f2a63b',
          letterSpacing: '-1px',
        }}>
          {step.number}
        </span>
      </div>

      <h3 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#f6f1e7',
        marginBottom: 12,
        letterSpacing: '-0.5px',
      }}>
        {step.title}
      </h3>

      <p style={{
        fontSize: 15,
        color: '#c9c0ab',
        lineHeight: 1.7,
        marginBottom: 16,
        maxWidth: 280,
      }}>
        {step.description}
      </p>

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(126,207,157,0.1)',
        border: '1px solid rgba(126,207,157,0.25)',
        borderRadius: 20,
        padding: '4px 12px',
        fontSize: 12,
        color: '#7ecf9d',
        fontWeight: 500,
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="5" fill="rgba(126,207,157,0.3)" />
          <path d="M3 5l1.5 1.5L7 3.5" stroke="#7ecf9d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {step.detail}
      </div>
    </div>
  )
}
