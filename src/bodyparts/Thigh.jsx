import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Thigh = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Femur (Thigh Bone) Fractures",
      description:
        "Fractures of the thigh bone caused by accidents or falls. Treated with surgical fixation using rods, plates, or screws for proper alignment and healing."
    },
    {
      name: "Hip & Thigh Arthritis",
      description:
        "Degenerative joint disease causing pain, stiffness, and limited movement. Managed with medication, physiotherapy, and joint replacement when required."
    },
    {
      name: "Muscle & Tendon Injuries",
      description:
        "Strains, tears, and overuse injuries of thigh muscles managed with rest, physiotherapy, injections, and surgical repair if severe."
    },
    {
      name: "Sports Injuries",
      description:
        "ACL-related thigh stress, hamstring injuries, and muscle tears treated with advanced sports medicine and rehabilitation programs."
    },
    {
      name: "Hip Joint Disorders",
      description:
        "Conditions such as avascular necrosis, hip dislocation, and congenital hip problems treated with corrective surgery and replacement procedures."
    },
    {
      name: "Pediatric Thigh Conditions",
      description:
        "Growth plate injuries, congenital deformities, and pediatric fractures managed with child-focused orthopedic care."
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
          <h1 className="hero-title">Department of Orthopedics (Thigh Care)</h1>
          <p className="hero-subtitle">
            Advanced treatment for thigh bone, hip, muscle, and joint conditions
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Thigh Care Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Orthopedic Thigh Care Unit at Jigyasa Hospital provides
              comprehensive diagnosis, treatment, and rehabilitation for
              conditions affecting the thigh bone, hip joint, muscles, and
              surrounding structures.
            </p>
            <p>
              Our experienced orthopedic surgeons specialize in trauma care,
              joint replacement, sports injuries, and rehabilitation with a
              strong focus on restoring mobility, strength, and pain-free
              movement.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Thigh Orthopedics"
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
              <li><strong>Femur fracture fixation</strong></li>
              <li><strong>Emergency orthopedic trauma care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Hip & Joint Replacement</h2>
            <ul>
              <li><strong>Total & partial hip replacement</strong></li>
              <li><strong>Advanced implant techniques</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Sports Injury Treatment</h2>
            <ul>
              <li><strong>Muscle & tendon injury repair</strong></li>
              <li><strong>ACL-related rehabilitation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Pediatric Orthopedics</h2>
            <ul>
              <li><strong>Growth plate injury care</strong></li>
              <li><strong>Congenital deformity correction</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Rehabilitation & Physiotherapy</h2>
            <ul>
              <li><strong>Post-surgical recovery programs</strong></li>
              <li><strong>Strength & mobility training</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Advanced Diagnostics</h2>
            <ul>
              <li><strong>Digital X-ray & MRI</strong></li>
              <li><strong>Bone density testing</strong></li>
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
            Click on any condition to learn more about our thigh care treatments
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

export default Thigh;
