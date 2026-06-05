const jobs = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Standard Bank Group',
    location: 'Sandton, JHB',
    duration: 'Full-time',
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
    duration: 'Full-time',
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
    duration: '12 months',
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
    duration: 'Full-time',
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
    duration: '6 months',
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
    duration: '18 months',
    type: 'Learnership',
    salary: 'R7 200/month',
    color: '#0369a1',
    initials: 'SA',
    featured: false,
  },
  {
    id: 7,
    title: 'Graduate Internship Programme',
    company: 'SACAA',
    location: 'Nationwide',
    duration: '12 months',
    type: 'Internship',
    salary: 'Stipend provided',
    color: '#0284c7',
    initials: 'CA',
    featured: false,
  },
  {
    id: 8,
    title: 'SAP Digital Trust Graduate Programme',
    company: 'PwC South Africa',
    location: 'JHB / CPT / DBN',
    duration: 'Full-time',
    type: 'Graduate Programme',
    salary: 'Market related',
    color: '#dc2626',
    initials: 'PW',
    featured: false,
  },
  {
    id: 9,
    title: 'Junior Banking Learnership',
    company: 'Absa Group',
    location: 'Nationwide',
    duration: '12 months',
    type: 'Learnership',
    salary: 'Stipend provided',
    color: '#b45309',
    initials: 'AB',
    featured: false,
  },
  {
    id: 10,
    title: 'Pepkor Lifestyle Graduate Programme',
    company: 'Pepkor',
    location: 'Sandton, Gauteng',
    duration: 'Full-time',
    type: 'Graduate Programme',
    salary: 'Market related',
    color: '#7c3aed',
    initials: 'PK',
    featured: false,
  },
  {
    id: 11,
    title: 'PSG Graduate Programme 2027',
    company: 'PSG Financial Services',
    location: 'Gauteng / Western Cape',
    duration: 'Full-time',
    type: 'Graduate Programme',
    salary: 'Market related',
    color: '#0369a1',
    initials: 'PS',
    featured: false,
  },
  {
    id: 12,
    title: 'Foundation for the Future Consulting Programme',
    company: 'PwC South Africa',
    location: 'JHB / CPT / DBN',
    duration: 'Full-time',
    type: 'Graduate Programme',
    salary: 'Market related',
    color: '#dc2626',
    initials: 'PW',
    featured: false,
  },
  {
    id: 13,
    title: 'Insights Graduate Programme 2026',
    company: 'Premier FMCG',
    location: 'Midrand, Gauteng',
    duration: 'Full-time',
    type: 'Graduate Programme',
    salary: 'Market related',
    color: '#059669',
    initials: 'PF',
    featured: false,
  },
  {
    id: 14,
    title: 'YES Learnership Opportunities 2026',
    company: 'DHL Group',
    location: 'Nationwide',
    duration: '12 months',
    type: 'Learnership',
    salary: 'Stipend provided',
    color: '#d97706',
    initials: 'DH',
    featured: false,
  },
  {
    id: 15,
    title: 'Ascend Graduate Development Programme',
    company: 'Danone',
    location: 'Johannesburg',
    duration: 'Full-time',
    type: 'Graduate Programme',
    salary: 'Market related',
    color: '#7c3aed',
    initials: 'DN',
    featured: false,
  },
]

const typeColors: Record<string, { bg: string; color: string; border: string }> = {
  'Internship': { bg: '#dbeafe', color: '#1d4ed8', border: '#bfdbfe' },
  'Learnership': { bg: '#ede9fe', color: '#7c3aed', border: '#ddd6fe' },
  'Graduate Programme': { bg: '#dcfce7', color: '#15803d', border: '#bbf7d0' },
}

