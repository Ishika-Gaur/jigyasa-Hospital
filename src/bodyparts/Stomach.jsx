import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Stomach = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Acid Reflux & GERD",
      description:
        "Chronic acidity and heartburn caused by acid reflux. Managed with medications, dietary counseling, and lifestyle modification."
    },
    {
      name: "Gastritis & Peptic Ulcer Disease",
      description:
        "Inflammation or ulcers of the stomach lining causing pain and indigestion. Treated with medications and endoscopic evaluation."
    },
    {
      name: "Irritable Bowel Syndrome (IBS)",
      description:
        "Functional bowel disorder causing abdominal pain, bloating, constipation, or diarrhea. Managed with diet, medication, and stress control."
    },
    {
      name: "Inflammatory Bowel Disease (IBD)",
      description:
        "Crohn’s disease and ulcerative colitis causing chronic intestinal inflammation. Managed with long-term medical therapy and monitoring."
    },
    {
      name: "Liver Disorders",
      description:
        "Conditions such as fatty liver, hepatitis, cirrhosis, and jaundice treated with medical management and lifestyle guidance."
    },
    {
      name: "Pancreatic & Gallbladder Disorders",
      description:
        "Pancreatitis, gallstones, and biliary diseases managed with imaging, ERCP, and minimally invasive procedures."
    },
    {
      name: "GI Bleeding & Anemia",
      description:
        "Bleeding from stomach or intestines evaluated and treated using advanced endoscopy techniques."
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
          <div className="tag-badge">🍽️ Gastroenterology</div>
          <h1 className="hero-title">
            Department of Gastroenterology
          </h1>
          <p className="hero-subtitle">
            Expert care for digestive, liver, pancreas, and bowel disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Gastroenterology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Gastroenterology Department at Jigyasa Hospital provides
              comprehensive diagnosis and treatment for digestive system
              disorders using advanced endoscopy and modern medical technology.
            </p>
            <p>
              Our experienced gastroenterologists manage conditions affecting
              the stomach, intestines, liver, pancreas, and biliary system with
              a strong focus on accuracy, comfort, and long-term digestive health.
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
              <li><strong>Upper GI endoscopy</strong></li>
              <li><strong>Colonoscopy & biopsy</strong></li>
              <li><strong>ERCP & GI imaging</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Medical Gastroenterology</h2>
            <ul>
              <li><strong>Acidity, ulcers & IBS treatment</strong></li>
              <li><strong>IBD & chronic bowel disorders</strong></li>
              <li><strong>GI infection management</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Hepatology Services</h2>
            <ul>
              <li><strong>Fatty liver & hepatitis care</strong></li>
              <li><strong>Cirrhosis management</strong></li>
              <li><strong>Jaundice evaluation</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Advanced & Therapeutic Endoscopy</h2>
            <ul>
              <li><strong>GI bleeding control</strong></li>
              <li><strong>Polypectomy & stenting</strong></li>
              <li><strong>Minimally invasive procedures</strong></li>
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

      {/* Diseases Section */}
      <div className="diseases-section">
        <div className="section-header">
          <h1 className="section-title">Conditions We Treat</h1>
          <p className="diseases-subtext">
            Click on any condition to learn more about our gastroenterology care
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

export default Stomach;
