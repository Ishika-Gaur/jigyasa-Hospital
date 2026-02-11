import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const FamilyMedicine = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Common Infections",
      description:
        "Treatment of fever, cough, cold, flu, throat infections, urinary tract infections, and gastrointestinal infections with accurate diagnosis and appropriate medications."
    },
    {
      name: "Diabetes & Hypertension",
      description:
        "Long-term management of diabetes and high blood pressure through regular monitoring, medications, lifestyle counseling, and prevention of complications."
    },
    {
      name: "Respiratory & Digestive Disorders",
      description:
        "Care for asthma, bronchitis, acidity, gastritis, constipation, and irritable bowel symptoms with medical treatment and lifestyle guidance."
    },
    {
      name: "Preventive Health Check-ups",
      description:
        "Routine health screenings, vaccinations, and wellness assessments to detect diseases early and maintain long-term health."
    },
    {
      name: "Chronic Disease & Geriatric Care",
      description:
        "Holistic management of arthritis, thyroid disorders, anemia, and age-related health issues with continuous and compassionate care."
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
          <div className="tag-badge">👨‍👩‍👧‍👦 Family Medicine</div>
          <h1 className="hero-title">Family Medicine & Primary Care</h1>
          <p className="hero-subtitle">
            Comprehensive, continuous, and personalized healthcare for every
            family member
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Family Medicine Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Family Medicine Department at{" "}
              <strong>Jigyasa Hospital</strong> provides comprehensive, lifelong
              healthcare for individuals and families across all age groups,
              focusing on prevention, early diagnosis, and continuity of care.
            </p>
            <p>
              Our family physicians act as your primary healthcare partners,
              offering personalized care that considers medical history,
              lifestyle, and long-term health goals with compassion and
              coordination.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/03/e3/d7/03e3d717249c5922f911fcbb339c899f.jpg"
              alt="Family Medicine Department"
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
            <h2>Preventive Healthcare</h2>
            <ul>
              <li><strong>Annual health check-ups</strong></li>
              <li><strong>Vaccination programs</strong></li>
              <li><strong>Lifestyle & wellness counseling</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Chronic Disease Management</h2>
            <ul>
              <li><strong>Diabetes & hypertension care</strong></li>
              <li><strong>Asthma, COPD & thyroid disorders</strong></li>
              <li><strong>Long-term disease monitoring</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Women & Child Health</h2>
            <ul>
              <li><strong>Antenatal & postnatal care</strong></li>
              <li><strong>Pediatric & adolescent health</strong></li>
              <li><strong>Menopause & women’s wellness</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Geriatric & Home Care</h2>
            <ul>
              <li><strong>Comprehensive geriatric assessment</strong></li>
              <li><strong>Home visits & palliative care</strong></li>
              <li><strong>Elderly & dementia support</strong></li>
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
            Click on a condition to learn more about our family medicine care
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

export default FamilyMedicine;
