import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Ear = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Ear Infections (Otitis)",
      description:
        "Infections of the outer, middle, or inner ear causing pain, discharge, fever, and hearing difficulty. Managed with accurate diagnosis, medications, and procedures to prevent complications."
    },
    {
      name: "Hearing Loss",
      description:
        "Partial or complete hearing loss due to aging, infections, noise exposure, or nerve damage. Treated with hearing evaluation, medical care, hearing aids, and rehabilitation."
    },
    {
      name: "Ear Wax (Cerumen Impaction)",
      description:
        "Excessive ear wax buildup causing blockage, discomfort, and reduced hearing. Managed with safe and painless wax removal techniques."
    },
    {
      name: "Tinnitus",
      description:
        "Ringing, buzzing, or humming sounds in the ears without an external source. Treated with medical management, counseling, and sound therapy."
    },
    {
      name: "Vertigo & Balance Disorders",
      description:
        "Inner ear conditions causing dizziness, spinning sensation, nausea, and imbalance. Managed with medications, repositioning maneuvers, and balance therapy."
    }
  ];

  const toggleDisease = (disease) => {
    setSelectedDisease(
      selectedDisease?.name === disease.name ? null : disease
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="body-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="tag-badge">👂 ENT</div>
          <h1 className="hero-title">ENT & Ear Care Department</h1>
          <p className="hero-subtitle">
            Advanced care for ear, hearing, balance, and ENT disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About ENT Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The ENT Department at <strong>Jigyasa Hospital</strong> provides
              comprehensive and patient-centered care for disorders of the ear,
              nose, and throat across all age groups.
            </p>
            <p>
              Our experienced ENT specialists diagnose and treat ear infections,
              hearing loss, dizziness, tinnitus, sinus disorders, and throat
              conditions using modern diagnostic tools and minimally invasive
              treatment techniques.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./ent.jpg"
              alt="ENT Department"
              className="about-image"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="section-header">
          <h1 className="section-title">Our Services</h1>
          <div className="title-underline"></div>
        </div>

        <div className="service-card-grid">
          <div className="service-card">
            <h2>ENT Diagnostics</h2>
            <ul>
              <li><strong>Audiometry & hearing tests</strong></li>
              <li><strong>ENT endoscopy</strong></li>
              <li><strong>CT & MRI imaging</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Medical ENT Care</h2>
            <ul>
              <li><strong>Ear infection & tinnitus treatment</strong></li>
              <li><strong>Vertigo & balance disorder care</strong></li>
              <li><strong>Sinus & throat disease management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>ENT Surgeries</h2>
            <ul>
              <li><strong>Hearing restoration procedures</strong></li>
              <li><strong>Endoscopic sinus surgery</strong></li>
              <li><strong>Tonsil & adenoid surgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Advanced ENT Care</h2>
            <ul>
              <li><strong>Sleep apnea management</strong></li>
              <li><strong>Voice therapy & rehabilitation</strong></li>
              <li><strong>Minimally invasive ENT procedures</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-section">
        <div className="section-header">
          <h1 className="section-title">Gallery</h1>
          <div className="title-underline"></div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          modules={[Pagination, Autoplay, FreeMode]}
          className="mySwiper"
        >
          {[1,2,3,4,5,6,7,8].map((num) => (
            <SwiperSlide key={num}>
              <img
                src={`./gallery${num}.png`}
                alt={`Gallery ${num}`}
                className="gallery-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Conditions Section */}
      <div className="diseases-section">
        <div className="section-header">
          <h1 className="section-title">Conditions We Treat</h1>
          <p className="diseases-subtext">
            Click on a condition to learn more about our ENT care services
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="diseases-list-expandable">
          <div className="diseases-columns">
            {diseases.map((disease, index) => (
              <div key={index} className="disease-item-wrapper">
                <div
                  className={`disease-item ${
                    selectedDisease?.name === disease.name ? "active" : ""
                  }`}
                  onClick={() => toggleDisease(disease)}
                >
                  <span className="disease-bullet">●</span>
                  <strong>{disease.name}</strong>
                  <span className="expand-icon">
                    {selectedDisease?.name === disease.name ? "−" : "+"}
                  </span>
                </div>

                {selectedDisease?.name === disease.name && (
                  <div className="disease-description">
                    <p>{disease.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ear;
