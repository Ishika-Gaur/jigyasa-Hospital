import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Reproductive = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Urinary Tract Infection (UTI)",
      description:
        "Bacterial infection affecting kidneys, bladder, or urethra causing pain, burning urination, and fever. Treated with antibiotics and preventive care."
    },
    {
      name: "Kidney Stones",
      description:
        "Hard mineral deposits causing severe pain and urinary obstruction. Managed with laser procedures such as URSL, RIRS, and PCNL."
    },
    {
      name: "Prostate Enlargement (BPH)",
      description:
        "Non-cancerous enlargement of prostate causing weak urine flow and retention. Treated medically or surgically using TURP."
    },
    {
      name: "Bladder Disorders & Stones",
      description:
        "Includes bladder stones, tumors, and infections managed with cystoscopy, laser treatment, and surgery."
    },
    {
      name: "Male Infertility & Erectile Dysfunction",
      description:
        "Evaluation and treatment of reproductive health issues using medical therapy, counseling, and surgical options."
    },
    {
      name: "Urethral Stricture & Reconstruction",
      description:
        "Narrowing of urethra treated with OIU, urethroplasty, and reconstructive surgery."
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
          <div className="tag-badge">🚻 Urology</div>
          <h1 className="hero-title">Urology & Reproductive Health Department</h1>
          <p className="hero-subtitle">
            Advanced care for urinary system and male reproductive disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Urology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Urology Department at <strong>Jigyasa Hospital</strong> provides
              comprehensive and confidential care for disorders of the urinary
              tract and male reproductive system using modern technology and
              expert medical care.
            </p>
            <p>
              Our experienced urologists specialize in kidney stones, prostate
              disorders, urinary infections, bladder diseases, infertility, and
              reconstructive urology with minimally invasive and laser-based
              treatments.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/a8/b3/3a/a8b33a1ccaf2f428af163b1178b1810d.jpg"
              alt="Urology Department"
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
            <h2>Urology Diagnostics</h2>
            <ul>
              <li><strong>Ultrasound, CT & MRI</strong></li>
              <li><strong>Cystoscopy & Uroflowmetry</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Stone Disease Treatment</h2>
            <ul>
              <li><strong>URSL, RIRS & PCNL</strong></li>
              <li><strong>Laser stone fragmentation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Prostate & Bladder Care</h2>
            <ul>
              <li><strong>TURP & TURBT</strong></li>
              <li><strong>Bladder tumor & stone surgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Reconstructive & Male Health</h2>
            <ul>
              <li><strong>Urethroplasty & OIU</strong></li>
              <li><strong>Erectile dysfunction treatment</strong></li>
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
            Click on a condition to learn more about our urology treatments
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

export default Reproductive;
