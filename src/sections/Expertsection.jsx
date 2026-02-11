import "./expertsection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';

const Expertsection = () => {
  const navigate = useNavigate();

  const doctorList = [
    {
      name: "Dr. C.P. Singh",
      title: "Senior Consultant Physician M.B.B.S, M.D.(Medicine) KGMC Lucknow",
      description: "Expert in surgical procedures, ensuring precise treatments, faster recovery, and optimal patient care.",
      image: "/doctors/dr-cp-singh.jpg"
    },
    {
      name: "Dr. Amit Kumar Singh",
      title: "MD(BHU), DM Cardiology (KGMU), FSCAI Senior Interventional Cardiologist",
      description: "Committed to Protecting Your Heart with Expertise and Compassion.",
      image: "/doctors/dr-amit-kumar-singh.jpg"
    },
    {
      name: "Dr. Akansha Singh",
      title: "MBBS MS OBG,Fellowship in ART OBS & Gynecologist",
      description: "Specializing in women's health, maternity care, and reproductive wellness with personalized, compassionate care.",
      image: "/doctors/dr-akansha-singh2.jpg"
    },
    {
      name: "Dr. Sana Ibad Khan",
      title: "M.D. (Pediatrics), Fellow Neonatology Senior Pediatrician",
      description: "Dedicated to child healthcare, offering expert diagnosis, treatment, and preventive care for overall well-being.",
      image: "/doctors/dr-sana-ibad-khan.png"
    },
    {
      name: "Dr. Shariq Ahmad",
      title: "MBBS, D. Ortho Senior Orthopedician",
      description: "Where Precision Medicine Meets Compassionate Healing",
      image: "/doctors/dr-shariq.jpg"
    },
    {
      name: "Dr. Vibhor Agarwal",
      title: "MBBS, MS, FIAGES General & Laparoscopic Surgeon",
      description: "Advanced Keyhole Surgery for Faster Healing and Better Outcomes",
      image: "/doctors/dr-vibhor-agarwal.jpg"
    },
  ];

  return (
    <div className="expert-section">
      <h2 className="expert-section-subtitle">OUR EXPERTS</h2>
      <h1 className="expert-section-title">Our Medical Specialists</h1>
      <p className="expert-section-description">
        Our team of highly skilled and experienced medical specialists is
        dedicated to providing exceptional care across various fields of
        medicine. With expertise in diagnostics, treatment, and preventive care,
        our specialists work together to ensure you and your family receive
        comprehensive, compassionate, and personalized healthcare.
      </p>

      {/* 🔁 Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="doctor-swiper"
      >
        {doctorList.map((doc, index) => (
          <SwiperSlide key={index}>
            <div className="home-doctor-card">
              <div 
                className="home-doctor-image"
                style={{
                  backgroundImage: `url(${doc.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top'
                }}
              />
              <h3>{doc.name}</h3>
              <p className="home-doctor-title">{doc.title}</p>
              <p className="home-doctor-desc">{doc.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Doctors Button */}
      <div className="view-all-container">
        <button 
          className="view-all-button"
          onClick={() => navigate('/doctors')}
        >
          View All Doctors
        </button>
      </div>
    </div>
  );
};

export default Expertsection;
