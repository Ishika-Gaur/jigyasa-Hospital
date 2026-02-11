import React, { useState } from "react";
import "./bodyparts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const GeneralMedicine = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      name: "Fever",
      description: "Comprehensive evaluation and treatment of fever with advanced diagnostic facilities to identify underlying causes and provide effective relief."
    },
    {
      name: "Viral Fever",
      description: "Specialized care for viral fever including symptomatic treatment, hydration therapy, and monitoring to ensure complete recovery."
    },
    {
      name: "H1N1 (Swine Flu)",
      description: "Expert management of H1N1 influenza with antiviral medications, respiratory support, and comprehensive care protocols."
    },
    {
      name: "Asthma (Bronchial Asthma) & COPD",
      description: "Advanced treatment for asthma and COPD including inhalers, bronchodilators, breathing exercises, and lifestyle modifications for better lung function."
    },
    {
      name: "Typhoid",
      description: "Complete typhoid fever treatment with appropriate antibiotics, IV fluids, fever management, and preventive counseling."
    },
    {
      name: "Malaria (Including Cerebral Malaria)",
      description: "Rapid diagnosis and treatment of malaria including cerebral malaria with antimalarials, supportive care, and complication prevention."
    },
    {
      name: "Pneumonia",
      description: "Comprehensive pneumonia care with antibiotics, oxygen therapy, chest physiotherapy, and monitoring to restore normal lung function."
    },
    {
      name: "Tuberculosis (TB) & Multi-Drug Resistant TB (MDR-TB)",
      description: "Complete TB treatment including MDR-TB with DOTS therapy, regular monitoring, and specialized drug regimens for resistant strains."
    },
    {
      name: "Liver Diseases & Cirrhosis",
      description: "Expert management of liver diseases and cirrhosis with medications, dietary modifications, and complication prevention strategies."
    },
    {
      name: "Kidney Diseases & Acute Kidney Injury",
      description: "Advanced care for kidney diseases and acute kidney injury with dialysis support, medications, and comprehensive monitoring."
    },
    {
      name: "Sexually Transmitted Diseases (STDs)",
      description: "Confidential diagnosis and treatment of STDs with appropriate medications, counseling, and preventive education."
    },
    {
      name: "Brain Infection (Encephalitis)",
      description: "Critical care for brain infections including encephalitis with antiviral therapy, supportive care, and neurological monitoring."
    },
    {
      name: "Meningitis (Brain Membrane Infection)",
      description: "Emergency treatment for meningitis with antibiotics, supportive care, and intensive monitoring to prevent complications."
    },
    {
      name: "Dengue Fever",
      description: "Specialized dengue care with platelet monitoring, IV fluid therapy, fever management, and prevention of hemorrhagic complications."
    },
    {
      name: "Chikungunya",
      description: "Comprehensive chikungunya treatment with pain management, anti-inflammatory medications, and supportive care for joint symptoms."
    },
    {
      name: "Jaundice & Hepatitis (A, B, C, D, E)",
      description: "Complete jaundice management and hepatitis treatment with liver function monitoring, medications, and dietary guidance for recovery."
    },
    {
      name: "Hypertension (High Blood Pressure)",
      description: "Effective management of high blood pressure with lifestyle modifications, medications, and regular monitoring to prevent cardiovascular complications."
    },
    {
      name: "Diabetes (Type 1 & Type 2)",
      description: "Comprehensive diabetes care including blood sugar management, medication optimization, dietary counseling, and prevention of complications."
    },
    {
      name: "Thyroid Disorders (Hypothyroidism & Hyperthyroidism)",
      description: "Expert treatment of thyroid conditions with hormone replacement therapy, regular monitoring, and management of metabolic functions."
    },
    {
      name: "Gastritis & Peptic Ulcer",
      description: "Treatment of stomach inflammation and ulcers with medications, dietary modifications, and lifestyle changes for long-term relief."
    },
    {
      name: "Diarrhea & Dysentery",
      description: "Management of acute and chronic diarrhea with rehydration therapy, antibiotics when needed, and identification of underlying causes."
    },
    {
      name: "Food Poisoning",
      description: "Prompt treatment of food poisoning with supportive care, hydration, medications, and monitoring to prevent dehydration and complications."
    },
    {
      name: "Anemia (Iron Deficiency & Other Types)",
      description: "Comprehensive anemia treatment with iron supplementation, dietary counseling, and investigation of underlying causes for effective management."
    },
    {
      name: "Vitamin Deficiencies (B12, D, etc.)",
      description: "Diagnosis and treatment of vitamin deficiencies with appropriate supplementation and dietary guidance to restore optimal health."
    },
    {
      name: "Urinary Tract Infections (UTI)",
      description: "Effective treatment of UTIs with appropriate antibiotics, hydration therapy, and preventive measures to reduce recurrence."
    },
    {
      name: "Common Cold & Cough",
      description: "Symptomatic relief for cold and cough with medications, rest recommendations, and monitoring for potential complications."
    },
    {
      name: "Allergic Reactions & Skin Allergies",
      description: "Management of allergic conditions with antihistamines, identification of allergens, and preventive strategies for better quality of life."
    },
    {
      name: "Joint Pain & Arthritis",
      description: "Treatment of joint pain and arthritis with pain management, anti-inflammatory medications, and physiotherapy recommendations."
    },
    {
      name: "Migraine & Headaches",
      description: "Comprehensive headache management with pain relief medications, trigger identification, and preventive strategies."
    },
    {
      name: "Chest Pain & Cardiac Evaluation",
      description: "Thorough evaluation of chest pain with ECG, cardiac markers, and appropriate management to rule out serious cardiac conditions."
    }
  ];

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(selectedDisease?.name === disease.name ? null : disease);
  };

  return (
    <>
      <div className="body-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="tag-badge">🏥 General Medicine</div>
          <h1 className="hero-title">Welcome To Department Of General Medicine</h1>
          <p className="hero-subtitle">
            Comprehensive, patient-centered healthcare for a wide range of medical conditions
          </p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">About General Medicine Department</h1>
          <div className="title-underline"></div>
        </div>
        <div className="about-wrapper">
          <div className="about-content-paragraph">
            <p>
              The General Medicine Department at Jigyasa Hospital is committed to providing comprehensive, patient-centered healthcare for a wide range of medical conditions affecting adults. We understand that good health is the foundation of a fulfilling life, and our mission is to deliver expert medical care with compassion, precision, and the latest medical advancements.
            </p>
            <p>
              We specialize in the diagnosis and treatment of conditions such as diabetes, hypertension, respiratory disorders, infectious diseases, gastrointestinal problems, thyroid disorders, fever of unknown origin, and lifestyle-related diseases. Each patient receives an individualized treatment plan tailored to their specific health needs, medical history, and personal circumstances.
            </p>
          </div>
          
          <div className="about-image-container">
            <img 
              src="https://i.pinimg.com/1200x/79/ca/cd/79cacd36b206e0e26204d7a48e4f8dc1.jpg" 
              alt="General Medicine" 
              className="about-image"
            />
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="section-header">
          <h1 className="section-title">Our Services</h1>
          <div className="title-underline"></div>
        </div>
        <div className="service-card-grid">
          <div className="service-card">
            <div className="card-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2913/2913133.png"
                alt="Diagnostic"
              />
            </div>
            <h2>Diagnostic Services</h2>
            <ul>
              <li>
                <strong>Complete Blood Count & Biochemistry</strong>
              </li>
              <li>
                <strong>ECG & Cardiac Monitoring</strong>
              </li>
              <li>
                <strong>Imaging (X-Ray, Ultrasound, CT Scan)</strong>
              </li>
            </ul>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2382/2382461.png"
                alt="Chronic Disease"
              />
            </div>
            <h2>Chronic Disease Management</h2>
            <ul>
              <li>
                <strong>Diabetes Care & Monitoring</strong>
              </li>
              <li>
                <strong>Hypertension Management</strong>
              </li>
              <li>
                <strong>Thyroid Disorder Treatment</strong>
              </li>
            </ul>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2913/2913145.png"
                alt="Acute Care"
              />
            </div>
            <h2>Acute Care Services</h2>
            <ul>
              <li>
                <strong>Fever Management</strong>
              </li>
              <li>
                <strong>Infectious Disease Treatment</strong>
              </li>
              <li>
                <strong>Emergency Medical Care</strong>
              </li>
              <li>
                <strong>Respiratory Infections</strong>
              </li>
            </ul>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2913/2913169.png"
                alt="Preventive"
              />
            </div>
            <h2>Preventive Healthcare</h2>
            <ul>
              <li>
                <strong>Routine Health Check-ups</strong>
              </li>
              <li>
                <strong>Vaccination Programs</strong>
              </li>
              <li>
                <strong>Health Screening Packages</strong>
              </li>
              <li>
                <strong>Lifestyle Counseling</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./gallery1.png" alt="Gallery 1" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery2.png" alt="Gallery 2" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery3.png" alt="Gallery 3" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery4.png" alt="Gallery 4" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery5.png" alt="Gallery 5" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery6.png" alt="Gallery 6" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery7.png" alt="Gallery 7" className="gallery-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery8.png" alt="Gallery 8" className="gallery-img" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="diseases-section">
        <div className="section-header">
          <h1 className="section-title">Conditions We Treat</h1>
          <p className="diseases-subtext">
            Click on any condition to learn more about our treatment approach
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="diseases-list-expandable">
          <div className="diseases-columns">
            {diseases.map((disease, index) => (
              <div key={index} className="disease-item-wrapper">
                <div 
                  className={`disease-item ${selectedDisease?.name === disease.name ? 'active' : ''}`}
                  onClick={() => handleDiseaseClick(disease)}
                >
                  <span className="disease-bullet">●</span>
                  <strong>{disease.name}</strong>
                  <span className="expand-icon">{selectedDisease?.name === disease.name ? '−' : '+'}</span>
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

export default GeneralMedicine;