import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Brain = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Stroke",
      description:
        "Sudden interruption of blood supply to the brain causing weakness, speech difficulty, or loss of consciousness. Managed with rapid diagnosis, emergency care, and structured rehabilitation."
    },
    {
      name: "Epilepsy (Seizure Disorders)",
      description:
        "Neurological condition marked by recurrent seizures. Treated with detailed evaluation, medication management, and long-term monitoring."
    },
    {
      name: "Brain Tumors",
      description:
        "Abnormal growths within the brain causing headaches, vision problems, or neurological deficits. Managed with advanced imaging, medical care, and neurosurgical intervention when required."
    },
    {
      name: "Head Injury & Brain Trauma",
      description:
        "Brain injury due to accidents or falls leading to concussion or severe neurological damage. Managed with emergency care, close monitoring, and rehabilitation."
    },
    {
      name: "Neurodegenerative Disorders",
      description:
        "Conditions such as Parkinson’s disease and Alzheimer’s disease causing progressive loss of movement, memory, and cognitive function. Managed with long-term medical and supportive care."
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
          <div className="tag-badge">🧠 Neurology</div>
          <h1 className="hero-title">Neurology & Brain Care Department</h1>
          <p className="hero-subtitle">
            Advanced diagnosis and treatment for brain, nerve, and neurological disorders
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Neurology Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Neurology Department at <strong>Jigyasa Hospital</strong> provides
              expert, patient-centered care for disorders affecting the brain,
              spinal cord, nerves, and muscles using advanced medical technology.
            </p>
            <p>
              Our experienced neurologists offer comprehensive care for stroke,
              epilepsy, headaches, movement disorders, neuromuscular diseases,
              and other complex neurological conditions with compassion and
              clinical precision.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="./neurology.jpg"
              alt="Neurology Department"
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
            <h2>Neurological Diagnostics</h2>
            <ul>
              <li><strong>EEG, EMG & nerve conduction studies</strong></li>
              <li><strong>MRI & CT brain imaging</strong></li>
              <li><strong>Lumbar puncture & neurovascular tests</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Stroke & Emergency Neurology</h2>
            <ul>
              <li><strong>Acute stroke management</strong></li>
              <li><strong>Post-stroke rehabilitation</strong></li>
              <li><strong>Secondary stroke prevention</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Epilepsy & Movement Disorders</h2>
            <ul>
              <li><strong>Seizure disorder management</strong></li>
              <li><strong>Parkinson’s & tremor care</strong></li>
              <li><strong>Botox & advanced therapies</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Advanced Neurology Care</h2>
            <ul>
              <li><strong>Multiple sclerosis management</strong></li>
              <li><strong>Sleep disorder evaluation</strong></li>
              <li><strong>Neuromuscular disease care</strong></li>
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
            Click on a condition to learn more about our neurological care
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

export default Brain;
