import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Liver = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Fatty Liver Disease",
      description:
        "Excess fat accumulation in the liver due to obesity, diabetes, or alcohol use. Managed through lifestyle modification, diet control, weight management, and medical therapy."
    },
    {
      name: "Viral Hepatitis (A, B, C)",
      description:
        "Inflammation of the liver caused by viral infections. Treated with antiviral medications, regular monitoring, and long-term liver protection strategies."
    },
    {
      name: "Liver Cirrhosis",
      description:
        "Chronic scarring of the liver leading to reduced liver function. Managed with medications, complication control, nutritional support, and close follow-up."
    },
    {
      name: "Alcohol-Related Liver Disease",
      description:
        "Liver damage caused by prolonged alcohol consumption. Treatment includes medical therapy, counseling, lifestyle changes, and complication management."
    },
    {
      name: "Jaundice & Liver Function Disorders",
      description:
        "Yellowing of skin and eyes due to liver or bile duct dysfunction. Accurate diagnosis and targeted treatment based on the underlying cause."
    },
    {
      name: "Gallbladder & Biliary Disorders",
      description:
        "Gallstones, bile duct obstruction, and inflammation treated with medications, ERCP, or surgery when required."
    },
    {
      name: "Pancreatitis",
      description:
        "Inflammation of the pancreas causing severe abdominal pain. Managed with medical care, nutritional support, and advanced interventions."
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
      <div className="body-container gastro-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="tag-badge">🩺 Gastroenterology</span>
          <h1 className="hero-title">Advanced Liver & Digestive Care</h1>
          <p className="hero-subtitle">
            Complete care for liver, stomach, intestine & digestive disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Gastroenterology</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Gastroenterology Department at <strong>Jigyasa Hospital</strong>
              provides comprehensive care for disorders of the
              <strong> liver, stomach, intestines, pancreas, and biliary system</strong>
              using advanced diagnostic and therapeutic techniques.
            </p>

            <p>
              Our experienced gastroenterologists and hepatologists specialize in
              managing liver diseases, acid reflux, intestinal disorders,
              pancreatitis, and gallbladder conditions with a strong focus on
              <strong> accurate diagnosis, patient safety, and long-term digestive health</strong>.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./Gastroenterology.jpg"
              alt="Gastroenterology Department"
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
              <li><strong>Endoscopy & Colonoscopy</strong></li>
              <li><strong>ERCP & Advanced Imaging</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Liver & Hepatology Care</h2>
            <ul>
              <li><strong>Fatty Liver & Hepatitis Treatment</strong></li>
              <li><strong>Cirrhosis Management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Digestive Disorders</h2>
            <ul>
              <li><strong>GERD, IBS & IBD</strong></li>
              <li><strong>Celiac Disease Care</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Therapeutic Procedures</h2>
            <ul>
              <li><strong>Polypectomy & Variceal Banding</strong></li>
              <li><strong>Nutritional Counseling</strong></li>
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
            Click to explore liver & digestive conditions we manage
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

export default Liver;
