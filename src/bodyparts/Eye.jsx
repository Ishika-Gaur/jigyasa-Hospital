import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Eye = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Cataract",
      description:
        "Clouding of the eye’s natural lens leading to blurred vision and glare. Treated with advanced phacoemulsification surgery and premium intraocular lens implantation for fast recovery."
    },
    {
      name: "Glaucoma",
      description:
        "A group of eye diseases that damage the optic nerve due to high eye pressure. Managed with medications, laser therapy, and surgery to prevent vision loss."
    },
    {
      name: "Diabetic Retinopathy",
      description:
        "Diabetes-related damage to retinal blood vessels. Treatment includes regular screening, retinal laser photocoagulation, and anti-VEGF injections."
    },
    {
      name: "Macular Degeneration",
      description:
        "Age-related condition affecting central vision. Managed with supplements, injections, and lifestyle guidance to slow disease progression."
    },
    {
      name: "Eye Infections & Conjunctivitis",
      description:
        "Inflammation or infection of the eye causing redness, pain, and discharge. Treated with accurate diagnosis and targeted medications."
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
          <div className="tag-badge">👁️ Ophthalmology</div>
          <h1 className="hero-title">Ophthalmology & Eye Care Centre</h1>
          <p className="hero-subtitle">
            Comprehensive eye care for clear vision and lifelong eye health
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Ophthalmology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Ophthalmology Department at <strong>Jigyasa Hospital</strong>
              provides advanced, patient-focused eye care for all age groups,
              emphasizing early diagnosis, precise treatment, and long-term
              vision preservation.
            </p>
            <p>
              Our experienced ophthalmologists manage routine eye conditions as
              well as complex diseases such as cataract, glaucoma, diabetic
              retinopathy, and retinal disorders using modern technology and
              minimally invasive techniques.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/74/7a/85/747a8574c9132132d907418d7eba5d01.jpg"
              alt="Ophthalmology Department"
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
              <li><strong>Comprehensive eye examination</strong></li>
              <li><strong>OCT & fundus imaging</strong></li>
              <li><strong>Visual acuity & refraction testing</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Medical Eye Care</h2>
            <ul>
              <li><strong>Glaucoma & retinal treatment</strong></li>
              <li><strong>Diabetic eye disease management</strong></li>
              <li><strong>Pediatric ophthalmology</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Surgical Services</h2>
            <ul>
              <li><strong>Cataract & glaucoma surgery</strong></li>
              <li><strong>Retinal & squint surgery</strong></li>
              <li><strong>Oculoplastic procedures</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Laser Treatments</h2>
            <ul>
              <li><strong>Nd:YAG laser capsulotomy</strong></li>
              <li><strong>Peripheral iridotomy</strong></li>
              <li><strong>Retinal laser photocoagulation</strong></li>
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
            Click on a condition to learn more about our ophthalmology services
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

export default Eye;
