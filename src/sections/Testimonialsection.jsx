import "./testimonialsection.css";

const Testimonialsection = () => {
  const testimonials = [
    {
      stars: 5,
      title: "Exceptional care and service!",
      text: "I’ve been to many hospitals, but the level of care here is unmatched. The staff is friendly, and the doctors take the time to listen and address all concerns. I felt truly cared for throughout my entire visit.",
      name: "Ravi",
      city: "Delhi",
      
    },
    {
      stars: 5,
      title: "Highly recommended!",
      text: "The treatment I received was top-notch. The team was knowledgeable and made me feel comfortable during my procedure. I couldn’t be more satisfied with the results.",
      name: "Priya",
      city: "Mumbai",
      
    },
    {
      stars: 4,
      title: "A truly caring and professional team.",
      text: "I’ve had a wonderful experience here. From the friendly reception staff to the expert doctors, everyone was professional and caring. I felt supported every step of the way.",
      name: "Kanika",
      city: "Bangalore",
     
    },
  ];

  return (
    
      <section className="testimonials-section">
        <h2 className="testimonials-section-subtitle">Testimonials</h2>
        <h1 className="testimonials-section-title">Patient Experience</h1>
        <p className="testimonials-section-description">
          We prioritize patient satisfaction and well-being at every step of
          their healthcare journey. Our patients’ experiences reflect our
          commitment to providing compassionate, high-quality care, with
          personalized attention and a focus on making every visit comfortable
          and effective.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {"★".repeat(item.stars)}
                {"☆".repeat(5 - item.stars)}
              </div>
              <h3>"{item.title}"</h3>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-user">
                  
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.city}</p>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    
  );
};

export default Testimonialsection;
