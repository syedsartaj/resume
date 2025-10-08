'use client';
import React, { useState } from 'react';

type Work = { title: string; company: string; period: string };
type Education = { title: string; school: string; period: string };

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '6rem 1.5rem',
      backgroundColor: '#fceeee',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      marginTop:'3rem',
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '3rem',
      color: '#1a202c',
      textAlign: 'center',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '0.75rem 2rem',
      fontSize: '1rem',
      fontWeight: 600,
      borderRadius: '999px',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      backgroundColor: '#e5e7eb',
      color: '#1a202c',
    },
    activeTab: {
      backgroundColor: '#e05957',
      color: '#fff',
    },
    timeline: {
      position: 'relative',
      width: '4px',
      backgroundColor: '#e5e7eb',
      margin: '0 auto',
      flexShrink: 0,
    },
    timelineContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
    },
    card: {
      position: 'relative',
      width: '45%',
      padding: '1.5rem',
      borderRadius: '1rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      marginBottom: '3rem',
      transition: 'all 0.3s ease-in-out',
    },
    leftCard: {
      alignSelf: 'flex-start',
      textAlign: 'right',
      marginRight: 'calc(50% + 2rem)',
    },
    rightCard: {
      alignSelf: 'flex-end',
      textAlign: 'left',
      marginLeft: 'calc(50% + 2rem)',
    },
    circle: {
      position: 'absolute',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: '#e05957',
      border: '4px solid #fff',
      zIndex: 10,
    },
    contentTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#1a202c',
    },
    contentSub: {
      fontSize: '1rem',
      color: '#4a5568',
    },
    '@media': {
      // For responsive stacking on mobile
      card: {
        width: '90%',
        textAlign: 'left',
        marginLeft: '0 !important',
        marginRight: '0 !important',
      },
    },
  };

  const workExperience: Work[] = [
    { title: 'Full Stack Engineer', company: 'Optiblack', period: '03/2025 - Present' },
    { title: 'React Native Developer', company: 'freelance', period: '12/2023 - 02/2024' },
    { title: 'Mobile Application Developer', company: 'Noor Al Khair (Freelance)', period: '04/2024 - 11/2024' },
  ];

  const education: Education[] = [
    { title: 'B.Tech in Computer Science & AIML', school: 'GNIT', period: '2020 - 2024' },
    { title: 'Board of Intermediate Education', school: 'Narayana Junior College', period: '2018 - 2020' },
    { title: 'Board of Secondary Education', school: 'Alberta Concept High School', period: '2017 - 2018' },
  ];

  const data = activeTab === 'work' ? workExperience : education;

  return (
    <section style={styles.section} id="qualifications">
      <h2 style={styles.heading}>Qualifications</h2>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        <div
          style={{ ...styles.tab, ...(activeTab === 'work' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('work')}
        >
          Work Experience
        </div>
        <div
          style={{ ...styles.tab, ...(activeTab === 'education' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('education')}
        >
          Education
        </div>
      </div>

      {/* Timeline */}
<div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
  {/* Timeline line */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '4px',
      backgroundColor: '#e05957',
      borderRadius: '2px',
    }}
  />

  {/* Cards */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', width: '100%', maxWidth: '800px' }}>
    {data.map((item, index) => {
      const isLeft = index % 2 === 0;
      const title = item.title;
      const subtitle = 'company' in item ? `${item.company} | ${item.period}` : `${item.school} | ${item.period}`;

      return (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: isLeft ? 'flex-start' : 'flex-end',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '300px',
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'left',
              color: '#1a202c',
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</div>
            <div style={{ fontSize: '0.875rem', color: '#555' }}>{subtitle}</div>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </section>
  );
};

export default Qualification;
