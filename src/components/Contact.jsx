import React, { useState } from "react";
import "./contact.css";
import Footer from "./Footer";
import {
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaHeadset,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    message: "",
  });

  const departments = [
    "Pharmacy",
    "Cardiology",
    "Gynecology",
    "Pediatrics",
    "Orthopedics",
    "Laparoscopic Surgery",
    "GI and General Surgery",
    "Oral and Maxillofacial Surgery",
    "Dermatology",
    "Family Medicine",
    "Neurosurgery",
    "Psychiatry",
    "Plastic Surgery",
    "Endocrinology",
    "Gastroenterology",
    "Rheumatology",
    "Ophthalmology",
    "Radiology",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Appointment Request - ${formData.department}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0ADepartment: ${formData.department}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:info@jigyasahospital.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <div className="contact-content">
        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-left">
            <span className="contact-badge">CONTACT US</span>
            <h1>Book An Appointment!</h1>
            <p>
              Booking an appointment is quick and easy! Select your preferred
              doctor, choose a convenient date and time, and we'll ensure
              everything is set for your visit. Our team is here to provide you
              with the best care, tailored to your needs.
            </p>
            <button className="ambulance-btn">Free ambulance</button>
            <p className="social-label">Follow us on social media :</p>
            <div className="social-icons">
              <FaTwitter />
              <FaInstagram />
              <FaWhatsapp />
            </div>

            {/* Google Map Embed */}
            <div className="map-container">
              <iframe
                title="Jigyasa Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.183154775038!2d78.761983175177!3d28.828992475505224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390abfd1e3a64e15%3A0xcdb1f17039ec7b9f!2sJigyasa%20Hospital!5e0!3m2!1sen!2sin!4v1720228572664!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            {/* Updated Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required
              />
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="department-select"
              >
                <option value="" disabled>
                  Select Department
                </option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                rows="6"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-card-section">
        <div className="info-card">
          <div className="span-cards">
            <span>
              <FaMapMarkerAlt className="icon" />
            </span>
            <span>
              <h3>Location</h3>
            </span>
          </div>
          <p className="info-text">
            <p>Visit us at:</p>
            Jigyasa Hospital
            <br />
            Near Miglani Cinema,
            <br />
            Rampur Road, Moradabad 244001
          </p>
        </div>

        <div className="info-card">
          <div className="span-cards">
            <span>
              <FaHeadset className="icon" />
            </span>
            <span>
              <h3>24/7 Service</h3>
            </span>
          </div>
          <p className="info-text">
            <p>Call us on:</p>
            Mob: 7900903333
          </p>
        </div>

        <div className="info-card">
          <div className="span-cards">
            <span>
              <FaEnvelope className="icon" />
            </span>
            <span>
              <h3>Drop a Line</h3>
            </span>
          </div>
          <p className="info-text">
            <p>Email us at:</p>info@jigyasahospital.in
          </p>
        </div>

        <div className="info-card">
          <div className="span-cards">
            <span>
              <FaClock className="icon" />
            </span>
            <span>
              <h3>Office Hours</h3>
            </span>
          </div>
          <p className="info-text">
            <p>Hours of Operation:</p>
            24/7 Medical Care & Support
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;