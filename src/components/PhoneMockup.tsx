import React from 'react'

export default function PhoneMockup() {
  return (
    <div
      style={{
        position: 'relative',
        width: 280,
        animation: 'float 4s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {/* Glow */}
      <div style={{
        position: 'absolute',
        inset: -30,
        background: 'radial-gradient(ellipse, rgba(242,166,59,0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Phone shell */}
      <div style={{
        width: 280,
        height: 560,
        background: '#0f1f18',
        borderRadius: 40,
        border: '8px solid #2a4a3d',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 100, height: 28,
          background: '#2a4a3d',
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
          zIndex: 10,
        }} />

        {/* Screen content */}
        <div style={{ padding: '44px 16px 16px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 10, color: '#c9c0ab' }}>Thursday, Jun 12</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#f6f1e7' }}>Game Day</div>
            </div>
            <div style={{
              background: 'rgba(126,207,157,0.2)',
              border: '1px solid rgba(126,207,157,0.4)',
              borderRadius: 6,
              padding: '3px 8px',
              fontSize: 10,
              color: '#7ecf9d',
              fontWeight: 600,
            }}>READY</div>
          </div>

          {/* Inning row label */}
          <div style={{ fontSize: 11, color: '#c9c0ab', fontWeight: 600, marginTop: 4 }}>
            INNING 1 — 10 PLAYERS
          </div>

          {/* Player rows */}
          {[
            { name: 'Alex M.', pos: 'Pitcher', accent: true },
            { name: 'Jordan L.', pos: 'Catcher', accent: false },
            { name: 'Sam T.', pos: '1st Base', accent: false },
            { name: 'Riley K.', pos: 'Shortstop', accent: false },
            { name: 'Casey W.', pos: 'Left Field', accent: false },
          ].map((player, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: player.accent ? 'rgba(242,166,59,0.1)' : 'rgba(24,49,41,0.8)',
                border: `1px solid ${player.accent ? 'rgba(242,166,59,0.3)' : 'rgba(42,74,61,0.6)'}`,
                borderRadius: 8,
                padding: '7px 10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: player.accent ? '#f2a63b' : '#2a4a3d',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, fontWeight: 700, color: player.accent ? '#1c1205' : '#7ecf9d',
                }}>
                  {player.name[0]}
                </div>
                <span style={{ fontSize: 11, color: '#f6f1e7', fontWeight: 600 }}>{player.name}</span>
              </div>
              <span style={{
                fontSize: 10,
                color: player.accent ? '#f2a63b' : '#c9c0ab',
                fontWeight: 500,
              }}>{player.pos}</span>
            </div>
          ))}

          {/* More badge */}
          <div style={{
            textAlign: 'center',
            fontSize: 10,
            color: '#c9c0ab',
            padding: '2px 0',
          }}>+ 5 more players</div>

          {/* Bottom CTA */}
          <div style={{ marginTop: 'auto' }}>
            <div style={{
              background: '#f2a63b',
              color: '#1c1205',
              borderRadius: 10,
              padding: '10px',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 12,
            }}>
              Export Lineup
            </div>
          </div>

          {/* Tab bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            borderTop: '1px solid rgba(42,74,61,0.6)',
            paddingTop: 8,
          }}>
            {[
              { icon: '⌂', label: 'Home' },
              { icon: '◉', label: 'Roster' },
              { icon: '≡', label: 'Lineup', active: true },
              { icon: '⊡', label: 'Games' },
              { icon: '⊙', label: 'Profile' },
            ].map(tab => (
              <div key={tab.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, color: tab.active ? '#f2a63b' : '#2a4a3d' }}>{tab.icon}</div>
                <div style={{ fontSize: 8, color: tab.active ? '#f2a63b' : '#2a4a3d' }}>{tab.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
