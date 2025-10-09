'use client';
import React, { useState } from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Hodor Project',
      description:
        'Developed an event tracking and task automation system integrated with ClickUp, Recoil, and RudderStack.',
      technologies: ['ClickUp', 'Recoil', 'RudderStack'],
      link: 'https://hodor.optiblack.com/',
      status: 'Completed',
    },
    {
      title: 'Parents Portal',
      description:
        'Built a React Native + Firebase app where students can chat with AI for study doubts.',
      technologies: ['React Native', 'Firebase', 'AI Chat'],
      link: 'https://play.google.com/store/apps/details?id=com.little.scholars.school01.app&pcampaignid=web_share',
      status: 'Completed',
    },
    {
      title: 'Colony Management App',
      description:
        'Built a colony maintenance app with property tracking, receipt management, and payment portal. Used Firebase for real-time database, authentication, and storage.',
      technologies: ['React Native', 'Firebase', 'Firestore', 'Storage', 'Authentication'],
      link: '#',
      status: 'Ongoing',
    },
    {
      title: 'Portfolio Website',
      description:
        'Developed a personal portfolio website using Python, containerized with Docker, and deployed on Google Cloud Run. Showcases projects, skills, and professional experience with an interactive UI.',
      technologies: ['Python', 'Docker', 'Google Cloud Run'],
      link: '#about',
      status: 'Completed',
    },
        {
      title: 'School Sync Portal',
      description:
        'Developed a React Native app for school administration and student portal, leveraging ML to predict student marks based on performance and attendance. Designed an intuitive UI for tablets and mobile, enabling real-time data access for administrators and educators.',
      technologies: ['React Native', 'Python', 'Machine Learning', 'Google Cloud Run'],
      link: '#',
      status: 'Completed',
    },
    {
      title: 'POS App',
      description:
        'Developed a restaurant billing app integrating Azure-hosted SQL Server backend with local SQLite for offline mode. Designed a tablet-optimized interface for efficient billing operations.',
      technologies: ['React Native', 'Express.js', 'SQL Server', 'Azure', 'SQLite'],
      link: '#',
      status: 'Completed',
    },
    {
      title: 'Smaksly',
      description:
        'A Wordpress like tool use to develop , maintain and host multiple sites from one Dashboard.',
      technologies: ['Next.js', 'Docker', 'Google Cloud Run', 'MongoDB','node.js'],
      link: '#',
      status: 'Ongoing',
    },
  ];

  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.status === filter);

  const sectionStyle: React.CSSProperties = {
    padding: '5rem 1.5rem',
    backgroundColor: '#fff',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1a202c',
  };

  const filterBarStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '2.5rem',
  };

  const filterButtonStyle: (active: boolean) => React.CSSProperties = (active) => ({
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    border: active ? '2px solid #e05957' : '2px solid #ddd',
    backgroundColor: active ? '#e05957' : '#fff',
    color: active ? '#fff' : '#333',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a202c',
    marginBottom: '0.75rem',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#4a5568',
    marginBottom: '1rem',
    lineHeight: 1.6,
  };

  const techListStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#e05957',
    marginBottom: '1rem',
    fontWeight: 500,
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

      {/* ✅ Filter Buttons */}
      <div style={filterBarStyle}>
        {['All', 'Completed', 'Ongoing'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={filterButtonStyle(filter === type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* ✅ Projects Grid */}
      <div style={gridStyle}>
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={titleStyle}>{project.title}</h3>
            <p style={descriptionStyle}>{project.description}</p>
            <p style={techListStyle}>
              <strong>Tech:</strong> {project.technologies.join(', ')}
            </p>
            { project.status === 'Completed' && (
              <a
                href={project.link}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
              View Project →
            </a>)}
          </div>
        ))}
      </div>

      {/* ✅ Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: 2rem !important; margin-bottom: 2rem !important; }
          button { font-size: 0.9rem !important; padding: 0.5rem 1rem !important; }
          div[style*="grid"] { gap: 1.5rem !important; }
          div[style*="padding: 1.5rem"] { padding: 1rem !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 1.6rem !important; }
          p { font-size: 0.875rem !important; }
        }
      `}</style>
    </section>
  );
}
