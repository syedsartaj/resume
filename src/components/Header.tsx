import { useState } from 'react';

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track which item is hovered


  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      width: '100%',
      position: 'fixed',
      top: 0,
      justifyContent: 'space-around',
      left: 0,
      zIndex: 1000,
      backgroundColor:'#fff',
      color: '#111',
      transition: 'all 0.3s ease',
    },
    nav: {
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 2rem',
    },
    logo: {
      fontSize: '1rem',
      fontWeight: '600',
      textDecoration: 'none',
      color: 'inherit',
      marginLeft: '10rem',
    },
    menu: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: '#fff',
      color: '#111',
      padding: '0.6rem 1.2rem',
    },
    menuItems: {
      display: 'flex',
      flexDirection: 'row',

      textDecoration: 'none',
      color: '#111',
      fontSize: '0.85rem',
      transition: 'color 0.3s ease', // Smooth transition for color
      padding: '0.5rem',
      fontWeight: '600',
        margin: '0 0.5rem',
    },
    menuItemsHovered: {
      color: '#e05957', // Color on hover
    },
    btns: {
      display: 'flex',
      alignItems: 'center',
    },
    themeIcon: {
      cursor: 'pointer',
      fontSize: '1.5rem',
    },
    toggle: {
      cursor: 'pointer',
      fontSize: '1.5rem',
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a href="#" style={styles.logo}>
          Syed Sartaj Ahmed
        </a>

        <div style={styles.menu}>
          <a
            href="#"
            style={{
              ...styles.menuItems,
              ...(hoveredIndex === 0 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Home clicked')}
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              ...styles.menuItems,
              ...(hoveredIndex === 1 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('About clicked')}
          >
            About
          </a>
          <a
            href="#skills"
            style={{
              ...styles.menuItems,
              ...(hoveredIndex === 2 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Skills clicked')}
          >
            Skills
          </a>
          <a
            href="#qualifications"
            style={{
              ...styles.menuItems,
              ...(hoveredIndex === 3 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Qualifications clicked')}
          >
            Qualifications
          </a>
          <a
            href="#portfolio"
            style={{
              ...styles.menuItems,
              ...(hoveredIndex === 4 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Projects clicked')}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{
              ...styles.menuItems,
              ...(hoveredIndex === 5 ? styles.menuItemsHovered : {}),
            }}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Contact clicked')}
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
