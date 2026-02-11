import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Ankle = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Ankle Sprain",
      description:
        "Ligament injuries caused by twisting or sudden movements leading to pain, swelling, and instability. Managed with bracing, physiotherapy, pain management, and rehabilitation."
    },
    {
      name: "Ankle Fracture",
      description:
        "Breaks in ankle bones due to trauma or accidents. Treated with casting or surgical fixation to ensure proper alignment and healing."
    },
    {
      name: "Achilles Tendon Injury",
      description:
        "Inflammation or rupture of the Achilles tendon causing pain and difficulty walking. Managed with medications, physiotherapy, or surgical repair when required."
    },
    {
      name: "Ankle Arthritis",
      description:
        "Degenerative or inflammatory arthritis causing pain, stiffness, and reduced mobility. Treated with medication, injections, joint preservation techniques, or surgery."
    },
    {
      name: "Ankle Instability",
      description:
        "Chronic weakness of the ankle due to repeated sprains, leading to frequent giving way. Managed with rehabilitation, bracing, and corrective surgery if needed."
    },
    {
      name: "Flat Foot",
      description:
        "Structural deformity of the foot causing pain, imbalance, and difficulty walking. Managed with orthotics, exercises, and surgical correction when necessary."
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
          <div className="tag-badge">🦴 Orthopedics</div>
          <h1 className="hero-title">
            Orthopedics – Ankle & Foot Care
          </h1>
          <p className="hero-subtitle">
            Advanced ankle care for injuries, arthritis, and mobility restoration
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Ankle Care Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Ankle Care Unit at <strong>Jigyasa Hospital</strong> specializes
              in the diagnosis, treatment, and rehabilitation of ankle-related
              injuries and disorders with a focus on restoring stability,
              mobility, and pain-free movement.
            </p>
            <p>
              Our orthopedic specialists manage sports injuries, fractures,
              ligament damage, arthritis, tendon disorders, and structural
              deformities using modern techniques and personalized treatment
              plans.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Ankle Orthopedics"
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
            <h2>Ankle Fracture Care</h2>
            <ul>
              <li><strong>Emergency & surgical fracture management</strong></li>
              <li><strong>Casting & internal fixation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Ligament & Tendon Treatment</h2>
            <ul>
              <li><strong>Sprain & instability management</strong></li>
              <li><strong>Achilles tendon injury care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Ankle Arthritis Care</h2>
            <ul>
              <li><strong>Medication & joint injections</strong></li>
              <li><strong>Joint preservation & surgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Rehabilitation & Physiotherapy</h2>
            <ul>
              <li><strong>Post-injury recovery programs</strong></li>
              <li><strong>Gait training & mobility restoration</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
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
            Click on a condition to learn more about our ankle care services
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

export default Ankle;
