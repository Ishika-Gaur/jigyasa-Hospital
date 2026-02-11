import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Throat = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Throat Infections",
      description:
        "Infections such as pharyngitis and tonsillitis causing pain, fever, redness, and difficulty swallowing. Treated with accurate diagnosis and appropriate medications."
    },
    {
      name: "Tonsillitis",
      description:
        "Inflammation of the tonsils leading to sore throat and fever. Managed with medical therapy or tonsillectomy in recurrent or severe cases."
    },
    {
      name: "Voice Disorders",
      description:
        "Hoarseness, voice fatigue, or voice loss caused by vocal cord strain, infection, or nodules. Treated with voice assessment, medication, and speech therapy."
    },
    {
      name: "Swallowing Disorders (Dysphagia)",
      description:
        "Difficulty in swallowing due to throat or esophageal problems. Evaluated using endoscopy and managed with medical or surgical treatment."
    },
    {
      name: "Laryngitis",
      description:
        "Inflammation of the voice box causing hoarseness and throat pain. Treated with medication, voice rest, and lifestyle guidance."
    },
    {
      name: "Throat Tumors & Growths",
      description:
        "Benign or malignant growths of the throat and larynx evaluated with endoscopy and imaging, treated surgically or medically as required."
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
          <div className="tag-badge">👂 ENT</div>
          <h1 className="hero-title">Department of ENT (Throat Care)</h1>
          <p className="hero-subtitle">
            Complete throat care for infections, voice, and swallowing disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Throat Care Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The ENT Throat Care Unit at Jigyasa Hospital specializes in the
              diagnosis and treatment of throat-related conditions affecting
              speech, swallowing, and breathing.
            </p>
            <p>
              Our experienced ENT specialists manage infections, voice
              disorders, swallowing problems, and throat tumors using advanced
              diagnostic tools and minimally invasive treatment techniques.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./ent.jpg"
              alt="ENT Throat Care"
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
              <li><strong>Throat endoscopy & laryngoscopy</strong></li>
              <li><strong>Imaging (CT / MRI)</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Medical Treatment</h2>
            <ul>
              <li><strong>Throat & voice infections</strong></li>
              <li><strong>Medication-based management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Voice & Speech Therapy</h2>
            <ul>
              <li><strong>Hoarseness & voice fatigue care</strong></li>
              <li><strong>Professional voice rehabilitation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Surgical Services</h2>
            <ul>
              <li><strong>Tonsillectomy & adenoidectomy</strong></li>
              <li><strong>Laryngeal & throat surgeries</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Swallowing Disorder Care</h2>
            <ul>
              <li><strong>Dysphagia evaluation</strong></li>
              <li><strong>Medical & surgical correction</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Advanced ENT Procedures</h2>
            <ul>
              <li><strong>Minimally invasive throat surgery</strong></li>
              <li><strong>Head & neck tumor management</strong></li>
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
            Click on any condition to learn more about our throat care services
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

export default Throat;
