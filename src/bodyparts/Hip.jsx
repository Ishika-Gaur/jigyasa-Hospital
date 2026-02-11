import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Hip = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Hip Fractures",
      description:
        "Fractures of the hip joint commonly caused by falls, accidents, or osteoporosis. Managed with timely surgical or non-surgical treatment to restore mobility and prevent complications."
    },
    {
      name: "Osteoarthritis of the Hip",
      description:
        "Degenerative joint disease leading to chronic pain, stiffness, and difficulty walking. Treatment includes medications, physiotherapy, injections, and hip replacement surgery when required."
    },
    {
      name: "Hip Dislocation",
      description:
        "Displacement of the hip joint due to trauma or injury. Emergency reduction, stabilization, and rehabilitation are provided to restore joint stability."
    },
    {
      name: "Avascular Necrosis (AVN) of Hip",
      description:
        "Loss of blood supply to the hip bone causing bone death and joint collapse. Early diagnosis and surgical intervention help preserve joint function."
    },
    {
      name: "Hip Bursitis & Tendinitis",
      description:
        "Inflammation of bursae or tendons around the hip causing pain and restricted movement. Treated with medication, injections, and physiotherapy."
    },
    {
      name: "Sports-Related Hip Injuries",
      description:
        "Labral tears, muscle strains, and ligament injuries caused by sports or overuse. Managed with rehabilitation and minimally invasive surgery when required."
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
          <h1 className="hero-title">Hip Care & Joint Replacement Centre</h1>
          <p className="hero-subtitle">
            Advanced orthopedic care for hip injuries, arthritis, and mobility disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Hip Orthopedics</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Hip Orthopedics Unit at <strong>Jigyasa Hospital</strong> offers
              comprehensive care for hip injuries, degenerative joint conditions,
              and complex hip disorders using advanced orthopedic techniques.
            </p>
            <p>
              Our experienced orthopedic surgeons focus on early diagnosis,
              minimally invasive surgery, and structured rehabilitation programs
              to restore pain-free movement and improve long-term quality of life.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Orthopedic.jpg"
              alt="Hip Orthopedics Department"
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
            <h2>Hip Trauma Care</h2>
            <ul>
              <li><strong>Hip fracture fixation</strong></li>
              <li><strong>Emergency trauma management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Joint Replacement</h2>
            <ul>
              <li><strong>Total & Partial Hip Replacement</strong></li>
              <li><strong>Minimally invasive techniques</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Sports & Soft Tissue Injuries</h2>
            <ul>
              <li><strong>Labral tear management</strong></li>
              <li><strong>Muscle & tendon injuries</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Rehabilitation & Physiotherapy</h2>
            <ul>
              <li><strong>Post-surgical rehab programs</strong></li>
              <li><strong>Gait training & mobility recovery</strong></li>
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
            Click on a condition to learn more about our hip care services
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

export default Hip;
