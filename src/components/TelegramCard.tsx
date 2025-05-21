import React from 'react';
import { ExternalLink } from 'lucide-react';
import './TelegramCard.css';

interface TelegramCardProps {
  name: string;
  url: string;
  icon: string;
}

const TelegramCard: React.FC<TelegramCardProps> = ({ name, url, icon }) => {
  return (
    <div className="telegram-card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-icon">{icon}</div>
          <h3 className="card-title">{name}</h3>
        </div>
        <div className="card-hover-content">
          <a href={url} target="_blank" rel="noopener noreferrer" className="join-btn">
            <span>Join Channel</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="card-glow"></div>
      <div className="card-noise"></div>
    </div>
  );
};

export default TelegramCard