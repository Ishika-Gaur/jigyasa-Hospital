import React, { useState } from "react";
import "./about.css";
import Footer from "./Footer";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About us</h1>
      </section>

      {/* Section: We Are Best Among Others */}
      <section className="about-info">
        <div className="info-text">
          <h4 className="tag">WHO WE ARE</h4>
          <h2>We Are Best Among Others?</h2>
          <p>
            Our commitment to excellence sets us apart. With a team of skilled
            professionals, state-of-the-art technology, and a patient-centered
            approach, we deliver unmatched healthcare services, ensuring your
            well-being is our top priority.
          </p>
          <ul>
            <li>✔ Experienced Medical Team</li>
            <li>✔ Quick & Efficient Service</li>
            <li>✔ Affordable & Transparent Pricing</li>
            <li>✔ Patient-Centered Care</li>
          </ul>
        </div>

        <div className="info-image">
          <div className="image-wrapper">
            {!isVideoPlaying ? (
              <>
                <img src="/ph-5.jpeg" alt="Doctors" className="video-thumbnail" />
                <button
                  onClick={handlePlayVideo}
                  className="play-button"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="play-icon"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            ) : (
              <video
                controls
                autoPlay
                className="video-player"
                src="/patientCareVd.mp4"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-box">
          <h3>120K +</h3>
          <p>HAPPY PATIENTS</p>
        </div>
        <div className="stat-box">
          <h3>200</h3>
          <p>SPECIALIST DOCTORS</p>
        </div>
        <div className="stat-box">
          <h3>30+</h3>
          <p>MEDICAL SERVICES</p>
        </div>
        <div className="stat-box">
          <h3>150K</h3>
          <p>PROBLEM SOLVE</p>
        </div>
      </section>

      {/* Quality Care Section */}
      <section className="quality-care">
        <h3 className="tag">WHAT WE OFFER</h3>
        <h2>Delivering the highest quality care.</h2>
        <p>
          We are committed to providing exceptional healthcare through advanced
          treatments, experienced doctors, and a compassionate approach. Our
          focus is on achieving the best possible outcomes for our patients,
          ensuring their comfort, safety, and satisfaction at every step of
          their healthcare journey.
        </p>
      </section>
      <section className="about-cards">
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15192/15192700.png"
              alt="Medical Services Icon"
            />
          </div>
          <h3>Transparency On Report</h3>
          <p>
            We believe in complete transparency when it comes to your health.
            All medical reports are provided clearly and accurately, ensuring
            you understand your diagnosis, treatment plan, and any further
            steps. Our goal is to keep you fully informed every step of the way.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4800/4800178.png"
              alt="Medical Services Icon"
            />
          </div>
          <h3>Our Vision</h3>
          <p>
            To be a leading healthcare provider, delivering exceptional care
            with compassion and innovation. We strive to enhance the well-being
            of individuals and communities, setting new standards in healthcare
            through advanced practices, dedicated professionals, and a
            patient-centered approach.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5582/5582302.png"
              alt="Medical Services Icon"
            />
          </div>
          <h3>History Of Beginning</h3>
          <p>
            Healthcare has its roots in ancient civilizations, where people used
            herbal remedies and early surgical techniques to treat illnesses.
            Over centuries, these practices developed into more organized
            systems, eventually evolving into the advanced healthcare services .
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3481/3481061.png"
              alt="Medical Services Icon"
            />
          </div>
          <h3>Qualified Doctors</h3>
          <p>
            Our team of highly qualified doctors is committed to providing
            exceptional care. With expertise in various medical fields, they
            combine advanced knowledge, years of experience, and a compassionate
            approach to ensure the best possible outcomes for our patients.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6624/6624423.png"
              alt="Medical Services Icon"
            />
          </div>
          <h3>Transparency On Report</h3>
          <p>
            We believe in complete transparency when it comes to your health.
            All medical reports are provided clearly and accurately, ensuring
            you understand your diagnosis, treatment plan, and any further
            steps. Our goal is to keep you fully informed every step of the way.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4800/4800178.png"
              alt="Medical Services Icon"
            />
          </div>
          <h3>Pharmacy Store</h3>
          <p>
            Our pharmacy offers a wide range of prescription medications,
            over-the-counter products, and health supplements. With
            knowledgeable pharmacists available for personalized advice, we
            ensure you receive the right medications and expert guidance for all
            your health needs.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;