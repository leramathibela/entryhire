'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

type Job = {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  duration: string
  apply_link: string
  posted_date: string
  closing_date: string
  initials: string
  color: string
  featured: boolean
}

const typeColors: Record<string, { bg: string; color: string; border: string }> = {
  'Internship': { bg: '#dbeafe', color: '#1d4ed8', border: '#bfdbfe' },
  'Learnership': { bg: '#ede9fe', color: '#7c3aed', border: '#ddd6fe' },
  'Graduate Programme': { bg: '#dcfce7', color: '#15803d', border: '#bbf7d0' },
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false })

      if (error) {
  console.error('Error fetching jobs:', error)
  alert('Jobs loaded: ' + (data?.length || 0))
} else {
  setJobs(data || [])
  alert('Jobs loaded: ' + (data?.length || 0))
}
      setLoading(false)
    }

    fetchJobs()
  }, [])

  if (loading) {
    return (
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '4rem 2.5rem',
        textAlign: 'center',
        color: '#78716c',
        fontFamily: 'Georgia, serif',
        fontSize: '1.2rem',
      }}>
        Loading opportunities...
      </div>
    )
  }

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

        {jobs.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#78716c', padding: '3rem' }}>
            No jobs found. Check back soon!
          </div>
        ) : (
          jobs.map((job) => (
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
                  background: job.color || '#1c1917',
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
                  background: typeColors[job.type]?.bg || '#f5f0e8',
                  color: typeColors[job.type]?.color || '#78716c',
                  border: `1.5px solid ${typeColors[job.type]?.border || '#e7e5e4'}`,
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
                {job.closing_date && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    background: '#fef2f2',
                    color: '#dc2626',
                    border: '1.5px solid #fecaca',
                  }}>⏰ Closes {new Date(job.closing_date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                )}
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
                <a
                  href={job.apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#1c1917',
                    color: '#fff',
                    border: 'none',
                    padding: '9px 20px',
                    borderRadius: '100px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}>Apply Now →</a>
              </div>
            </div>
          ))
        )}
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
