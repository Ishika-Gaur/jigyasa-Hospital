import './offersection.css';

const Offersection = () => {
  return (
    <div className="offer-section">
      <div className="content-wrapper">
        <div className="header-section">
          <h2 className="section-subtitle">WHAT WE OFFER</h2>
          <h1 className="section-title">Live happily, Live healthily</h1>
          <p className="section-description">
            At <strong>Jigyasa Hospital</strong>, we provide a{" "}
            <strong>comprehensive range of medical services</strong> designed to
            meet the diverse healthcare needs of our patients. Our expert team
            ensures{" "}
            <strong>
              quality treatment, personalized care, and advanced medical solutions
            </strong>{" "}
            across various specialties.
          </p>
        </div>

        <div className="card-section">
          <div className="offer-card" data-aos="fade-up" data-delay="100">
            <div className="card-icon">
              <div className="icon-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/883/883407.png"
                  alt="Generic Medicine Icon"
                />
              </div>
            </div>
            <h3>Generic Medicine</h3>
            <p>
              Affordable and high-quality medicines to ensure effective treatment
              for all. Our pharmacy provides trusted generic alternatives that are
              just as safe and reliable as branded medicines.
            </p>
          </div>

          <div className="offer-card" data-aos="fade-up" data-delay="200">
            <div className="card-icon">
              <div className="icon-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4981/4981979.png"
                  alt="Health Screening Icon"
                />
              </div>
            </div>
            <h3>Health Checks & Screening</h3>
            <p>
              Early detection saves lives! Our advanced health check-ups and
              screenings help diagnose potential health issues at an early stage,
              ensuring timely and effective medical intervention.
            </p>
          </div>

          <div className="offer-card" data-aos="fade-up" data-delay="300">
            <div className="card-icon">
              <div className="icon-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/808/808999.png"
                  alt="Vaccination Icon"
                />
              </div>
            </div>
            <h3>Vaccination</h3>
            <p>
              Vaccination helps protect against infectious diseases by building
              immunity. It's safe, effective, and essential for both individual
              and public health. Jigyasa Hospital offers a wide range of vaccines
              for all ages.
            </p>
          </div>

          <div className="offer-card" data-aos="fade-up" data-delay="400">
            <div className="card-icon">
              <div className="icon-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3077/3077715.png"
                  alt="Medicine Consultation Icon"
                />
              </div>
            </div>
            <h3>Medicine Consultation</h3>
            <p>
              Expert doctors provide personalized consultations to diagnose,
              treat, and manage various health conditions. Whether addressing
              chronic illnesses, acute concerns, or general health guidance, the
              consultation ensures you receive the best care for your well-being.
            </p>
          </div>

          <div className="offer-card" data-aos="fade-up" data-delay="500">
            <div className="card-icon">
              <div className="icon-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5237/5237758.png"
                  alt="Doctor Receipt Icon"
                />
              </div>
            </div>
            <h3>Doctor Receipt</h3>
            <p>
              A doctor receipt includes essential details like the doctor's name,
              consultation fees, treatment provided, and prescribed medications.
              It serves as an important record for your medical history, ensuring
              transparency and clarity in your healthcare journey.
            </p>
          </div>

          <div className="offer-card" data-aos="fade-up" data-delay="600">
            <div className="card-icon">
              <div className="icon-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4968/4968662.png"
                  alt="Pharmacy Store Icon"
                />
              </div>
            </div>
            <h3>Pharmacy Store</h3>
            <p>
              Our pharmacy offers a wide range of prescription and
              over-the-counter medications, health supplements, and medical
              supplies. With knowledgeable staff available to assist, we ensure
              you receive the right products for your health needs, all at
              competitive prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offersection;