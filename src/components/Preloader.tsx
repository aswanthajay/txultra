import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className={`logo-container ${expanded ? 'expanded' : ''}`}>
        <span className="tx">TX</span>
        <span className="full-text">THUNDFLIX</span>
      </div>
    </div>
  );
};

export default Preloader;