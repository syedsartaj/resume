'use client';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      padding: '3rem 1.5rem',
      backgroundColor: '#e05957',
      color: '#fff',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    social: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '1rem',
      flexWrap: 'wrap',
    },
    icon: {
      fontSize: '1.5rem',
      color: '#fff',
      transition: 'color 0.3s',
      cursor: 'pointer',
    },
    iconHover: {
      color: '#e05957',
    },
    copy: {
      fontSize: '0.875rem',
      color: '#cbd5e1',
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.title}>Syed Sartaj Ahmed</p>
      <div style={styles.social}>
        <a href="https://www.linkedin.com/in/syed-sartaj-666646257/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            style={styles.icon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0e76a8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
        <a href="https://www.instagram.com/syed_sartaj.pvt/" target="_blank" rel="noopener noreferrer">
          <FaInstagram
            style={styles.icon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e1306c')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
        <a href="https://github.com/syedsartaj" target="_blank" rel="noopener noreferrer">
          <FaGithub
            style={styles.icon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#6e5494')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=syedsartajahmed01@gmail.com&su=Let%27s%20Connect&body=Hi%20Sartaj,`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: 'inline-block', textDecoration: 'none' }}
>
          <FaEnvelope
            style={styles.icon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e05957')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
      </div>
      <p style={styles.copy}>&#169; Syed Sartaj Ahmed. All rights reserved.</p>
    </footer>
  );
}