export default function Jobs() {
  return (
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 2.5rem 3rem',
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: '2rem',
    }}>
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
        }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#1c1917',
          }}>
            Latest{' '}
            <span style={{ color: '#ea580c', fontStyle: 'italic' }}>Opportunities</span>
          </h2>
          <select style={{
            background: '#fff',
            border: '1.5px solid #e7e5e4',
            color: '#1c1917',
            padding: '7px 12px',
            borderRadius: '100px',
            fontSize: '0.8rem',
            cursor: 'pointer',
            outline: 'none',
            fontFamily: 'inherit',
          }}>
            <option>Most Recent</option>
            <option>Most Relevant</option>
            <option>Salary: High to Low</option>
          </select>
        </div>

        {jobs.map((job) => (
          <div key={job.id} style={{
            background: job.featured
              ? 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)'
              : '#ffffff',
            border: `1.5px solid ${job.featured ? '#fed7aa' : '#e7e5e4'}`,
            borderRadius: '18px',
            padding: '1.5rem',
            marginBottom: '12px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.25s',
          }}>
            {job.featured && (
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#ea580c',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '100px',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
              }}>Featured</div>
            )}

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
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
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#1c1917',
                  marginBottom: '3px',
                  lineHeight: 1.3,
                }}>{job.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#78716c' }}>{job.company}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' as const, marginBottom: '1rem' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: 600,
                background: typeColors[job.type]?.bg,
                color: typeColors[job.type]?.color,
                border: `1.5px solid ${typeColors[job.type]?.border}`,
              }}>{job.type}</span>
              <span style={{
                padding: '4px 12px',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: 600,
                background: '#f5f0e8',
                color: '#78716c',
                border: '1.5px solid #e7e5e4',
              }}>📍 {job.location}</span>
              <span style={{
                padding: '4px 12px',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: 600,
                background: '#f5f0e8',
                color: '#78716c',
                border: '1.5px solid #e7e5e4',
              }}>🕐 {job.duration}</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '1rem',
              borderTop: '1.5px solid #e7e5e4',
            }}>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#1c1917',
              }}>{job.salary}</div>
              <button style={{
                background: '#1c1917',
                color: '#fff',
                border: 'none',
                padding: '9px 20px',
                borderRadius: '100px',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>Apply Now →</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div style={{
          background: '#fff',
          border: '1.5px solid #e7e5e4',
          borderRadius: '18px',
          padding: '1.5rem',
          marginBottom: '1rem',
        }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 700, color: '#1c1917', marginBottom: '1rem' }}>Browse by Location</div>
          {[
            { name: 'Johannesburg', count: '412' },
            { name: 'Cape Town', count: '287' },
            { name: 'Durban', count: '156' },
            { name: 'Pretoria', count: '198' },
            { name: 'Remote', count: '94' },
          ].map((item, i, arr) => (
            <div key={item.name} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: i < arr.length - 1 ? '1px solid #e7e5e4' : 'none',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}>
              <span style={{ color: '#1c1917', fontWeight: 500 }}>{item.name}</span>
              <span style={{ background: '#f5f0e8', color: '#78716c', padding: '2px 8px', borderRadius: '100px', fontSize: '0.72rem' }}>{item.count}</span>
            </div>
          ))}
        </div>

        <div style={{
          background: '#fff',
          border: '1.5px solid #e7e5e4',
          borderRadius: '18px',
          padding: '1.5rem',
          marginBottom: '1rem',
        }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 700, color: '#1c1917', marginBottom: '1rem' }}>Browse by Industry</div>
          {[
            { name: 'Technology & IT', count: '321' },
            { name: 'Finance & Banking', count: '214' },
            { name: 'Engineering', count: '178' },
            { name: 'Marketing', count: '143' },
            { name: 'Healthcare', count: '89' },
          ].map((item, i, arr) => (
            <div key={item.name} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: i < arr.length - 1 ? '1px solid #e7e5e4' : 'none',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}>
              <span style={{ color: '#1c1917', fontWeight: 500 }}>{item.name}</span>
              <span style={{ background: '#f5f0e8', color: '#78716c', padding: '2px 8px', borderRadius: '100px', fontSize: '0.72rem' }}>{item.count}</span>
            </div>
          ))}
        </div>

        <div style={{
          background: '#1c1917',
          borderRadius: '18px',
          padding: '1.75rem',
          color: '#fff',
        }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.75rem', lineHeight: 1.3 }}>Hiring entry-level talent?</h3>
          <p style={{ fontSize: '0.82rem', color: '#a8a29e', marginBottom: '1.25rem', lineHeight: 1.6, fontWeight: 300 }}>Reach 50 000+ young South African job seekers. Post your opportunity today.</p>
          <button style={{
            background: '#ea580c',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '100px',
            fontWeight: 600,
            fontSize: '0.875rem',
            cursor: 'pointer',
            width: '100%',
            fontFamily: 'inherit',
          }}>Post a Job — from R299</button>
        </div>
      </div>
    </div>
  )
             }
