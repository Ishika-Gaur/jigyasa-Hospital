import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo and quote */}
        <div className="footer-col logo-col">
          <img src="/logo.png" alt="Jigyasa Hospital" className="footer-logo" />
          <p>
            "Dedicated to providing exceptional care with expertise and
            compassion. Your health and well-being are our top priority."
          </p>
        </div>

        {/* Our Company */}
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/departments">Departments</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/facility">Facilities</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>Feel free to contact & reach us!</p>
          <p>Near Miglani Cinema, Rampur road moradabad, 244001</p>
          <p>Email: info@jigyasahospital.in</p>
          <p>Phone: 7900903333</p>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="/doctors">Get Appointment</a>
            </li>
            <li>
              <a href="/doctors">About Doctors</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="https://www.instagram.com/jigyasa_hospital/?utm_source=qr&igsh=MXc3bjY5dWN4aDduMQ%3D%3D#">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61572698922701">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="/tandc">Terms & Condition</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=61572698922701"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://x.com/jigyasahospital?t=zr7yEeDv2E-kloF8np3Sng&s=09"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/jigyasa_hospital/?utm_source=qr&igsh=MXc3bjY5dWN4aDduMQ%3D%3D#"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>
          © 2025 Jigyasa Hospital. Powered by{" "}  
            <a href="https://www.zentrixinfotech.com/" target="_blank">
             Zentrix Infotech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
