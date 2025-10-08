'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isHovered, setIsHovered] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mkgjjzoq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    section: { padding: '4rem 1.5rem', backgroundColor: '#fff', textAlign: 'center' },
    form: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      borderRadius: '8px',
      outline: 'none',
      backgroundColor:'#fceeee',
      color: '#000',
    },
    textarea: {
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      borderRadius: '8px',
      outline: 'none',
      resize: 'vertical',
      backgroundColor:'#fceeee',
      color: '#000',
    },
    button: {
      padding: '0.85rem 1rem',
      fontSize: '1rem',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#e05957',
      color: '#fff',
      transition: 'background-color 0.3s',
    },
    status: { marginTop: '1rem', fontSize: '0.95rem', color: '#e05957' },
  };

  return (
    <section style={styles.section} id="contact">
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1a202c' }}>Contact</h2>
      <p style={{ color: '#4a5568',marginBottom: '3rem' }}>If you have any questions or inquiries, feel free to reach out!</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <textarea
          style={styles.textarea}
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
        />
        <button type="submit" 
            style={{
      ...styles.button,
      backgroundColor: isHovered ? '#c94b4a' : '#e05957',
      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
          Send Message
        </button>
        {status && <div style={styles.status}>{status}</div>}
      </form>
    </section>
  );
}
