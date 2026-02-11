import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Elbow = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Elbow Fractures",
      description:
        "Fractures of the elbow joint due to falls, accidents, or trauma causing pain, swelling, and restricted movement. Managed with casting or surgical fixation for proper healing."
    },
    {
      name: "Tennis Elbow (Lateral Epicondylitis)",
      description:
        "Overuse injury causing pain on the outer side of the elbow, commonly seen in athletes and repetitive workers. Treated with medication, physiotherapy, injections, and activity modification."
    },
    {
      name: "Golfer’s Elbow (Medial Epicondylitis)",
      description:
        "Inflammation of inner elbow tendons leading to pain and weakness. Managed with conservative treatment, rehabilitation, and injections."
    },
    {
      name: "Elbow Dislocation",
      description:
        "Displacement of elbow joint bones due to injury or trauma. Treated with emergency reduction, stabilization, and structured rehabilitation."
    },
    {
      name: "Nerve Compression & Stiff Elbow",
      description:
        "Conditions such as cubital tunnel syndrome and post-injury stiffness causing numbness, pain, and limited motion. Managed with medical care, physiotherapy, or surgery when required."
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
          <h1 className="hero-title">Elbow Care & Orthopedic Services</h1>
          <p className="hero-subtitle">
            Specialized treatment for elbow injuries, pain, and joint disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Elbow Care Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Elbow Care Unit at <strong>Jigyasa Hospital</strong> provides
              advanced diagnosis, treatment, and rehabilitation for elbow-related
              injuries and joint disorders using modern orthopedic techniques.
            </p>
            <p>
              Our orthopedic specialists manage fractures, sports injuries,
              tendon disorders, nerve compression, and post-traumatic stiffness
              with a strong focus on restoring pain-free movement and function.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Elbow Orthopedics"
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
            <h2>Elbow Trauma & Fracture Care</h2>
            <ul>
              <li><strong>Emergency fracture management</strong></li>
              <li><strong>Casting & surgical fixation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Elbow Pain & Tendon Disorders</h2>
            <ul>
              <li><strong>Tennis & golfer’s elbow treatment</strong></li>
              <li><strong>Injection & physiotherapy care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Nerve & Joint Disorders</h2>
            <ul>
              <li><strong>Cubital tunnel syndrome care</strong></li>
              <li><strong>Elbow stiffness management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Rehabilitation & Physiotherapy</h2>
            <ul>
              <li><strong>Post-injury recovery programs</strong></li>
              <li><strong>Strength & mobility training</strong></li>
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
            Click on a condition to learn more about our elbow care services
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

export default Elbow;
