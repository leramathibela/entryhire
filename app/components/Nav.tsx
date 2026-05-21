export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      height: '64px',
      background: 'rgba(11,15,14,0.95)',
      borderBottom: '1px solid #243030',
    }}>
      <a href="/" style={{
        fontFamily: 'sans-serif',
        fontWeight: 900,
        fontSize: '1.4rem',
        color: '#e8f0ee',
        textDecoration: 'none',
      }}>
        Entry<span style={{ color: '#00e5a0' }}>Hire</span>
      </a>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#" style={{ color: '#7a9490', fontSize: '0.9rem' }}>Jobs</a>
        <a href="#" style={{ color: '#7a9490', fontSize: '0.9rem' }}>Blog</a>
        <a href="#" style={{ color: '#7a9490', fontSize: '0.9rem' }}>Companies</a>
        <a href="#" style={{
          background: '#00e5a0',
          color: '#0b0f0e',
          padding: '8px 18px',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '0.875rem',
        }}>Post a Job</a>
      </div>
    </nav>
  )
}