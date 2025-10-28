import { useState, useEffect } from 'react';
import historyText from '../assets/images/feature-history-text.svg';
import '../assets/css/global.css';
import { experiences } from '../data/experiences';

// Import all history images
import apparImg from '../assets/images/history/appar-website.png';
import taischoolImg from '../assets/images/history/taischool-website.png';
import wapreponlineImg from '../assets/images/history/wapreponline.png';
import consentFormImg from '../assets/images/history/consent-form.png';
import ihmedImg from '../assets/images/history/ihmed.png';
import greattreeImg from '../assets/images/history/greattree.png';
import chaosImg from '../assets/images/history/chaos.png';

// Create a map of image names to imported images
const imageMap = {
  'appar-website.png': apparImg,
  'taischool-website.png': taischoolImg,
  'wapreponline.png': wapreponlineImg,
  'consent-form.png': consentFormImg,
  'ihmed.png': ihmedImg,
  'greattree.png': greattreeImg,
  'chaos.png': chaosImg,
};

const History = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedExperience]);

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="section" style={{ padding: '50px 0' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <img width={300} style={{ rotate: '-10deg' }} src={historyText} alt="history-text" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '50px',
          }}
        >
          {experiences.map((item, index) => (
            <div
              key={index}
              className="history-card"
              onClick={() => openModal(item)}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '250px',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                }}
                className="history-image-container"
              >
                <img
                  src={imageMap[item.image]}
                  alt={item.projectName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  className="history-image"
                />
              </div>

              <div
                style={{
                  background: 'linear-gradient(135deg, #87e8d4 0%, #5ec4a9 100%)',
                  padding: '25px 20px',
                  textAlign: 'center',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'rgba(255, 255, 255, 0.3)',
                  }}
                ></div>

                <div
                  style={{
                    fontSize: '14px',
                    opacity: '0.95',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontWeight: '500',
                  }}
                >
                  {item.companyName}
                </div>

                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {item.projectName}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'rgba(255, 255, 255, 0.2)',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '1400px',
              width: '95%',
              maxHeight: '60vh',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                minWidth: '40px',
                minHeight: '40px',
                padding: 0,
                margin: 0,
                fontSize: '24px',
                lineHeight: '1',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'rgba(0, 0, 0, 0.7)')}
              onMouseLeave={(e) => (e.target.style.background = 'rgba(0, 0, 0, 0.5)')}
            >
              ×
            </button>

            {/* Modal content - Left: Image, Right: Details */}
            <div
              style={{
                display: 'flex',
                height: '60vh',
              }}
            >
              {/* Left side - Image */}
              <div
                style={{
                  flex: '0 0 70%',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                }}
              >
                <img
                  src={imageMap[selectedExperience.image]}
                  alt={selectedExperience.projectName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                />
              </div>

              {/* Right side - Details */}
              <div
                style={{
                  flex: '0 0 30%',
                  padding: '35px 30px 35px 30px',
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
                  textAlign: 'left',
                }}
              >
                {/* Company Name */}
                <div
                  style={{
                    fontSize: '13px',
                    color: '#999',
                    marginBottom: '8px',
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textAlign: 'left',
                  }}
                >
                  {selectedExperience.companyName}
                </div>

                {/* Project Name */}
                <div
                  style={{
                    fontSize: '28px',
                    color: '#333',
                    marginBottom: '15px',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    textAlign: 'left',
                  }}
                >
                  {selectedExperience.projectName}
                </div>

                {/* Separator line */}
                <div
                  style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(135deg, #87e8d4 0%, #5ec4a9 100%)',
                    marginBottom: '25px',
                    textAlign: 'left',
                  }}
                ></div>

                {/* Description */}
                {selectedExperience.description && (
                  <div
                    style={{
                      marginBottom: '20px',
                      textAlign: 'left',
                      fontSize: '13px',
                      color: '#888',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                    }}
                  >
                    {selectedExperience.description}
                  </div>
                )}

                {/* Items List - will be populated from experiences */}
                <div
                  style={{
                    flex: 1,
                    marginBottom: '20px',
                    textAlign: 'left',
                  }}
                >
                  {selectedExperience.items && selectedExperience.items.length > 0 ? (
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        textAlign: 'left',
                      }}
                    >
                      {selectedExperience.items.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '10px',
                            paddingLeft: '16px',
                            position: 'relative',
                            lineHeight: '1.5',
                            textAlign: 'left',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: 0,
                              color: '#5ec4a9',
                              fontWeight: 'bold',
                              fontSize: '18px',
                            }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div
                      style={{
                        fontSize: '13px',
                        color: '#999',
                        fontStyle: 'italic',
                        textAlign: 'left',
                      }}
                    >
                      (項目內容待補充)
                    </div>
                  )}
                </div>

                {/* Tags and Links Container */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '20px',
                    borderTop: '1px solid #eee',
                    textAlign: 'left',
                  }}
                >
                  {/* Tags */}
                  {selectedExperience.tag && selectedExperience.tag.length > 0 && (
                    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          justifyContent: 'flex-start',
                        }}
                      >
                        {selectedExperience.tag.map((tech, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: '#f0f0f0',
                              color: '#666',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              fontSize: '11px',
                              fontWeight: '500',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  {selectedExperience.link && selectedExperience.link.length > 0 && (
                    <div style={{ textAlign: 'left' }}>
                      {selectedExperience.link.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            color: '#5ec4a9',
                            fontSize: '13px',
                            textDecoration: 'none',
                            marginRight: '15px',
                            fontWeight: '500',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => (e.target.style.color = '#4ab89c')}
                          onMouseLeave={(e) => (e.target.style.color = '#5ec4a9')}
                        >
                          {link.title} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .history-card:hover .history-image {
          transform: scale(0.9);
        }
        .history-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .history-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default History;
