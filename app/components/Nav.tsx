export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2.5rem',
      height: '68px',
      background: '#faf7f2',
      borderBottom: '1.5px solid #e7e5e4',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <a href="/" style={{
        fontFamily: 'Georgia, serif',
        fontWeight: 900,
        fontSize: '1.5rem',
        color: '#1c1917',
        textDecoration: 'none',
      }}>
        Entry<span style={{ color: '#ea580c' }}>Hire</span>
      </a>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#" style={{ color: '#78716c', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Jobs</a>
        <a href="#" style={{ color: '#78716c', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Companies</a>
        <a href="#" style={{ color: '#78716c', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Blog</a>
        <button style={{
          background: '#1c1917',
          color: '#fff',
          padding: '9px 20px',
          borderRadius: '100px',
          fontSize: '0.875rem',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
        }}>Post a Job</button>
      </div>
    </nav>
  )
}    </nav>
  )
}
