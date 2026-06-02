export default function Hero() {
  return (
    <section style={{
      background: '#faf7f2',
      padding: '4rem 2.5rem 3rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 280px',
        gap: '2rem',
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#fff7ed',
            color: '#ea580c',
            border: '1px solid #fed7aa',
            padding: '5px 14px',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 600,
            marginBottom: '1.25rem',
          }}>
            South Africa No.1 Entry-Level Platform
          </div>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#1c1917',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            Launch Your<br />
            <span style={{ color: '#ea580c', fontStyle: 'italic' }}>Career</span> in<br />
            South Africa
          </h1>
          <p style={{
            color: '#78716c',
            fontSize: '1rem',
            lineHeight: 1.75,
            maxWidth: '420px',
            marginBottom: '2rem',
            fontWeight: 300,
          }}>
            Internships, learnerships and graduate programmes curated daily for ambitious young South Africans ready to start.
          </p>
          <div style={{
            display: 'flex',
            background: '#fff',
            border: '1.5px solid #e7e5e4',
            borderRadius: '100px',
            overflow: 'hidden',
            maxWidth: '420px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
          }}>
            <input
              type="text"
              placeholder="Search jobs, companies, keywords..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '13px 20px',
                fontSize: '0.9rem',
                color: '#1c1917',
                background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
            <button style={{
              background: '#ea580c',
              color: '#fff',
              border: 'none',
              padding: '0 22px',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
              borderRadius: '100px',
              margin: '4px',
              fontFamily: 'inherit',
            }}>
              Search
            </button>
          </div>
        </div>
        <div style={{
          background: '#1c1917',
          borderRadius: '24px',
          padding: '2rem',
          color: '#fff',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '3.5rem',
            fontWeight: 900,
            color: '#ea580c',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>1,247</div>
          <p style={{ fontSize: '0.85rem', color: '#a8a29e', fontWeight: 300 }}>Active job listings across South Africa</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: 'Internships', count: '412' },
              { label: 'Learnerships', count: '389' },
              { label: 'Graduate Progs', count: '446' },
            ].map((item) => (
              <div key={item.label} style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '0.8rem', color: '#a8a29e' }}>{item.label}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
        background: '#fff',
        borderTop: '1.5px solid #e7e5e4',
        borderBottom: '1.5px solid #e7e5e4',
      }}>
        {[
          { num: '1 247', label: 'Active Listings' },
          { num: '340+', label: 'Companies Hiring' },
          { num: '9', label: 'Provinces Covered' },
          { num: '48', label: 'New Jobs Today' },
        ].map((stat, i) => (
          <div key={stat.label} style={{
            flex: 1,
            textAlign: 'center',
            padding: '1.5rem 1rem',
            borderRight: i < 3 ? '1.5px solid #e7e5e4' : 'none',
          }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontWeight: 900, color: '#ea580c' }}>{stat.num}</div>
            <div style={{ fontSize: '0.75rem', color: '#78716c', marginTop: '3px' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
