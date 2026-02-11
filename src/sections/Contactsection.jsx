import "./contactsection.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contactsection = () => {
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
    <section className="home-contact-section">
      <div className="home-contact-container">
        {/* Left Side */}
        <div className="home-contact-left">
          <span className="home-contact-badge">CONTACT US</span>
          <h1>Book An Appointment!</h1>
          <p>
            Booking an appointment is quick and easy! Select your preferred
            doctor, choose a convenient date and time, and we'll ensure
            everything is set for your visit. Our team is here to provide you
            with the best care, tailored to your needs.
          </p>

          <div className="home-card-section">
            <div className="contact-info-card"></div>
            <div className="home-span-cards">
              <span>
                <i className="fas fa-map-marker-alt home-icon"></i>
              </span>
              <span>
                <h3>Address:</h3>
              </span>
            </div>
            <p className="contact-info-text">
              Near Miglani Cinema, Rampur Road, Moradabad, 244001
            </p>
          </div>
          <div className="contact-info-card">
            <div className="home-span-cards">
              <span>
                <i className="fas fa-headset home-icon"></i>
              </span>
              <span>
                <h3>Phone: </h3>
              </span>
            </div>
            <p className="home-info-text"> 7900903333</p>
          </div>

          <div className="contact-info-card">
            <div className="home-span-cards">
              <span>
                <i className="fas fa-envelope home-icon"></i>
              </span>
              <span>
                <h3>E-mail: </h3>
              </span>
            </div>
            <p className="contact-info-text">info@jigyasahospital.in</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="home-map-container">
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
      <div className="home-contact-right">
        <form className="home-contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <span className="input-underline"></span>
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
              className="form-input"
            />
            <span className="input-underline"></span>
          </div>

          <div className="input-group">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="form-input form-select"
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
            <span className="input-underline"></span>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="form-input form-textarea"
            ></textarea>
            <span className="input-underline"></span>
          </div>

          <button type="submit" className="send-button">
            <span className="button-content">
              <span className="send-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2989/2989993.png"
                  alt="Msg icon"
                />
              </span>
              Send Message
            </span>
          </button>
        </form>

        <div className="appointment-section">
          <Link to="/contact">
            <button className="book-appointment">
              <span className="appointment-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17097/17097146.png"
                  alt="Appointment Icon"
                />
              </span>
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;