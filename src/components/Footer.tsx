import React from 'react';
import { Send, Twitter, Instagram, Youtube, Github, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <Send size={24} color="#ff0000" />
            <span className="logo-text">THUND<span className="text-red-600">FLIX</span></span>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              <Twitter size={20} />
              <ExternalLink size={12} className="external-link-icon" />
            </a>
            <a href="#" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link">
              <Youtube size={20} />
            </a>
            <a href="#" className="social-link">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Thundflix. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer