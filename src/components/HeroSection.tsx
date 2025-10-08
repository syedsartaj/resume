'use client';
import React from 'react';
import { useState } from 'react';
import { FaMailBulk, FaWhatsapp, FaLinkedin, FaGithub, FaChevronRight,FaMouse,FaArrowDown } from 'react-icons/fa';

const AboutSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track which item is hovered
    const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const [isHovered, setIsHovered] = React.useState(false);

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      paddingTop: '16rem',
      paddingBottom: '5rem',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    container: {
      flexBasis: '30%',
      maxWidth: '1200px',
      margin: '0 auto',
      alignItems: 'flex-start',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#1a202c',
    },
    paragraph: {
      marginTop: '1rem',
      fontSize: '1.125rem',
      color: '#4a5568',
      maxWidth: '48rem',
      margin: '0 auto',
    },
    paragraphs: {
      marginTop: '1rem',
      fontSize: '1.15rem',
      fontWeight: 600,
      color: '#4a5568',
      maxWidth: '48rem',
      margin: '0 auto',
      marginBottom: '0.5rem',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 700,
      marginTop: '2rem',
      padding: '0.85rem 1.5rem',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#e05957',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 500,
      marginTop: '6rem',
      padding: '0.85rem 1.5rem',
      fontSize: '0.875rem',
      color: 'black',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    nav__icon: {
      fontSize: '1.25rem',
      color: '#e05957',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    navi__icon: {
      fontSize: '1.2rem',
      color: '#fff',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      marginLeft: '0.5rem',
    },
    navi__icons:{
      fontSize: '1rem',
      color: '#e05957',
      transition: 'color 0.3s ease',
      marginLeft: '0.5rem',
      marginRight:'0.5rem',
    },
    seccontainer: {
      flexBasis: '45%',
    },
    firstContainer: {
      flexBasis: '25%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '300px',
      marginRight: '2rem',
    },
    menuItemsHovered: {
      fontSize: '0.9rem',
    },
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={styles.section} id="#">
      <div style={styles.firstContainer}>
        <a
          href="https://www.linkedin.com/in/syed-sartaj-666646257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={styles.nav__icon} />
        </a>

        <a href="https://github.com/syedsartaj" target="_blank" rel="noopener noreferrer">
          <FaGithub style={styles.nav__icon} />
        </a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=syedsartajahmed01@gmail.com&su=Let's%20Connect&body=Hi%20Sartaj,"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: 'inline-block', textDecoration: 'none' }}
>
  <FaMailBulk style={styles.nav__icon} />
</a>

        <a href="https://wa.me/971583070147" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={styles.nav__icon} />
        </a>
      </div>

      <div style={styles.container}>
        <h2 style={styles.heading}>Hi, I'm Sartaj</h2>
        <p style={styles.paragraphs}>AI/ML Engineer | Full Stack Engineer</p>
        <p style={styles.paragraph}>
          {"A developer with a passion for solving problems with data, design, and engineering."}
        </p>

        <button 
                        style={{
                  ...styles.button,
                  backgroundColor: isHovered ? '#c94b4a' : '#e05957',
                  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
 onClick={handleScrollToContact}>
          Contact Me <FaChevronRight style={styles.navi__icon} />
        </button>

        <button
          onClick={handleScrollToAbout}
            style={{
              ...styles.buttons,
              ...(hoveredIndex === 0 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
        >
          <FaMouse style={styles.navi__icons} />Scroll down<FaArrowDown style={styles.navi__icons} />
        </button>
      </div>

      <div style={styles.seccontainer}></div>
    </section>
  );
};

export default AboutSection;

