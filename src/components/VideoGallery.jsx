import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const HospitalVideoGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalVideo, setModalVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoItems = [
    {
      id: 1,
      category: 'patients',
      videoUrl: 'freeMegaCampVideo.mp4',
      thumbnail: 'freeCamp.png',
      title: 'Free Mega Health Camp at Jigyasa Hospital',
      description: 'A video showcasing the Free Mega Health Camp at Jigyasa Super Speciality Hospital, where patients received free consultations and health check-ups.',
      duration: '1:31'
    },
    {
      id: 2,
      category: 'all',
      videoUrl: 'republicDayVideo.mp4',
      thumbnail: 'republicDay.png',
      title: 'Republic Day Celebration at Jigyasa Hospital',
      description: 'A video capturing the Republic Day celebration at Jigyasa Super Speciality Hospital, honoring the spirit of unity, patriotism, and national pride.',
      duration: '0:42'
    },
    {
      id: 3,
      category: 'patients',
      videoUrl: 'opdCampVideo.mp4',
      thumbnail: 'opdCamp.png',
      title: 'Free OPD Health Camp at Jigyasa Hospital',
      description: 'A free OPD camp organized by Jigyasa Super Speciality Hospital, providing consultations and basic health services to patients.',
      duration: '0:30'
    },
    {
      id: 4,
      category: 'doctors',
      videoUrl: 'pregencyCareAdviceVideo.mp4',
      thumbnail: '/doctors/dr-akansha.jpg',
      title: 'Pregnancy Care Advice by Dr. Akasha Singh',
      description: 'Dr. Akasha Singh shares expert advice on safe pregnancy care, maternal health, and important precautions for expecting mothers.',
      duration: '0:54'
    },
    {
      id: 5,
      category: 'doctors',
      videoUrl: 'heartCareAdvice.mp4',
      thumbnail: '/doctors/dr-amit-kumar-singh.jpg',
      title: 'Heart Care Advice by Dr. Amit Kumar Singh',
      description: 'Learn about our patient-centered approach to healthcare and recovery.',
      duration: '1:24'
    },
    {
      id: 6,
      category: 'doctors',
      videoUrl: 'boneCareAdviceVideo.mp4',
      thumbnail: '/doctors/dr-shariq.jpg',
      title: 'Bone Care Advice by Dr. Shariq Ahmad',
      description: 'Dr. Shariq Ahmad shares expert advice on bone health, joint care, and prevention of bone-related problems.',
      duration: '1:07'
    },
    {
      id: 7,
      category: 'doctors',
      videoUrl: 'skinCareAdviceVideo.mp4',
      thumbnail: '/doctors/dr-abida-ali.jpg',
      title: 'Skin Care Advice by Dr. Abida Ali',
      description: 'Dr. Abida Ali shares expert tips on skin care, common skin concerns, and maintaining healthy skin.',
      duration: '1:32'
    },
    {
      id: 8,
      category: 'doctors',
      videoUrl: 'trainingvd.mp4',
      thumbnail: 'training.png',
      title: 'Infection Control & Hand Hygiene Training',
      description: 'A training session focused on infection control practices and proper hand hygiene to ensure patient safety and prevent the spread of infections.',
      duration: '0:56'
    },
    {
      id: 9,
      category: 'all',
      videoUrl: 'HeartDayVd.mp4',
      thumbnail: 'worldHeartDay.jpeg',
      title: 'World Heart Day Celebration at Jigyasa Hospital',
      description: 'A video capturing the World Heart Day celebration at Jigyasa Super Speciality Hospital, spreading awareness about heart health and healthy living.',
      duration: '0:39'
    },
    {
      id: 10,
      category: 'equipment',
      videoUrl: 'dialysisService.mp4',
      thumbnail: 'opreation.png',
      title: 'Available Dialysis Services at Jigyasa Hospital',
      description: 'Jigyasa Super Speciality Hospital offers reliable dialysis services with modern equipment and expert care for kidney patients.',
      duration: '0:58'
    },
    {
      id: 11,
      category: 'patients',
      videoUrl: 'patientCareVd.mp4',
      thumbnail: 'ph-5.jpeg',
      title: 'Doctor’s Care & Concern for Patients',
      description: 'A video highlighting the doctor’s dedication, compassion, and continuous care towards patients’ health and well-being.',
      duration: '0:29'
    },
    // {
    //   id: 12,
    //   category: 'doctors',
    //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    //   thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    //   title: 'Nursing Excellence',
    //   description: 'A day in the life of our compassionate nursing staff.',
    //   duration: '6:00'
    // }
  ];

  const filters = [
    { id: 'all', label: 'All Videos' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'patients', label: 'Patient Care' },
   
  ];

  const filteredItems = activeFilter === 'all' 
    ? videoItems 
    : videoItems.filter(item => item.category === activeFilter);

  const openModal = (video) => {
    setModalVideo(video);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalVideo(null);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && modalVideo) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalVideo]);

  // Inline Styles
  const styles = {
    app: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #f4f6fb 0%, #e8f0fe 100%)',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    hero: {
      background: 'linear-gradient(to right, rgba(9, 33, 83, 0.9), rgba(9, 33, 83, 0.6)), url("https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&h=800&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '50vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '0 1rem'
    },
    heroTitle: {
      fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      margin: 0
    },
    filterTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      padding: '40px 20px',
      flexWrap: 'wrap',
      background: 'rgba(255, 255, 255, 0.5)'
    },
    filterBtn: {
      padding: '12px 28px',
      background: 'white',
      border: '2px solid #0dbd9d',
      color: '#0dbd9d',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: 'clamp(0.85rem, 2vw, 1rem)',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(13, 189, 157, 0.1)',
      outline: 'none'
    },
    filterBtnActive: {
      background: 'linear-gradient(135deg, #0dbd9d, #25b1a8)',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(13, 189, 157, 0.3)'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 5%'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
      gap: '30px'
    },
    card: {
      background: 'linear-gradient(145deg, #ffffff, #f8fbff)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(13, 189, 157, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      border: '1px solid rgba(13, 189, 157, 0.08)'
    },
    videoWrapper: {
      position: 'relative',
      width: '100%',
      height: '300px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #e8f0fe, #f4f6fb)'
    },
    thumbnail: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    // playButton: {
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: '80px',
    //   height: '80px',
    //   background: 'linear-gradient(135deg, #0dbd9d, #25b1a8)',
    //   borderRadius: '50%',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   boxShadow: '0 8px 30px rgba(13, 189, 157, 0.5)',
    //   transition: 'all 0.3s ease',
    //   zIndex: 2
    // },
    // playIcon: {
    //   width: 0,
    //   height: 0,
    //   borderLeft: '25px solid white',
    //   borderTop: '15px solid transparent',
    //   borderBottom: '15px solid transparent',
    //   marginLeft: '8px'
    // },
    duration: {
      position: 'absolute',
      bottom: '15px',
      right: '15px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      zIndex: 2
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to top, rgba(13, 189, 157, 0.3), transparent)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '20px',
      zIndex: 1
    },
    category: {
      background: 'white',
      color: '#0dbd9d',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textTransform: 'capitalize'
    },
    info: {
      padding: '25px'
    },
    title: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      color: '#111',
      marginBottom: '10px',
      fontWeight: '700',
      transition: 'color 0.3s ease'
    },
    description: {
      fontSize: 'clamp(0.87rem, 2vw, 0.95rem)',
      color: '#666',
      lineHeight: '1.6',
      margin: 0
    },
    modal: {
      display: modalVideo ? 'flex' : 'none',
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.95)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    modalContent: {
      width: '100%',
      maxWidth: '1200px',
      position: 'relative',
      aspectRatio: '16/9'
    },
    modalClose: {
      position: 'absolute',
      top: '-50px',
      right: '0',
      color: 'white',
      fontSize: 'clamp(30px, 5vw, 40px)',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      userSelect: 'none',
      zIndex: 10
    },
    iframe: {
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
    }
  };

  return (
    <div style={styles.app}>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
          }

          .video-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 16px 48px rgba(13, 189, 157, 0.15), 0 8px 32px rgba(0, 0, 0, 0.08);
            border-color: rgba(13, 189, 157, 0.2);
          }

          .video-card:hover .video-thumbnail {
            transform: scale(1.1);
          }

          .video-card:hover .video-overlay {
            opacity: 1;
          }

          .video-card:hover .video-title {
            color: #0dbd9d;
          }

          .video-card:hover .play-button {
            transform: translate(-50%, -50%) scale(1.15);
            box-shadow: 0 12px 40px rgba(13, 189, 157, 0.6);
          }

          .filter-btn:hover {
            background: linear-gradient(135deg, #0dbd9d, #25b1a8);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(13, 189, 157, 0.3);
          }

          .modal-close:hover {
            color: #0dbd9d;
          }

          @media (max-width: 600px) {
            .video-wrapper {
              height: 220px !important;
            }
            
            .play-button {
              width: 60px !important;
              height: 60px !important;
            }
            
            .play-icon {
              border-left-width: 18px !important;
              border-top-width: 11px !important;
              border-bottom-width: 11px !important;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Hospital Video Gallery</h1>
      </div>

      {/* Filter Tabs */}
      <div style={styles.filterTabs}>
        {filters.map(filter => (
          <button
            key={filter.id}
            className="filter-btn"
            style={{
              ...styles.filterBtn,
              ...(activeFilter === filter.id ? styles.filterBtnActive : {})
            }}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div style={styles.container}>
        <div style={styles.grid}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="video-card"
              style={styles.card}
              onClick={() => openModal(item)}
            >
              <div 
                className="video-wrapper"
                style={styles.videoWrapper}
              >
                <img 
                  className="video-thumbnail"
                  src={item.thumbnail} 
                  alt={item.title} 
                  style={styles.thumbnail}
                />
                <div className="play-button" style={styles.playButton}>
                  <div className="play-icon" style={styles.playIcon}></div>
                </div>
                <div style={styles.duration}>{item.duration}</div>
                <div className="video-overlay" style={styles.overlay}>
                  <span style={styles.category}>
                    {filters.find(f => f.id === item.category)?.label || item.category}
                  </span>
                </div>
              </div>
              <div style={styles.info}>
                <h3 className="video-title" style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalVideo && (
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" style={styles.modalClose} onClick={closeModal}>
              &times;
            </span>
            <iframe
              style={styles.iframe}
              src={`${modalVideo.videoUrl}${isPlaying ? '?autoplay=1' : ''}`}
              title={modalVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default HospitalVideoGallery;