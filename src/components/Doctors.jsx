import React from "react";
import "./doctors.css";
import Footer from "./Footer";

const doctorList = [
  {
    name: "Dr. C.P. Singh",
    title: "Senior Consultant Physician M.B.B.S, M.D.(Medicine) KGMC Lucknow",
    description: "Expert in surgical procedures, ensuring precise treatments, faster recovery, and optimal patient care.",
    image: "/doctors/dr-cp-singh.jpg", // Add your image path
    
  },
  {
    name: "Dr. Amit Kumar Singh",
    title: "MD(BHU), DM Cardiology (KGMU), FSCAI Senior Interventional Cardiologist",
    description: "Committed to Protecting Your Heart with Expertise and Compassion.",
    image: "/doctors/dr-amit-kumar-singh.jpg",
    
  },
  {
    name: "Dr. Akansha Singh",
    title: "MBBS MS OBG,Fellowship in ART OBS & Gynecologist",
    description: "Specializing in women's health, maternity care, and reproductive wellness with personalized, compassionate care.",
    image: "/doctors/dr-akansha.jpg",
  
  },
  {
    name: "Dr. Sana Ibad Khan",
    title: "M.D. (Pediatrics), Fellow Neonatology Senior Pediatrician",
    description: "Dedicated to child healthcare, offering expert diagnosis, treatment, and preventive care for overall well-being.",
    image: "/doctors/dr-sana-ibad-khan.png",
  
  },
  {
    name: "Dr. Shariq Ahmad",
    title: "MBBS, D. Ortho Senior Orthopedician",
    description: "Where Precision Medicine Meets Compassionate Healing",
    image: "/doctors/dr-shariq.jpg",
    
  },
  {
    name: "Dr. Vibhor Agarwal",
    title: "MBBS, MS, FIAGES General & Laparoscopic Surgeon",
    description: "Advanced Keyhole Surgery for Faster Healing and Better Outcomes",
    image: "/doctors/dr-vibhor-agarwal.jpg",
    
  },
  {
    name: "Dr. Imran",
    title: "MBBS KGMU Lucknow DPM (MD) (cip RANCHI) Consultant Neuropsychiatrist",
    description: "Specialized in caring for the brain, spine, and nervous system.",
    image: "/doctors/dr-imran.jpg",
    
  },
  {
    name: "Dr. Kriti Kishore",
    title: "MBBS, MD DM (Rheumatologist, KGMU) Senior Consultant Rheumatology",
    description: "Advanced Keyhole Surgery for Faster Healing and Better Outcomes",
    image: "/doctors/dr-kriti-kishor.jpg",
  
  },
  {
    name: "Dr. Anil Rajput",
    title: "M.B.B.S., M.S., (M.Ch. (Plastic Surgery) F.L.C.L.S., F.L.C.S., F.I.H.R.S)",
    description: "Advanced Keyhole Surgery for Faster Healing and Better Outcomes",
    image: "/doctors/dr-amit-rajput.jpg",
  
  },
  {
    name: "Dr. Abida Ali",
    title: "M.B.B.S., M.D.(JNMCH), PGDD (RIMS) Ex Senior Resident(LNJP, New Delhi)",
    description: "Expert in treating skin, hair, and nail disorders with advanced dermatological care and precision.",
    image: "/doctors/dr-abida-ali.jpg",
  
  },
  {
  name: "Dr. Ashish Gupta",
  title: "MBBS, MD(AIIMS,New Delhi) DM Endo (PGIMER,Chandigarh) Consultant Endocrinologist",
  description: "Expert in diabetes, thyroid, hormonal disorders, and reproductive health, providing comprehensive endocrine care.",
  image: "/doctors/dr-ashish-gupta.jpg",
},
{
  name: "Dr. Deeksha Singh",
  title: "MBBS, MS Ophthalmologist",
  description: "Provides comprehensive eye care services, including diagnosis and treatment of various eye conditions, using modern technology and expert medical care.",
  image: "/doctors/dr-disha-singhg.jpeg",
},
{
  name: "Dr. Pabitra Sahu",
  title: "Senior Consultant - Gastroenterology ,Gastroenterology, Hepatology & Endoscopy",
  description: "Offers comprehensive care for digestive, liver, and gastrointestinal disorders, including advanced diagnostic endoscopy and personalized treatment using modern medical technology.",
  image: "/doctors/dr-pavitra-sahu.png",
},
{
  name: "Dr. Pragnesh Desai",
  title: "Principal Consultant -Urology, Kidney Transplant, Robotic Surgery",
  description: "Advanced care for kidney and urinary tract diseases, offering modern urology, kidney transplant services, and minimally invasive robotic surgery with a patient-focused approach.",
  image: "/doctors/dr-parnesh.png",
},
{
  name: "Dr. Faran Naim",
  title: "Senior Consultant - Hematology & Bone Marrow Transplantation",
  description: "Advanced care for blood disorders and blood cancers, offering comprehensive hematology services and bone marrow transplantation with a patient-centered approach.",
  image: "/doctors/dr-faran.png",
},
{
  name: "Dr. Rahul Kumar",
  title: "MBBS, DNB (General Surgery) DNB (Gastro Surgery) Senior GI Surgeon",
  description: "Advanced surgical care for digestive system disorders, offering minimally invasive laparoscopic procedures with a focus on safety, precision, and faster recovery.",
  image: "/doctors/dr-rahul-singh.jpeg",
},
{
  name: "Dr. Karishma Singh",
  title: "MBBS, MS (Obst & Gynae) IVF Specialist and Laparoscopic Gynaecologic\nSurgeonFormer Consultant (Obst & Gynae)",
  description: "Comprehensive care for women’s health, fertility, and reproductive treatments.",
  image: "/doctors/dr-karishma.jpeg",
},
{
  name: "Dr. Ankit Singh",
  title: "MBBS (SRMS, IMS Bareilly) Family Physician",
  description: "Comprehensive primary care for all ages, focusing on prevention, diagnosis, and personalized treatment.",
  image: "/doctors/dr-ankit-singh.png",
},


];

const Doctors = () => {
  return (
    <div className="doctors-page">
      <section className="doctors-hero">
        <h1>Doctors</h1>
      </section>

      <section className="doctors-grid">
        {doctorList.map((doc, index) => (
          <div key={index} className="doctor-card">
            <div 
              className="doctor-image"
              style={{
                backgroundImage: `url(${doc.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
           
            <h3>{doc.name}</h3>
            <p className="doctor-title">{doc.title}</p>
            <p className="doctor-desc">{doc.description}</p>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default Doctors;
