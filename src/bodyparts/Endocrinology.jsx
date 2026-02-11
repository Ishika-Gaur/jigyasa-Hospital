import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Endocrinology = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Diabetes Mellitus (Type 1 & Type 2)",
      description:
        "Comprehensive diabetes care including lifestyle modification, oral medications, insulin therapy, continuous glucose monitoring, and complication prevention with regular follow-up."
    },
    {
      name: "Thyroid Disorders",
      description:
        "Diagnosis and treatment of hypothyroidism, hyperthyroidism, thyroid nodules, goiter, and autoimmune thyroid diseases with long-term monitoring."
    },
    {
      name: "Polycystic Ovary Syndrome (PCOS)",
      description:
        "Multidisciplinary management of PCOS focusing on menstrual regulation, fertility support, insulin resistance management, and weight control."
    },
    {
      name: "Osteoporosis & Bone Health",
      description:
        "Bone density assessment and fracture prevention through DEXA scans, calcium & vitamin D therapy, lifestyle guidance, and advanced medications."
    },
    {
      name: "Hormonal & Metabolic Disorders",
      description:
        "Management of pituitary, adrenal, growth hormone, lipid, and metabolic syndrome disorders with personalized treatment plans."
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
          <div className="tag-badge">🧪 Endocrinology</div>
          <h1 className="hero-title">Endocrinology & Hormone Care Centre</h1>
          <p className="hero-subtitle">
            Specialized care for diabetes, thyroid, hormonal & metabolic disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Endocrinology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Endocrinology Department at <strong>Jigyasa Hospital</strong>
              provides comprehensive, patient-centered care for hormonal and
              metabolic disorders affecting the thyroid, pancreas, pituitary,
              adrenal glands, bones, and reproductive system.
            </p>
            <p>
              Our experienced endocrinologists work closely with diabetes
              educators and nutritionists to deliver evidence-based treatment
              plans focused on long-term control, complication prevention, and
              improved quality of life.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/1200x/4f/eb/2a/4feb2a41a4fcd5c89ad5b85e6cc5e1cc.jpg"
              alt="Endocrinology Department"
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
            <h2>Diabetes Care</h2>
            <ul>
              <li><strong>Type 1 & Type 2 diabetes management</strong></li>
              <li><strong>Insulin therapy & CGM support</strong></li>
              <li><strong>Gestational diabetes care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Thyroid Disorders</h2>
            <ul>
              <li><strong>Hypo & hyperthyroidism treatment</strong></li>
              <li><strong>Thyroid nodules & goiter evaluation</strong></li>
              <li><strong>Autoimmune thyroid disease care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Metabolic Disorders</h2>
            <ul>
              <li><strong>Obesity & weight management</strong></li>
              <li><strong>PCOS & lipid disorders</strong></li>
              <li><strong>Metabolic syndrome care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Bone & Hormonal Health</h2>
            <ul>
              <li><strong>Osteoporosis management</strong></li>
              <li><strong>Vitamin D & calcium disorders</strong></li>
              <li><strong>Pituitary & adrenal disorders</strong></li>
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
            Click on a condition to learn more about our endocrinology care
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

export default Endocrinology;
