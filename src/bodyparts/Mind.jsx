import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Psychiatry = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState(null);

  const conditions = [
    {
      name: "Depression",
      description:
        "Persistent sadness, loss of interest, low energy, and negative thoughts affecting daily life. Treated with medication, psychotherapy, counseling, and lifestyle support."
    },
    {
      name: "Anxiety Disorders",
      description:
        "Conditions including generalized anxiety, panic disorder, phobias, and social anxiety causing excessive worry and fear. Managed with therapy, medications, and stress management."
    },
    {
      name: "Bipolar Disorder",
      description:
        "Mood disorder characterized by episodes of depression and mania or hypomania. Treated with mood stabilizers, psychotherapy, and long-term monitoring."
    },
    {
      name: "Schizophrenia & Psychotic Disorders",
      description:
        "Severe mental disorders affecting thinking, perception, and behavior. Managed with antipsychotic medications, counseling, and rehabilitation programs."
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      description:
        "Recurrent intrusive thoughts and compulsive behaviors. Treated with cognitive behavioral therapy (CBT) and medications."
    },
    {
      name: "Addiction & Substance Abuse",
      description:
        "Dependence on alcohol, drugs, tobacco, or behavioral addictions. Managed through de-addiction programs, counseling, relapse prevention, and rehabilitation."
    },
    {
      name: "Stress, Sleep & Adjustment Disorders",
      description:
        "Mental health conditions related to stress, insomnia, and life changes. Managed with counseling, therapy, and lifestyle interventions."
    },
    {
      name: "Child, Adolescent & Geriatric Psychiatry",
      description:
        "Specialized mental health care for children, adolescents, elderly patients, and women’s mental health concerns."
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
          <div className="tag-badge">🧠 Psychiatry</div>
          <h1 className="hero-title">Psychiatry & Mental Health Care</h1>
          <p className="hero-subtitle">
            Compassionate, confidential, and evidence-based mental health services
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About Psychiatry Department</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The Psychiatry Department at <strong>Jigyasa Hospital</strong>
              provides comprehensive, compassionate, and confidential mental
              health care for individuals across all age groups in a safe and
              stigma-free environment.
            </p>
            <p>
              Our experienced psychiatrists, psychologists, and counselors
              offer evidence-based treatment for mood disorders, anxiety,
              psychosis, addiction, stress-related conditions, and complex
              mental health challenges through personalized care plans.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/1200x/58/ce/c0/58cec01ae461dce25d6a4caf181a3a9a.jpg"
              alt="Psychiatry Department"
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
            <h2>Mood & Anxiety Disorders</h2>
            <ul>
              <li><strong>Depression & bipolar disorder</strong></li>
              <li><strong>Anxiety & panic disorders</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Psychotic Disorders</h2>
            <ul>
              <li><strong>Schizophrenia treatment</strong></li>
              <li><strong>Early psychosis intervention</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Addiction & De-addiction</h2>
            <ul>
              <li><strong>Alcohol & substance abuse treatment</strong></li>
              <li><strong>Relapse prevention programs</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Therapy & Counseling</h2>
            <ul>
              <li><strong>Psychotherapy & CBT</strong></li>
              <li><strong>Family & marital counseling</strong></li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Specialized Psychiatry</h2>
            <ul>
              <li><strong>Child & adolescent psychiatry</strong></li>
              <li><strong>Geriatric & women’s mental health</strong></li>
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
            Click on a condition to learn more about our mental health care
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

export default Psychiatry;
