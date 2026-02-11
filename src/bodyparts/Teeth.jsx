import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const OralMaxillofacial = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Impacted Wisdom Teeth",
      description:
        "Wisdom teeth trapped beneath the gums or bone causing pain, infection, and swelling. Managed with safe surgical extraction."
    },
    {
      name: "Facial Fractures & Trauma",
      description:
        "Fractures of jaw, cheekbone, orbit, or facial bones due to accidents. Treated with precise surgical fixation and reconstruction."
    },
    {
      name: "TMJ Disorders",
      description:
        "Jaw joint problems causing pain, clicking, and restricted mouth opening. Managed with medication, splints, and surgery when required."
    },
    {
      name: "Jaw Deformities & Malalignment",
      description:
        "Abnormal jaw growth or alignment affecting bite and facial balance. Corrected with orthognathic (jaw) surgery."
    },
    {
      name: "Cleft Lip & Palate",
      description:
        "Congenital facial defects requiring staged surgical correction to restore speech, appearance, and function."
    },
    {
      name: "Oral Cysts & Tumors",
      description:
        "Benign and malignant growths of the mouth and jaw treated with biopsy, excision, and reconstructive surgery."
    },
    {
      name: "Dental Implant Surgery",
      description:
        "Replacement of missing teeth using advanced dental implants, bone grafting, and sinus lift procedures."
    },
    {
      name: "Salivary Gland Disorders",
      description:
        "Conditions affecting salivary glands such as stones, infections, and tumors managed surgically when needed."
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
          <div className="tag-badge">🦷 Oral & Maxillofacial Surgery</div>
          <h1 className="hero-title">
            Department of Oral & Maxillofacial Surgery
          </h1>
          <p className="hero-subtitle">
            Advanced surgical care for face, jaw, mouth, and dental conditions
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">
            About Oral & Maxillofacial Surgery Department
          </h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Oral & Maxillofacial Surgery Department at Jigyasa Hospital
              provides expert surgical care for conditions affecting the mouth,
              jaws, face, and neck using modern technology and precise techniques.
            </p>
            <p>
              Our experienced surgeons manage dental extractions, facial trauma,
              jaw deformities, cleft conditions, oral tumors, and implant surgery
              with a strong focus on safety, function, and aesthetics.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/2a/47/c4/2a47c40c6ac382f7e8715ed223488cc1.jpg"
              alt="Oral & Maxillofacial Surgery"
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
            <h2>Dental & Surgical Extractions</h2>
            <ul>
              <li><strong>Wisdom tooth removal</strong></li>
              <li><strong>Impacted & complex extractions</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Dental Implants</h2>
            <ul>
              <li><strong>Single & multiple implants</strong></li>
              <li><strong>Bone grafting & sinus lift</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Jaw & Facial Surgery</h2>
            <ul>
              <li><strong>Orthognathic jaw surgery</strong></li>
              <li><strong>TMJ & jaw reconstruction</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Facial Trauma & Reconstruction</h2>
            <ul>
              <li><strong>Facial fracture fixation</strong></li>
              <li><strong>Soft tissue repair</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Cleft & Craniofacial Surgery</h2>
            <ul>
              <li><strong>Cleft lip & palate repair</strong></li>
              <li><strong>Craniofacial reconstruction</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Oral Pathology</h2>
            <ul>
              <li><strong>Oral biopsy & cyst removal</strong></li>
              <li><strong>Tumor excision</strong></li>
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
            Click on any condition to learn more about our oral & facial surgery care
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

export default OralMaxillofacial;
