import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Heart = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Coronary Artery Disease",
      description:
        "Narrowing or blockage of coronary arteries causing chest pain and heart attacks. Treated with medications, coronary angiography, angioplasty, stenting, and bypass surgery."
    },
    {
      name: "Heart Rhythm Disorders (Arrhythmias)",
      description:
        "Abnormal heart rhythms such as bradycardia, tachycardia, atrial fibrillation, and heart block. Managed with medications, pacemakers, ICDs, and ablation procedures."
    },
    {
      name: "Heart Valve Diseases",
      description:
        "Diseases affecting heart valves including mitral and aortic stenosis or regurgitation. Treated with valve repair, replacement, or balloon valvuloplasty."
    },
    {
      name: "Heart Failure",
      description:
        "A condition where the heart cannot pump blood efficiently. Managed with medications, device therapy, lifestyle modification, and cardiac rehabilitation."
    },
    {
      name: "Congenital Heart Diseases",
      description:
        "Structural heart defects present from birth, treated through medical management, catheter-based interventions, or corrective surgery."
    },
    {
      name: "Hypertension & Preventive Cardiology",
      description:
        "High blood pressure and cardiac risk factors managed with lifestyle modification, medications, and preventive cardiology programs."
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
          <div className="tag-badge">❤️ Cardiology</div>
          <h1 className="hero-title">Cardiology & Heart Care Centre</h1>
          <p className="hero-subtitle">
            Advanced diagnosis, interventional cardiology, and cardiac surgery under one roof
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Cardiology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Cardiology Department at <strong>Jigyasa Hospital</strong> is a
              comprehensive heart care centre providing advanced diagnosis,
              interventional procedures, and cardiac surgery with a strong focus
              on patient safety and outcomes.
            </p>
            <p>
              Equipped with a state-of-the-art Cath Lab, advanced non-invasive
              cardiac diagnostics, and 24×7 emergency services, our experienced
              cardiologists and cardiac surgeons deliver coordinated and
              evidence-based heart care.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/1200x/ee/ee/c1/eeeec1ef63451486f8230d9226981278.jpg"
              alt="Cardiology Department"
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
            <h2>Diagnostic Cardiology</h2>
            <ul>
              <li><strong>ECG, Echocardiography & Stress Testing</strong></li>
              <li><strong>Holter & Ambulatory BP Monitoring</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Interventional Cardiology</h2>
            <ul>
              <li><strong>Coronary Angiography</strong></li>
              <li><strong>Angioplasty & Stent Placement</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Electrophysiology</h2>
            <ul>
              <li><strong>Pacemaker & ICD Implantation</strong></li>
              <li><strong>Cardiac Ablation Procedures</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Cardiac Surgery</h2>
            <ul>
              <li><strong>Coronary Bypass Surgery (CABG)</strong></li>
              <li><strong>Valve Repair & Replacement</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Preventive Cardiology</h2>
            <ul>
              <li><strong>Cardiac Risk Assessment Programs</strong></li>
              <li><strong>Cardiac Rehabilitation & Lifestyle Care</strong></li>
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
            Click on a condition to learn more about our cardiac care services
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

export default Heart;
