import React, { useState, useEffect } from 'react';
import { Send, ExternalLink } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <Send size={24} color="#ff0000" />
          <span className="logo-text">THUND<span className="text-red-600">FLIX</span></span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Channels</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        <button className="connect-btn">
          <span>Connect</span>
          <div className="btn-glow"></div>
        </button>
      </div>
    </header>
  );
}

export default Header