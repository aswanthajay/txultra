import { MessageSquare, Film, Tv, Heart, Bell, AlertCircle, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [linkLoading, setLinkLoading] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChannelClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setLinkLoading(true);
    
    // Simulate a brief loading time before redirecting
    setTimeout(() => {
      setLinkLoading(false);
      window.open(url, '_blank');
    }, 1000);
  };

  const telegramChannels = [
    {
      id: 1,
      name: "Tx Mallu 18+",
      url: "https://t.me/thundflixmovies",
      description: "20K Mallu Collection Mix"
    },
    {
      id: 2,
      name: "Tx Ultra 18+",
      url: "https://t.me/thundflixseries",
      description: "20K Ultra Collection Mix"
    },
    {
      id: 3,
      name: "Tx Mallu Ultra",
      url: "https://t.me/thundflixanime",
      description: "20K Mallu Ultra Collection"
    },
    {
      id: 4,
      name: "Tx All Collection",
      url: "https://t.me/thundflixupdates",
      description: "All collection mix Monthly Updates"
    },
    {
      id: 5,
      name: "Tx Daily 18+",
      url: "https://t.me/thundflixsupport",
      description: "Daily Channel Updates"
    }
  ];

  return (
    <>
      {loading || linkLoading ? (
        <Preloader />
      ) : (
        <div className="app-container">
          <div className="grid-overlay"></div>
          <Header />
          <main className="main-content">
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="glitch" data-text="THUNDFLIX">THUNDFLIX</h1>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#ff4444',
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <AlertCircle size={16} />
                  <span>Adult Content 18+</span>
                </div>
                <div className="channels-grid" style={{ 
                  marginTop: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  padding: '0 1rem',
                  maxWidth: '500px',
                  margin: '0 auto',
                  width: '100%'
                }}>
                  {telegramChannels.map((channel) => (
                    <a 
                      key={channel.id}
                      href={channel.url}
                      onClick={(e) => handleChannelClick(e, channel.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="join-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1.2rem 2rem',
                        borderRadius: '50px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        width: '100%',
                        minWidth: '280px',
                        textAlign: 'left',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        color: 'white',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 68, 68, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(255, 68, 68, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <div style={{ 
                        marginRight: '1rem', 
                        color: '#ff4444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255, 68, 68, 0.1)',
                        backdropFilter: 'blur(8px)',
                        fontWeight: '700',
                        fontSize: '1.2rem'
                      }}>
                        TX
                      </div>
                      <div>
                        <div style={{ 
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          {channel.name}
                          <ExternalLink size={14} style={{ color: '#ff4444' }} />
                          {channel.name.includes('18+') && (
                            <span style={{ 
                              fontSize: '0.7rem', 
                              padding: '2px 6px',
                              borderRadius: '4px',
                              background: 'rgba(255, 68, 68, 0.2)',
                              color: '#ff4444'
                            }}>
                              18+
                            </span>
                          )}
                        </div>
                        <div style={{ 
                          fontSize: '0.8rem', 
                          opacity: '0.8',
                          marginTop: '0.2rem' 
                        }}>
                          {channel.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;