import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Nose = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Sinusitis",
      description:
        "Inflammation of the sinus cavities causing facial pain, nasal blockage, headache, and discharge. Managed with medications and endoscopic sinus surgery when required."
    },
    {
      name: "Allergic Rhinitis",
      description:
        "Nasal allergy causing sneezing, runny nose, itching, and congestion. Treated with allergy control, medications, and lifestyle modification."
    },
    {
      name: "Deviated Nasal Septum (DNS)",
      description:
        "Deviation of the nasal septum leading to breathing difficulty, snoring, and sinus infections. Corrected with septoplasty surgery."
    },
    {
      name: "Nasal Polyps",
      description:
        "Non-cancerous growths inside the nose causing blockage and loss of smell. Managed with medications and endoscopic surgery."
    },
    {
      name: "Epistaxis (Nose Bleeding)",
      description:
        "Recurrent or sudden nosebleeds caused by dryness, trauma, hypertension, or infection. Treated with cauterization and medical care."
    },
    {
      name: "Nasal Trauma & Fractures",
      description:
        "Injuries to the nose caused by accidents or sports trauma. Managed with realignment, splinting, or surgery."
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
          <div className="tag-badge">👃 ENT</div>
          <h1 className="hero-title">Nose & Sinus Care Department</h1>
          <p className="hero-subtitle">
            Advanced diagnosis and treatment for nasal, sinus, and breathing disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Nose & Sinus Care</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Nose & Sinus Care Unit at <strong>Jigyasa Hospital</strong>
              provides comprehensive evaluation and treatment for nasal and sinus
              disorders affecting breathing, smell, and overall comfort.
            </p>
            <p>
              Our ENT specialists use advanced diagnostic tools and minimally
              invasive endoscopic techniques to manage sinusitis, nasal blockage,
              allergies, trauma, and structural nasal problems with precision
              and patient safety.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./ent.jpg"
              alt="Nose and Sinus Care"
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
              <li><strong>Nasal endoscopy</strong></li>
              <li><strong>CT scan & imaging</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Medical Nose Care</h2>
            <ul>
              <li><strong>Allergy & sinus treatment</strong></li>
              <li><strong>Nasal sprays & medications</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Endoscopic Sinus Surgery</h2>
            <ul>
              <li><strong>FESS (Functional Endoscopic Sinus Surgery)</strong></li>
              <li><strong>Polyp removal</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Nasal Surgery</h2>
            <ul>
              <li><strong>Septoplasty (DNS correction)</strong></li>
              <li><strong>Nasal trauma repair</strong></li>
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
            Click on a condition to learn more about our nose & sinus treatments
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

export default Nose;
