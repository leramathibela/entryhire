const jobs = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Standard Bank',
    location: 'Sandton, JHB',
    type: 'Internship',
    salary: 'R12 000/month',
    color: '#1a56db',
    initials: 'SB',
    featured: true,
  },
  {
    id: 2,
    title: 'Financial Analyst Graduate Programme',
    company: 'Nedbank',
    location: 'Cape Town',
    type: 'Graduate Programme',
    salary: 'R18 500/month',
    color: '#059669',
    initials: 'NB',
    featured: true,
  },
  {
    id: 3,
    title: 'IT Support Learnership NQF Level 4',
    company: 'Vodacom',
    location: 'JHB / CPT / DBN',
    type: 'Learnership',
    salary: 'R6 500/month',
    color: '#e11d48',
    initials: 'VC',
    featured: false,
  },
  {
    id: 4,
    title: 'Digital Marketing Graduate',
    company: 'Deloitte Africa',
    location: 'Pretoria',
    type: 'Graduate Programme',
    salary: 'R15 000/month',
    color: '#7c3aed',
    initials: 'DL',
    featured: false,
  },
  {
    id: 5,
    title: 'Data Science Intern',
    company: 'FNB',
    location: 'Randburg, JHB',
    type: 'Internship',
    salary: 'R9 000/month',
    color: '#d97706',
    initials: 'FNB',
    featured: false,
  },
  {
    id: 6,
    title: 'Accounting Learnership',
    company: 'SARS',
    location: 'Nationwide',
    type: 'Learnership',
    salary: 'R7 200/month',
    color: '#0369a1',
    initials: 'SA',
    featured: false,
  },
]

const typeColors: Record<string, { bg: string; color: string }> = {
  'Internship': { bg: '#0d3d5c', color: '#5bc4f5' },
  'Learnership': { bg: '#2d1f5e', color: '#a78bfa' },
  'Graduate Programme': { bg: '#1a3a1a', color: '#6bcf7f' },
}

export default function Jobs() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{
        fontWeight: 900,
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        color: '#e8f0ee',
      }}>
        Latest <span style={{ color: '#00e5a0' }}>Opportunities</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {jobs.map((job) => (
          <div key={job.id} style={{
            background: '#131918',
            border: `1px solid ${job.featured ? 'rgba(0,229,160,0.3)' : '#243030'}`,
            borderRadius: '16px',
            padding: '1.5rem',
            position: 'relative',
            cursor: 'pointer',
          }}>
            {job.featured && (
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0,229,160,0.1)',
                border: '1px solid rgba(0,229,160,0.3)',
                color: '#00e5a0',
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '100px',
              }}>⭐ Featured</div>
            )}

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: job.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.9rem',
                color: '#fff',
                flexShrink: 0,
              }}>{job.initials}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '3px' }}>{job.title}</div>
                <div style={{ color: '#7a9490', fontSize: '0.875rem' }}>{job.company} · {job.location}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  background: typeColors[job.type]?.bg,
                  color: typeColors[job.type]?.color,
                }}>{job.type}</span>
                <span style={{ color: '#00e5a0', fontWeight: 700, fontSize: '0.95rem' }}>{job.salary}</span>
              </div>
              <button style={{
                background: '#00e5a0',
                color: '#0b0f0e',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}>Apply Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}