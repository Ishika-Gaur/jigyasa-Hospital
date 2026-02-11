import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Chest = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Asthma",
      description:
        "Chronic respiratory condition causing wheezing, breathlessness, chest tightness, and cough. Managed with personalized inhaler therapy, medications, and long-term control plans."
    },
    {
      name: "Chronic Obstructive Pulmonary Disease (COPD)",
      description:
        "Progressive lung disease commonly caused by smoking or pollution, leading to chronic cough and shortness of breath. Treated with medications, pulmonary rehabilitation, and lifestyle modification."
    },
    {
      name: "Pneumonia",
      description:
        "Lung infection caused by bacteria, viruses, or fungi resulting in fever, cough, chest pain, and breathing difficulty. Managed with prompt diagnosis and targeted treatment."
    },
    {
      name: "Tuberculosis (TB)",
      description:
        "Infectious lung disease causing prolonged cough, fever, weight loss, and night sweats. Treated with complete anti-tubercular therapy and close follow-up."
    },
    {
      name: "Interstitial Lung Disease & Chronic Chest Infections",
      description:
        "Conditions causing lung scarring or recurrent infections leading to breathlessness and reduced lung capacity. Managed with advanced diagnostics and long-term respiratory care."
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
          <div className="tag-badge">🫁 Respiratory Medicine</div>
          <h1 className="hero-title">Respiratory & Chest Care Department</h1>
          <p className="hero-subtitle">
            Advanced diagnosis and treatment for lung and breathing disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">
            About Respiratory Medicine Department
          </h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Respiratory Medicine Department at{" "}
              <strong>Jigyasa Hospital</strong> provides comprehensive,
              compassionate, and advanced care for patients suffering from a
              wide range of lung and breathing disorders.
            </p>
            <p>
              Our experienced pulmonologists offer expert care for asthma, COPD,
              tuberculosis, pneumonia, interstitial lung diseases, and sleep-
              related breathing disorders using modern diagnostic and treatment
              technologies.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/1f/c2/33/1fc233f62827a5ebb37fa077b1caa6da.jpg"
              alt="Respiratory Medicine Department"
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
            <h2>Respiratory Diagnostics</h2>
            <ul>
              <li><strong>Pulmonary function tests (PFTs)</strong></li>
              <li><strong>Bronchoscopy & thoracoscopy</strong></li>
              <li><strong>HRCT & advanced chest imaging</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Asthma & COPD Care</h2>
            <ul>
              <li><strong>Personalized asthma management</strong></li>
              <li><strong>COPD medication & pulmonary rehab</strong></li>
              <li><strong>Smoking cessation programs</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Critical & Advanced Respiratory Care</h2>
            <ul>
              <li><strong>Respiratory ICU & ventilator support</strong></li>
              <li><strong>Oxygen therapy & NIV</strong></li>
              <li><strong>Sleep apnea evaluation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>TB & Lung Infection Care</h2>
            <ul>
              <li><strong>Drug-sensitive & drug-resistant TB</strong></li>
              <li><strong>Pneumonia & chest infection treatment</strong></li>
              <li><strong>Long-term lung disease management</strong></li>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
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
            Click on a condition to learn more about our respiratory care
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

export default Chest;
