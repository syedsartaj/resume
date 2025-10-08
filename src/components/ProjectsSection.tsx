'use client';
import React from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Hodor Project',
      description:
        'Developed an event tracking and task automation system integrated with ClickUp, Recoil, and RudderStack.',
      link: '#',
    },
    {
      title: 'Parents Portal',
      description:
        'Built a React Native + Firebase app where students can chat with AI for study doubts.',
      link: '#',
    },
    {
      title: 'Hodor Project',
      description:
        'Developed an event tracking and task automation system integrated with ClickUp, Recoil, and RudderStack.',
      link: '#',
    },
    {
      title: 'Parents Portal',
      description:
        'Built a React Native + Firebase app where students can chat with AI for study doubts.',
      link: '#',
    },
    {
      title: 'Hodor Project',
      description:
        'Developed an event tracking and task automation system integrated with ClickUp, Recoil, and RudderStack.',
      link: '#',
    },
    {
      title: 'Parents Portal',
      description:
        'Built a React Native + Firebase app where students can chat with AI for study doubts.',
      link: '#',
    },
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 1.5rem',
    backgroundColor: '#ffff',
    boxSizing: 'border-box',
    width: '100%',
  };

  const headingStyle: React.CSSProperties = {
    marginTop:'3rem',
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1a202c',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#1a202c',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#4a5568',
    marginBottom: '1rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#2563eb',
    fontWeight: 500,
    textDecoration: 'none',
    alignSelf: 'flex-start',
  };

  return (
    <section style={sectionStyle} id="portfolio">
      <h2 style={headingStyle}>Projects</h2>

      <div style={gridStyle}>
        {projects.map((project) => (
          <div
            key={project.title}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)')
            }
          >
            <h3 style={titleStyle}>{project.title}</h3>
            <p style={descriptionStyle}>{project.description}</p>
            <a
              href={project.link}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: 1.75rem !important; margin-bottom: 2rem !important; }
          div[style*="grid"] { gap: 1.5rem !important; }
          div[style*="padding: 1.5rem"] { padding: 1rem !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 1.5rem !important; }
          p { font-size: 0.875rem !important; }
        }
      `}</style>
    </section>
  );
}
