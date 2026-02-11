import React from 'react';
import './testimonial.css';
import Footer from './Footer';

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
  {
    stars: 5,
    title: "Excellent service and friendly staff.",
    text: "“The doctors and nurses here are amazing. They not only provide excellent medical care, but they also take the time to explain everything and make sure I’m comfortable.”",
    name: "Manoj",
    city: "Kolkata",
   
  },
  {
    stars: 5,
    title: "A great place for quality healthcare.",
    text: "“I’ve been coming here for my regular checkups for over a year now, and every visit has been a positive experience. The staff is welcoming, and the medical professionals are very thorough.”",
    name: "Amit",
    city: "India",
    
  },
  {
    stars: 4,
    title: "Life-changing experience!",
    text: "“I had a complicated health issue, and the team here worked tirelessly to ensure I got the best possible care. I feel so much better now, and I’m incredibly grateful for their dedication and expertise.”",
    name: "Tarun",
    city: "Kanpur",
    
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-page">
      <section className="testimonial-hero">
        <h1>Testimonials</h1>
      </section>
    <div className="testimonial-container">
      <h1 className="testimonial-title">What Our Patients Say</h1>
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
    </div>
    <Footer/>
    </div>
  );
};

export default Testimonial;
