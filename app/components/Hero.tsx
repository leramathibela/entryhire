export default function Hero() {
  return (
    <section style={{
      padding: '100px 2rem 80px',
      textAlign: 'center',
      background: 'radial-gradient(ellipse at top, rgba(0,229,160,0.1) 0%, transparent 60%)',
    }}>
      <div style={{
        display: 'inline-block',
        background: 'rgba(0,229,160,0.1)',
        border: '1px solid rgba(0,229,160,0.3)',
        color: '#00e5a0',
        padding: '6px 14px',
        borderRadius: '100px',
        fontSize: '0.8rem',
        fontWeight: 500,
        marginBottom: '1.5rem',
      }}>
        South Africa Number 1 Entry-Level Jobs Platform
      </div>

      <h1 style={{
        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
        fontWeight: 900,
        lineHeight: 1.05,
        marginBottom: '1.5rem',
        color: '#e8f0ee',
      }}>
        Launch Your Career<br />
        in <span style={{ color: '#00e5a0' }}>South Africa</span>
      </h1>

      <p style={{
        color: '#7a9490',
        fontSize: '1.1rem',
        maxWidth: '520px',
        margin: '0 auto 2.5rem',
        lineHeight: 1.7,
      }}>
        Internships, learnerships, graduate programmes curated daily for ambitious young South Africans.
      </p>

      <div style={{
        display: 'flex',
        maxWidth: '580px',
        margin: '0 auto',
        background: '#131918',
        border: '1px solid #243030',
        borderRadius: '14px',
        overflow: 'hidden',
      }}>
        <input
          type="text"
          placeholder="Search jobs, companies, keywords..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: '16px 20px',
            color: '#e8f0ee',
            fontSize: '1rem',
          }}
        />
        <button style={{
          background: '#00e5a0',
          color: '#0b0f0e',
          border: 'none',
          padding: '0 28px',
          fontWeight: 700,
          fontSize: '0.9rem',
          cursor: 'pointer',
        }}>
          Search
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '4rem',
        flexWrap: 'wrap',
      }}>
        {[
          { num: '1 247', label: 'Active Listings' },
          { num: '340+', label: 'Companies Hiring' },
          { num: '9', label: 'Provinces Covered' },
          { num: '48', label: 'New Jobs Today' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#00e5a0' }}>{stat.num}</div>
            <div style={{ fontSize: '0.8rem', color: '#7a9490', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
