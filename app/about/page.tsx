export default function About() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '4rem 2rem',
      fontFamily: 'Georgia, serif',
      color: '#1c1917',
      background: '#faf7f2',
      minHeight: '100vh',
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 900,
        marginBottom: '0.5rem',
        color: '#1c1917',
      }}>About EntryHire</h1>
      <p style={{ color: '#78716c', marginBottom: '2rem', fontSize: '0.9rem' }}>
        Helping young South Africans launch their careers
      </p>

      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: '#44403c' }}>
        EntryHire is South Africa dedicated platform for entry-level opportunities — internships, learnerships, and graduate programmes — curated daily for ambitious young South Africans ready to start their careers.
      </p>

      <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Our Mission</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: '#44403c' }}>
        We believe every young South African deserves a fair chance at a great career. EntryHire makes it easier to find and apply for entry-level opportunities by bringing them all into one place.
      </p>

      <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>What We Cover</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: '#44403c' }}>
        We list opportunities across all 9 provinces of South Africa including internships, learnerships, graduate programmes, and entry-level jobs across industries including technology, finance, engineering, marketing, and healthcare.
      </p>

      <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Who We Are</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: '#44403c' }}>
        EntryHire was founded by Lebogang Ramathibela, a young South African professional passionate about creating opportunities for the next generation of SA talent.
      </p>

      <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Contact Us</h2>
      <p style={{ lineHeight: 1.8, color: '#44403c' }}>
        We would love to hear from you — whether you are a job seeker, employer, or partner.
        <br /><br />
        Email: <a href="mailto:careers@entryhire.co.za" style={{ color: '#ea580c' }}>careers@entryhire.co.za</a><br />
        Website: <a href="https://entryhire.co.za" style={{ color: '#ea580c' }}>entryhire.co.za</a>
      </p>
    </div>
  )
}
