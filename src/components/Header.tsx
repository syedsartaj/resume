import { useState } from "react";

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Qualifications", href: "#qualifications" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo">
          Syed Sartaj Ahmed
        </a>

        {/* Hamburger icon (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`menu-item ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setMenuOpen(false)} // close on mobile click
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Inline CSS for responsiveness */}
      <style>{`
        /* ===== Base Styles ===== */
        .header {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #fff;
          color: #111;
          box-shadow: 0 1px 6px rgba(0,0,0,0.1);
          z-index: 1000;
        }

        .nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
        }

        .logo {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: inherit;
        }

        .menu {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          transition: all 0.3s ease;
        }

        .menu-item {
          text-decoration: none;
          color: #111;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          transition: color 0.3s ease;
        }

        .menu-item.hovered,
        .menu-item:hover {
          color: #e05957;
        }

        /* ===== Hamburger Icon ===== */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 24px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #111;
          border-radius: 2px;
          margin: 3px 0;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* ===== Responsive (Mobile) ===== */
        @media (max-width: 768px) {
          .menu {
            position: absolute;
            top: 60px;
            right: 0;
            width: 100%;
            flex-direction: column;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            max-height: 0;
            overflow: hidden;
          }

          .menu.open {
            max-height: 300px; /* enough for menu items */
            padding: 1rem 0;
          }

          .menu-item {
            padding: 0.8rem 1rem;
            width: 100%;
            text-align: center;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
