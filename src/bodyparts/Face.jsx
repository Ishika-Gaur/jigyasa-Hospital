import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const PlasticSurgery = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Cleft Lip & Palate",
      description:
        "Congenital facial deformities requiring staged surgical correction to restore feeding, speech, facial symmetry, and normal appearance."
    },
    {
      name: "Burn Contractures & Reconstruction",
      description:
        "Release of tight burn scars using skin grafts, flaps, tissue expansion, and laser therapy to improve mobility and appearance."
    },
    {
      name: "Hand Trauma & Microsurgery",
      description:
        "Microsurgical repair of fingers, tendons, nerves, and bones following trauma to restore hand function."
    },
    {
      name: "Breast Reconstruction",
      description:
        "Post-mastectomy breast reconstruction using implants or tissue flaps to restore body image and symmetry."
    },
    {
      name: "Facial Trauma & Craniofacial Anomalies",
      description:
        "Surgical repair of facial fractures, jaw deformities, and complex craniofacial birth defects."
    },
    {
      name: "Cosmetic & Aesthetic Surgery",
      description:
        "Procedures including rhinoplasty, liposuction, breast augmentation or reduction, abdominoplasty, hair transplant, and gynecomastia surgery."
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
          <div className="tag-badge">✨ Plastic Surgery</div>
          <h1 className="hero-title">Plastic & Reconstructive Surgery Centre</h1>
          <p className="hero-subtitle">
            Restoring form, function, and confidence through advanced surgical care
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Plastic Surgery Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Plastic Surgery Department at <strong>Jigyasa Hospital</strong>
              offers advanced reconstructive and cosmetic surgical care using
              modern techniques and personalized treatment planning.
            </p>
            <p>
              Our expert plastic surgeons manage complex reconstructions following
              trauma, burns, and cancer surgery, along with aesthetic procedures
              designed to enhance appearance while maintaining natural results.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/3c/69/e6/3c69e6fa3ccd106989554a8ad1ccbff1.jpg"
              alt="Plastic Surgery Department"
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
            <h2>Reconstructive Surgery</h2>
            <ul>
              <li><strong>Burn & trauma reconstruction</strong></li>
              <li><strong>Breast & post-cancer reconstruction</strong></li>
              <li><strong>Hand & microsurgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Cosmetic Surgery</h2>
            <ul>
              <li><strong>Rhinoplasty & facial rejuvenation</strong></li>
              <li><strong>Liposuction & body contouring</strong></li>
              <li><strong>Breast aesthetic procedures</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Maxillofacial & Craniofacial Surgery</h2>
            <ul>
              <li><strong>Jaw correction surgery</strong></li>
              <li><strong>Facial fracture repair</strong></li>
              <li><strong>Craniofacial anomaly correction</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Laser & Non-Surgical Treatments</h2>
            <ul>
              <li><strong>Laser skin resurfacing</strong></li>
              <li><strong>Botox & dermal fillers</strong></li>
              <li><strong>Hair transplant procedures</strong></li>
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
            Click on any condition to explore our plastic surgery expertise
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

export default PlasticSurgery;
