import React from "react";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div className="mid-section">
      <div className="left-section">
        <h3 className="who-we-are">WHO WE ARE</h3>

        <h1>We Are Best Among Others?</h1>
        <p className="description">
          Our commitment to excellence sets us apart. With a team of skilled
          professionals, state-of-the-art technology, and a patient-centered
          approach, we deliver unmatched healthcare services, ensuring your
          well-being is our top priority.
        </p>

        <div className="features">
          <ul>
            <li>✔ Experienced Medical Team</li>
            <li>✔ Quick & Efficient Service</li>
          </ul>

          <ul>
            <li>✔ Affordable & Transparent Pricing</li>
            <li>✔ Patient-Centered Care</li>
          </ul>
        </div>

        <button className="about-button" onClick={() => navigate("/about")}>
          MORE ABOUT US
        </button>
      </div>

      <div className="right-section">
        <img
          src="WhatsApp-Image-2025-02-18-at-15.57.37_a8e9449b-e1740197839432-992x1024.jpg"
          alt="doctor"
        />
        <div className="experience-badge">
          <div className="badge-icon">
            <FaUserMd />
          </div>

          <div className="badge-text">
            <h4>25+ Years Experience</h4>
            <p>Jigyasa Hospital – Healing with Care, Treating with Trust!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;