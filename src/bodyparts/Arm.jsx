import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Arm = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Arm Fractures",
      description:
        "Fractures of the shoulder, arm, elbow, forearm, wrist, or hand caused by trauma or accidents. Treated with casting, splinting, or surgical fixation for proper healing and recovery."
    },
    {
      name: "Shoulder Disorders",
      description:
        "Conditions such as frozen shoulder, rotator cuff injuries, shoulder instability, and dislocation causing pain and restricted movement. Managed with medication, physiotherapy, injections, or surgery."
    },
    {
      name: "Tennis Elbow & Golfer’s Elbow",
      description:
        "Overuse injuries of the elbow leading to pain, weakness, and reduced grip strength. Treated with rest, physiotherapy, injections, and structured rehabilitation programs."
    },
    {
      name: "Carpal Tunnel Syndrome",
      description:
        "Compression of the median nerve at the wrist causing numbness, tingling, and weakness in the hand. Managed with splints, medications, injections, or surgical release when required."
    },
    {
      name: "Nerve & Tendon Injuries",
      description:
        "Damage to nerves or tendons of the arm resulting in pain, weakness, or loss of function. Treated with microsurgical repair and comprehensive rehabilitation."
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
            Orthopedics – Arm, Shoulder & Hand Care
          </h1>
          <p className="hero-subtitle">
            Advanced diagnosis and treatment for arm, shoulder, elbow, wrist,
            and hand conditions
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Arm Care Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Arm Care Unit at <strong>Jigyasa Hospital</strong> provides
              comprehensive diagnosis, treatment, and rehabilitation for
              disorders affecting the shoulder, arm, elbow, forearm, wrist, and
              hand.
            </p>
            <p>
              Our orthopedic specialists manage fractures, sports injuries,
              nerve compression, tendon damage, and joint disorders using
              advanced techniques with a strong focus on restoring strength,
              mobility, and function.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Arm Orthopedics"
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
            <h2>Fracture & Trauma Care</h2>
            <ul>
              <li><strong>Emergency fracture management</strong></li>
              <li><strong>Casting & surgical fixation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Shoulder & Elbow Treatment</h2>
            <ul>
              <li><strong>Rotator cuff & frozen shoulder care</strong></li>
              <li><strong>Elbow pain & instability management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Nerve & Tendon Care</h2>
            <ul>
              <li><strong>Carpal tunnel syndrome treatment</strong></li>
              <li><strong>Tendon & nerve repair procedures</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Rehabilitation & Physiotherapy</h2>
            <ul>
              <li><strong>Post-injury recovery programs</strong></li>
              <li><strong>Strength, mobility & hand therapy</strong></li>
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
            Click on a condition to learn more about our arm care services
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

export default Arm;
