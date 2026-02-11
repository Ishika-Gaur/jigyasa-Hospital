import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Knee = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Knee Osteoarthritis",
      description:
        "Degenerative joint disease causing pain, stiffness, and reduced mobility. Managed with medication, physiotherapy, injections, and knee replacement surgery."
    },
    {
      name: "Knee Ligament Injuries (ACL / PCL / MCL)",
      description:
        "Sports or trauma-related ligament tears treated with arthroscopy, reconstruction surgery, and structured rehabilitation."
    },
    {
      name: "Meniscus Tear",
      description:
        "Cartilage injury inside the knee causing locking, swelling, and pain. Treated with arthroscopic repair or partial meniscectomy."
    },
    {
      name: "Knee Fractures",
      description:
        "Fractures involving the kneecap or surrounding bones treated with casting or surgical fixation depending on severity."
    },
    {
      name: "Knee Replacement Surgery",
      description:
        "Partial or total knee replacement using advanced implants to restore joint movement and relieve chronic pain."
    },
    {
      name: "Sports & Overuse Injuries",
      description:
        "Runner’s knee, tendonitis, and cartilage injuries treated with physiotherapy, injections, and minimally invasive procedures."
    }
  ];

  const toggleCondition = (condition) => {
    setSelectedCondition(
      selectedCondition?.name === condition.name ? null : condition
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="body-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="tag-badge">🦴 Orthopedics</div>
          <h1 className="hero-title">Advanced Knee Care & Surgery</h1>
          <p className="hero-subtitle">
            From sports injuries to knee replacement — expert orthopedic care
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Knee Care</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Knee Care Unit at <strong>Jigyasa Hospital</strong> offers
              advanced, patient-focused treatment for a wide range of knee
              disorders using modern diagnostics, minimally invasive surgical
              techniques, and evidence-based rehabilitation protocols.
            </p>
            <p>
              Our expert orthopedic surgeons specialize in managing knee
              arthritis, ligament and meniscus injuries, fractures, and
              sports-related conditions with a strong focus on
              <strong> pain relief, mobility restoration, and long-term joint health</strong>.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Knee Orthopedic Care"
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
            <h2>Knee Arthroscopy</h2>
            <ul>
              <li><strong>ACL & Meniscus Surgery</strong></li>
              <li><strong>Minimally invasive repair</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Knee Replacement</h2>
            <ul>
              <li><strong>Total Knee Replacement</strong></li>
              <li><strong>Partial Knee Replacement</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Sports Injury Care</h2>
            <ul>
              <li><strong>Ligament reconstruction</strong></li>
              <li><strong>Rehabilitation programs</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Diagnostics & Rehabilitation</h2>
            <ul>
              <li><strong>MRI & Digital X-rays</strong></li>
              <li><strong>Physiotherapy & pain management</strong></li>
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
          <h1 className="section-title">Knee Conditions We Treat</h1>
          <p className="diseases-subtext">
            Click to explore knee problems treated by our orthopedic specialists
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="diseases-list-expandable">
          <div className="diseases-columns">
            {conditions.map((condition, index) => (
              <div key={index} className="disease-item-wrapper">
                <div
                  className={`disease-item ${
                    selectedCondition?.name === condition.name ? "active" : ""
                  }`}
                  onClick={() => toggleCondition(condition)}
                >
                  <span className="disease-bullet">●</span>
                  <strong>{condition.name}</strong>
                  <span className="expand-icon">
                    {selectedCondition?.name === condition.name ? "−" : "+"}
                  </span>
                </div>

                {selectedCondition?.name === condition.name && (
                  <div className="disease-description">
                    <p>{condition.description}</p>
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

export default Knee;
