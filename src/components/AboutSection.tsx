'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '6rem 1rem',
      backgroundColor: '#fff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: 700,
      color: '#1a202c',
    },
    paragraph: {
      marginTop: '0.75rem',
      fontSize: '1rem',
      color: '#4a5568',
    },
    intro: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem',
      gap: '2rem',
    },
    image: {
      backgroundColor: '#edf2f7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.9rem',
      color: '#718096',
      width: '25%',
      height: '100%',
      borderRadius: '0.5rem',
      flexShrink: 0,
    },
    textContent: {
      flex: 1,
      minWidth: '280px',
      maxWidth: '600px',
      textAlign: 'left',
    },
    paraone: {
      fontSize: '1rem',
      color: '#4a5568',
      lineHeight: 1.7,
      marginBottom: '1rem',
    },
    techs: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
      textAlign: 'center',
      marginTop: '2rem',
    },
    techCard: {
      backgroundColor: '#f7fafc',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    },
    techTitle: {
      fontWeight: 600,
      color: '#2d3748',
      fontSize: '1rem',
    },
    techLevel: {
      fontSize: '0.85rem',
      color: '#718096',
      marginTop: '0.25rem',
    },
    buttonContainer: {
      marginTop: '2rem',
    },
    button: {
      display: 'inline-block',
      padding: '0.9rem 2rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#fff',
      backgroundColor: '#e05957',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginTop: '3rem',
    },
  };

  // Handle hover effect manually using React state
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>My Introduction</p>

        <div style={styles.intro}>
          <div style={styles.image}>
<Image 
  src="/hero-image.jpg" 
  alt="About Me" 
  width={300} 
  height={300} 
  style={{ borderRadius: '0.5rem', objectFit: 'cover' }} 
/>          </div>

          <div style={styles.textContent}>
            <p style={styles.paraone}>
              I am a passionate Full Stack Developer with expertise in React, React Native, JavaScript,
              Node.js, MongoDB, SQL Server, Firebase, Express.js, and Cloud Computing. I specialize in
              building high-performance web and mobile applications, combining functionality with seamless
              user experiences.
            </p>
            <p style={styles.paraone}>
              With a keen interest in MLOps and DevOps, I continuously explore cutting-edge technologies
              to optimize deployment workflows and enhance application scalability. My passion is creating
              impactful projects that improve people’s lives.
            </p>

            <div style={styles.techs}>
              <div style={styles.techCard}>
                <div style={styles.techTitle}>Product Automation</div>
                <div style={styles.techLevel}>Expert</div>
              </div>
              <div style={styles.techCard}>
                <div style={styles.techTitle}>Product Development</div>
                <div style={styles.techLevel}>Expert</div>
              </div>
              <div style={styles.techCard}>
                <div style={styles.techTitle}>Full Stack Development</div>
                <div style={styles.techLevel}>Expert</div>
              </div>
            </div>

            <div style={styles.buttonContainer}>
<a href="/Resume.pdf" download style={{ textDecoration: 'none' }}>
  <button
    style={{
      ...styles.button,
      backgroundColor: isHovered ? '#c94b4a' : '#e05957',
      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    Download Resume
  </button>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
