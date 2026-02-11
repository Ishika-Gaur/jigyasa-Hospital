import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Foot = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Foot & Ankle Fractures",
      description:
        "Fractures involving the foot and ankle due to trauma, falls, or accidents. Managed with casting, splinting, or surgical fixation using plates and screws for proper healing."
    },
    {
      name: "Plantar Fasciitis",
      description:
        "A common cause of heel pain due to inflammation of the plantar fascia. Treated with medications, physiotherapy, orthotics, and lifestyle modification."
    },
    {
      name: "Ankle Sprains & Ligament Injuries",
      description:
        "Ligament injuries caused by twisting or sports trauma. Managed with bracing, physiotherapy, and surgical repair in severe cases."
    },
    {
      name: "Flat Foot & High Arch Deformities",
      description:
        "Structural deformities of the foot causing pain, imbalance, and walking difficulty. Treated with orthotics, exercises, and corrective surgery when required."
    },
    {
      name: "Heel Pain & Achilles Tendon Disorders",
      description:
        "Conditions affecting the Achilles tendon including tendinitis and tears, treated with medications, rehabilitation, and surgery if needed."
    },
    {
      name: "Diabetic Foot Problems",
      description:
        "Foot ulcers, infections, and deformities related to diabetes. Managed with wound care, infection control, offloading techniques, and preventive foot care."
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
          <div className="tag-badge">🦶 Orthopedics</div>
          <h1 className="hero-title">Foot & Ankle Care Department</h1>
          <p className="hero-subtitle">
            Advanced orthopedic care for foot and ankle injuries, deformities,
            and mobility disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Foot & Ankle Orthopedics</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Foot & Ankle Orthopedic Department at <strong>Jigyasa Hospital</strong>
              provides specialized care for injuries, deformities, and
              degenerative conditions affecting the foot and ankle.
            </p>
            <p>
              Our expert orthopedic surgeons use advanced diagnostics,
              minimally invasive surgical techniques, and structured
              rehabilitation programs to restore mobility and relieve pain.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Foot and Ankle Orthopedics"
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
            <h2>Foot & Ankle Trauma</h2>
            <ul>
              <li><strong>Fracture fixation & dislocation management</strong></li>
              <li><strong>Emergency orthopedic trauma care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Sports Injuries</h2>
            <ul>
              <li><strong>Ankle ligament repair</strong></li>
              <li><strong>Achilles tendon injury treatment</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Deformity Correction</h2>
            <ul>
              <li><strong>Flat foot & high arch correction</strong></li>
              <li><strong>Congenital & acquired deformities</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Rehabilitation & Physiotherapy</h2>
            <ul>
              <li><strong>Post-surgical rehabilitation</strong></li>
              <li><strong>Gait training & pain management</strong></li>
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
            Click on a condition to learn more about our foot and ankle treatments
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

export default Foot;
