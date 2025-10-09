'use client';
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/Background looping animation.json';

export default function SkillsSection() {
  // ✅ Categorized Skills
  const categorizedSkills: Record<string, string[]> = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'NextJs', 'React Native'],
    Backend: ['Node.js', 'NestJS', 'REST APIs', 'SaaS Solutions', '.NET'],
    Cloud: ['AWS', 'Google Cloud Platform', 'Firebase'],
    Databases: ['MongoDB', 'Firestore', 'SQL', 'NoSQL'],
    ML_DS: ['Python', 'Machine Learning', 'Algorithms', 'Predictive Analysis'],
    Tools: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Eclipse', 'VS Code', 'PyCharm'],
    Analytics: ['Mixpanel', 'RudderStack', 'MoEngage']
  };

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // ✅ Combine all skills when "All" is selected
  const allSkills = Object.values(categorizedSkills).flat();
  const displayedSkills =
    selectedCategory === 'All' ? allSkills : categorizedSkills[selectedCategory] || [];

  // ✅ Styles
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
    backgroundColor: '#fceeee',
    boxSizing: 'border-box',
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
    marginBottom: '2rem',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1100px',
    width: '100%',
  };

  const skillCardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#1a202c',
    fontWeight: 600,
    borderRadius: '1rem',
    padding: '1.2rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
  };

  const descriptionStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#4a5568',
    marginTop: '2rem',
    maxWidth: '800px',
    fontSize: '1rem',
    lineHeight: 1.6,
  };

  return (
    <section style={sectionStyle} id="skills">
      {/* ✅ Animated Background */}
      <div style={lottieContainerStyle}>
        <Lottie animationData={animationData} loop autoplay />
      </div>

      {/* ✅ Heading */}
      <h2 style={headingStyle}>My Skills</h2>

      {/* ✅ Filter Buttons */}
      <div style={filterBarStyle}>
        {['All', ...Object.keys(categorizedSkills)].map((category) => (
          <button
            key={category}
            style={filterButtonStyle(selectedCategory === category)}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'ML_DS' ? 'ML & DS' : category}
          </button>
        ))}
      </div>

      {/* ✅ Skills Grid */}
      <div style={gridStyle}>
        {displayedSkills.map((skill) => (
          <div
            key={skill}
            style={skillCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* ✅ Description */}
      <p style={descriptionStyle}>
        Select a category to explore my expertise. These are tools and technologies I use frequently.
      </p>

      {/* ✅ Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: 2rem !important; }
          button { font-size: 0.9rem !important; padding: 0.5rem 1rem !important; }
          div[style*="grid"] { gap: 1rem !important; }
          div[style*="padding: 1.2rem"] { padding: 1rem !important; font-size: 0.9rem !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 1.6rem !important; }
          p { font-size: 0.85rem !important; }
        }
      `}</style>
    </section>
  );
}
