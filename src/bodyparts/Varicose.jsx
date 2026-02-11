import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Varicose = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Varicose Veins",
      description:
        "Enlarged, twisted veins commonly affecting the legs due to venous insufficiency. Treated with laser therapy, sclerotherapy, or surgery."
    },
    {
      name: "Hernia (Inguinal / Umbilical / Incisional)",
      description:
        "Protrusion of internal organs through weak abdominal walls. Managed with open or laparoscopic hernia repair."
    },
    {
      name: "Appendicitis",
      description:
        "Inflammation of the appendix causing severe abdominal pain. Treated with emergency appendectomy."
    },
    {
      name: "Gallbladder Diseases",
      description:
        "Gallstones and gallbladder inflammation treated with laparoscopic or open cholecystectomy."
    },
    {
      name: "Piles (Hemorrhoids)",
      description:
        "Swollen veins in the rectum or anus causing pain and bleeding. Managed with laser treatment or hemorrhoidectomy."
    },
    {
      name: "Fistula & Fissure",
      description:
        "Chronic anal conditions causing pain and discharge, treated with fistulectomy or sphincterotomy."
    },
    {
      name: "Breast Disorders",
      description:
        "Conditions like fibroadenoma, abscess, and breast cancer treated with conservative or radical surgery."
    },
    {
      name: "Thyroid Disorders",
      description:
        "Goiter, thyroid nodules, and thyroid cancer managed with partial or total thyroidectomy."
    },
    {
      name: "Trauma & Emergency Surgery",
      description:
        "Emergency surgical care for abdominal trauma, perforation, obstruction, and life-threatening injuries."
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
          <div className="tag-badge">🩺 General Surgery</div>
          <h1 className="hero-title">Department of General Surgery</h1>
          <p className="hero-subtitle">
            Advanced surgical care including varicose vein, hernia, and abdominal surgery
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About General Surgery Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The General Surgery Department at Jigyasa Hospital delivers safe,
              precise, and patient-centered surgical care for a wide range of
              conditions including abdominal, vascular, breast, and emergency surgeries.
            </p>
            <p>
              Our surgeons use minimally invasive and laparoscopic techniques
              wherever possible to reduce pain, shorten recovery time, and
              improve surgical outcomes.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/44/aa/29/44aa2944f20e5c7bb7db540065975e08.jpg"
              alt="General Surgery Department"
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
            <h2>General Surgical Procedures</h2>
            <ul>
              <li><strong>Appendectomy & hernia repair</strong></li>
              <li><strong>Gallbladder & thyroid surgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Varicose & Vascular Surgery</h2>
            <ul>
              <li><strong>Laser varicose vein treatment</strong></li>
              <li><strong>Venous insufficiency management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Minimally Invasive Surgery</h2>
            <ul>
              <li><strong>Laparoscopic abdominal surgery</strong></li>
              <li><strong>Laser procedures for piles & fistula</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Breast & Thyroid Surgery</h2>
            <ul>
              <li><strong>Breast lump & cancer surgery</strong></li>
              <li><strong>Thyroidectomy</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Emergency & Trauma Care</h2>
            <ul>
              <li><strong>Abdominal trauma & perforation</strong></li>
              <li><strong>Emergency surgical intervention</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Oncologic Surgery</h2>
            <ul>
              <li><strong>Gastrointestinal cancer surgery</strong></li>
              <li><strong>Lymph node dissection</strong></li>
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
            Click on a condition to learn more about our surgical expertise
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

export default Varicose;
