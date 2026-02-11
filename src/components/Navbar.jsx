import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setPagesDropdownOpen(false);
        setGalleryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePagesToggle = (e) => {
    e.preventDefault();
    setPagesDropdownOpen(!pagesDropdownOpen);
    setGalleryDropdownOpen(false);
  };

  const handleGalleryToggle = (e) => {
    e.preventDefault();
    setGalleryDropdownOpen(!galleryDropdownOpen);
    setPagesDropdownOpen(false);
  };

  return (
    <div className={`navbar-wrapper ${isScrolled ? "navbar-sticky" : ""}`}>
      {/* Top Header */}
      <div className="top-header">
        <div className="top-left">
          <a href="tel:7900903333" className="contact-link">
            <FontAwesomeIcon icon={faPhone} className="nav-icon" />
            7900903333
          </a>
          <span className="contact-location">
            <FontAwesomeIcon icon={faLocationDot} className="nav-icon" />
            Near Milgani Cinema, Rampur Road, Moradabad
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-top">
            <a href="/" className="logo" onClick={() => window.location.reload()}>
              <img src="logo.png" alt="logo" />
            </a>

            <button
              className="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`hamburger-line ${menuOpen ? "active" : ""}`} />
              <span className={`hamburger-line ${menuOpen ? "active" : ""}`} />
              <span className={`hamburger-line ${menuOpen ? "active" : ""}`} />
            </button>
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link to="/department" onClick={() => setMenuOpen(false)}>
                DEPARTMENTS
              </Link>
            </li>

            <li>
              <Link to="/doctors" onClick={() => setMenuOpen(false)}>
                DOCTORS
              </Link>
            </li>

            {/* PAGES DROPDOWN */}
            <li className={`dropdown ${pagesDropdownOpen ? "open" : ""}`}>
              <Link to="#" className="dropdown-title" onClick={handlePagesToggle}>
                PAGES
                <span
                  className={`dropdown-icon ${
                    pagesDropdownOpen ? "rotated" : ""
                  }`}
                >
                  ▼
                </span>
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/facility"
                    onClick={() => {
                      setMenuOpen(false);
                      setPagesDropdownOpen(false);
                    }}
                  >
                    Facility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonial"
                    onClick={() => {
                      setMenuOpen(false);
                      setPagesDropdownOpen(false);
                    }}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={() => {
                      setMenuOpen(false);
                      setPagesDropdownOpen(false);
                    }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </li>

            {/* GALLERY DROPDOWN */}
            <li className={`dropdown ${galleryDropdownOpen ? "open" : ""}`}>
              <Link
                to="#"
                className="dropdown-title"
                onClick={handleGalleryToggle}
              >
                GALLERY
                <span
                  className={`dropdown-icon ${
                    galleryDropdownOpen ? "rotated" : ""
                  }`}
                >
                  ▼
                </span>
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/photo-gallery"
                    onClick={() => {
                      setMenuOpen(false);
                      setGalleryDropdownOpen(false);
                    }}
                  >
                    Photo Gallery
                  </Link>
                </li>

                <li>
                  <Link
                    to="/video-gallery"
                    onClick={() => {
                      setMenuOpen(false);
                      setGalleryDropdownOpen(false);
                    }}
                  >
                    Video Gallery
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="nav-right">
            <Link to="/contact" className="appointment-btn">
              <FontAwesomeIcon icon={faCalendarCheck} className="btn-icon" />
              <span className="btn-text">Book Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
