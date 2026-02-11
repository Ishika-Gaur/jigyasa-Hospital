import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Lowerback = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Slip Disc (Lumbar Disc Herniation)",
      description:
        "Bulging or ruptured spinal disc causing lower back pain, leg pain, numbness, or weakness due to nerve compression. Treatment includes medication, physiotherapy, and minimally invasive spine surgery when required."
    },
    {
      name: "Sciatica",
      description:
        "Radiating pain from the lower back to the legs caused by compression of the sciatic nerve. Managed through conservative treatment and surgical intervention if symptoms persist."
    },
    {
      name: "Spinal Tumors",
      description:
        "Benign or malignant growths affecting the spine or spinal cord. Treated using advanced microsurgical and minimally invasive neurosurgical techniques."
    },
    {
      name: "Spinal Canal Stenosis",
      description:
        "Narrowing of the spinal canal leading to nerve pressure, pain, and difficulty walking. Surgical decompression helps relieve symptoms and restore mobility."
    },
    {
      name: "Traumatic Spine Injuries",
      description:
        "Fractures, dislocations, or spinal cord injuries caused by accidents or falls, requiring emergency stabilization and surgical correction."
    },
    {
      name: "Congenital Spine Disorders",
      description:
        "Birth-related spinal abnormalities such as scoliosis and spina bifida, managed through specialized pediatric and adult neurosurgery."
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
      <div className="body-container neurosurgery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="tag-badge">🧠 Neuro Surgery</span>
          <h1 className="hero-title">Advanced Brain & Spine Care</h1>
          <p className="hero-subtitle">
            Precision neurosurgery for spine, brain, and nerve disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Neuro Surgery</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Neurosurgery Department at <strong>Jigyasa Hospital</strong>
              provides advanced surgical and non-surgical care for disorders of
              the <strong>brain, spine, spinal cord, and peripheral nerves</strong>.
              Our department integrates modern technology with expert clinical
              precision to ensure safe procedures and optimal outcomes.
            </p>

            <p>
              Supported by experienced neurosurgeons and state-of-the-art
              infrastructure, we specialize in
              <strong> minimally invasive spine surgery</strong>, brain tumor
              management, trauma care, and complex neurological conditions.
              Every treatment plan focuses on
              <strong> patient safety, faster recovery, and long-term neurological health</strong>.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./neurosurgery.jpg"
              alt="Neurosurgery Department"
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
            <h2>Brain Surgery</h2>
            <ul>
              <li><strong>Brain Tumor Removal</strong></li>
              <li><strong>Aneurysm & Epilepsy Surgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Spine Surgery</h2>
            <ul>
              <li><strong>Slip Disc & Spine Stabilization</strong></li>
              <li><strong>Cervical & Lumbar Spine Surgery</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Minimally Invasive Neuro Surgery</h2>
            <ul>
              <li><strong>Endoscopic Spine & Brain Surgery</strong></li>
              <li><strong>Image-Guided Procedures</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Trauma & Emergency Care</h2>
            <ul>
              <li><strong>Head Injury Management</strong></li>
              <li><strong>Spinal Cord Injury Treatment</strong></li>
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
            Click to explore spine and neurological conditions we manage
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

export default Lowerback;
