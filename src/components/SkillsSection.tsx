'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/Background looping animation.json';

export default function SkillsSection() {
  const skills = [
    'React.js', 'Next.js', 'Node.js', 'NestJS', 'TypeScript',
    'Python', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL',
    'Machine Learning', 'RudderStack',
  ];

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '5rem 1.5rem',
    boxSizing: 'border-box',
    backgroundColor: '#fceeee',
  };

  const lottieContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -10,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1a202c',
    textAlign: 'center',
    marginBottom: '3.5rem',
    zIndex: 10,
    position: 'relative',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    width: '100%',
    zIndex: 10,
    position: 'relative',
  };

  const skillCardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#1a202c',
    fontWeight: 600,
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'default',
  };

  const descriptionStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#4a5568',
    marginTop: '2.5rem',
    maxWidth: '800px',
    fontSize: '1rem',
    lineHeight: 1.6,
    zIndex: 10,
    position: 'relative',
  };

  return (
    <section style={sectionStyle} id="skills">
      {/* Lottie Background */}
      <div style={lottieContainerStyle}>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Heading */}
      <h2 style={headingStyle}>My Skills</h2>

      {/* Skills Grid */}
      <div style={gridStyle}>
        {skills.map((skill, index) => (
          <div
            key={skill}
            style={{
              ...skillCardStyle,
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Description */}
      <p style={descriptionStyle}>
        These are some of the technologies and tools I’ve been working with
        recently.
      </p>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: 2rem !important; margin-bottom: 2rem !important; }
          div[style*="grid"] { gap: 1rem !important; }
          div[style*="padding: 1.5rem"] { padding: 1rem !important; font-size: 0.9rem !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 1.75rem !important; }
          p { font-size: 0.875rem !important; }
        }
      `}</style>
    </section>
  );
}
