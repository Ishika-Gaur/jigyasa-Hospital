import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Dermatology = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Acne & Acne Scars",
      description:
        "Common skin condition causing pimples, blackheads, and scarring. Managed with medications, chemical peels, laser therapy, and advanced acne protocols."
    },
    {
      name: "Eczema & Dermatitis",
      description:
        "Chronic inflammatory skin disorders causing itching, redness, and dryness. Treated with topical therapy, lifestyle guidance, and systemic medications when required."
    },
    {
      name: "Psoriasis",
      description:
        "Autoimmune skin disease causing red, scaly plaques. Managed with topical agents, phototherapy, biologics, and long-term monitoring."
    },
    {
      name: "Vitiligo & Pigment Disorders",
      description:
        "Loss or excess of skin pigmentation. Treated with medical therapy, phototherapy, excimer laser, and surgical options."
    },
    {
      name: "Hair & Scalp Disorders",
      description:
        "Conditions such as alopecia areata, hair fall, dandruff, and scalp infections treated with medications, PRP therapy, and trichoscopy-guided care."
    },
    {
      name: "Skin Infections & Allergies",
      description:
        "Bacterial, fungal, viral infections and allergic skin reactions treated with accurate diagnosis and targeted therapy."
    },
    {
      name: "Skin Tumors & Cancers",
      description:
        "Early detection and treatment of benign and malignant skin tumors including BCC, SCC, and melanoma using surgery and advanced techniques."
    }
  ];

  const handleDiseaseClick = (disease) => {
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
          <div className="tag-badge">🧴 Dermatology</div>
          <h1 className="hero-title">
            Department of Dermatology
          </h1>
          <p className="hero-subtitle">
            Expert care for skin, hair, nail, and cosmetic dermatology conditions
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Dermatology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Dermatology Department at Jigyasa Hospital offers comprehensive
              medical, surgical, and cosmetic care for skin, hair, and nail
              disorders across all age groups using modern technology.
            </p>
            <p>
              Our experienced dermatologists provide personalized treatment for
              acne, eczema, psoriasis, vitiligo, hair loss, infections, and skin
              cancers with a strong focus on early diagnosis and long-term skin
              health.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/13/df/ac/13dfacc96d91b2d054a3398602119ef1.jpg"
              alt="Dermatology Department"
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
            <h2>Diagnostic Dermatology</h2>
            <ul>
              <li><strong>Skin biopsy & histopathology</strong></li>
              <li><strong>Dermoscopy & trichoscopy</strong></li>
              <li><strong>Patch & allergy testing</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Medical Dermatology</h2>
            <ul>
              <li><strong>Acne, eczema & psoriasis treatment</strong></li>
              <li><strong>Vitiligo & pigment disorder care</strong></li>
              <li><strong>Fungal & bacterial infections</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Hair & Nail Care</h2>
            <ul>
              <li><strong>Hair fall & alopecia treatment</strong></li>
              <li><strong>PRP therapy</strong></li>
              <li><strong>Nail disorder management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Cosmetic & Laser Dermatology</h2>
            <ul>
              <li><strong>Laser & light therapies</strong></li>
              <li><strong>Chemical peels & scar treatment</strong></li>
              <li><strong>Skin rejuvenation procedures</strong></li>
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

      {/* Diseases Section */}
      <div className="diseases-section">
        <div className="section-header">
          <h1 className="section-title">Conditions We Treat</h1>
          <p className="diseases-subtext">
            Click on any condition to learn more about our dermatology care
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
                  onClick={() => handleDiseaseClick(disease)}
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

export default Dermatology;
