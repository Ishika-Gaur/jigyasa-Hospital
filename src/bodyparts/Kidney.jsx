import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Kidney = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Acute Kidney Injury (AKI)",
      description:
        "Sudden loss of kidney function requiring urgent diagnosis and treatment to prevent permanent kidney damage."
    },
    {
      name: "Chronic Kidney Disease (CKD)",
      description:
        "Progressive decline in kidney function managed through medications, diet control, lifestyle modification, and dialysis planning."
    },
    {
      name: "Urinary Tract & Kidney Infections",
      description:
        "Infections affecting the kidneys and urinary system treated with antibiotics, hydration, and close medical monitoring."
    },
    {
      name: "Diabetes & Hypertension Related Kidney Disease",
      description:
        "Kidney damage caused by long-standing diabetes or high blood pressure requiring strict metabolic and blood pressure control."
    },
    {
      name: "Kidney Stones & Electrolyte Disorders",
      description:
        "Recurrent stone disease and mineral imbalances treated with medications, dietary correction, and interventional procedures."
    },
    {
      name: "Dialysis & Renal Replacement Therapy",
      description:
        "Advanced dialysis modalities including IHD, SLED, PIRRT, CAPD, APD, and CRRT for patients with kidney failure."
    },
    {
      name: "Pre & Post Kidney Transplant Care",
      description:
        "Comprehensive nephrology care before and after kidney transplantation including immunosuppression and long-term monitoring."
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
          <div className="tag-badge">🩺 Nephrology</div>
          <h1 className="hero-title">Advanced Kidney & Dialysis Care</h1>
          <p className="hero-subtitle">
            Complete nephrology services with world-class dialysis support
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Nephrology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Nephrology Department at <strong>Jigyasa Hospital</strong>
              provides comprehensive, patient-centered care for all
              kidney-related diseases using modern diagnostics, advanced
              dialysis technology, and compassionate medical support.
            </p>
            <p>
              Our state-of-the-art dialysis unit performs thousands of dialysis
              sessions every year using ultrapure water systems and strict
              infection-control protocols to ensure <strong>maximum safety,
              comfort, and accuracy</strong>.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Nephrology.jpg"
              alt="Nephrology Department"
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
            <h2>Diagnostic Services</h2>
            <ul>
              <li><strong>Blood & Urine Tests</strong></li>
              <li><strong>Kidney Biopsy</strong></li>
              <li><strong>Ultrasound, CT & MRI</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>CKD & Hypertension Care</h2>
            <ul>
              <li><strong>CKD staging & monitoring</strong></li>
              <li><strong>ABPM & BP control</strong></li>
              <li><strong>Nutritional counselling</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Dialysis Services</h2>
            <ul>
              <li><strong>Haemodialysis & SLED</strong></li>
              <li><strong>PIRRT & SCUF</strong></li>
              <li><strong>Peritoneal Dialysis (CAPD / APD)</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Interventional Nephrology</h2>
            <ul>
              <li><strong>Dialysis catheter insertion</strong></li>
              <li><strong>Permacath & AVF care</strong></li>
              <li><strong>Plasmapheresis</strong></li>
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
            Click to explore kidney conditions managed by our nephrology experts
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

export default Kidney;
