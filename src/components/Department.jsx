import React from "react";
import { useNavigate } from "react-router-dom";
import "./department.css";
import Footer from "./Footer";

const departments = [
  {
    title: "General Medicine",
    route: "/generalmedicine",
    icon: "https://cdn-icons-png.flaticon.com/128/883/883407.png",
    desc: "Our General Medicine department offers comprehensive care for the diagnosis, treatment, and prevention of a wide range of acute and chronic health conditions. Supported by experienced physicians and skilled medical staff, we provide personalized treatment plans focused on accurate diagnosis, effective management, and long-term well-being. We are committed to delivering timely, reliable, and patient-centered care while maintaining the highest standards of safety, quality, and affordability. Your overall health is our priority.",
  },
  {
    title: "Cardiology",
    route: "/heart",
    icon: "https://cdn-icons-png.flaticon.com/128/3974/3974808.png",
    desc: "Cardiology is the branch of medicine that focuses on the heart and blood vessels, ensuring every beat keeps you strong and healthy. Cardiologists specialize in diagnosing, treating, and preventing conditions such as heart disease, hypertension, and rhythm disorders. With advanced technology and compassionate care, cardiology plays a vital role in saving lives, improving quality of life, and guiding patients towards healthier hearts and longer futures.",
  },
  {
    title: "Gynecology",
    route: "/reproductive",
    icon: "https://cdn-icons-png.flaticon.com/128/5021/5021100.png",
    desc: "Gynecology is a medical specialty dedicated to women's health, focusing on the reproductive system and overall well-being at every stage of life. From adolescence to pregnancy, and through menopause, gynecologists provide expert care, guidance, and support to ensure a healthier and more confident future.",
  },
  {
    title: "Pediatrics",
    route: "/throat",
    icon: "https://cdn-icons-png.flaticon.com/128/12869/12869795.png",
    desc: "Pediatrics is the branch of medicine that specializes in the health and development of infants, children, and adolescents. Pediatricians provide comprehensive care — from routine checkups and vaccinations to managing illnesses and guiding healthy growth.",
  },
  {
    title: "Orthopedics",
    route: "/knee",
    icon: "https://cdn-icons-png.flaticon.com/128/6177/6177173.png",
    desc: "Orthopedics focuses on the diagnosis, treatment, and prevention of conditions affecting bones, joints, muscles, ligaments, and the spine. Specialists help restore mobility, relieve pain, and improve quality of life.",
  },
  {
    title: "Laparoscopic Surgery",
    route: "/liver",
    icon: "https://cdn-icons-png.flaticon.com/128/8670/8670713.png",
    desc: "Laparoscopic surgery uses small incisions and advanced technology to perform procedures with precision and minimal discomfort, leading to faster recovery and reduced pain.",
  },
  {
    title: "GI & General Surgery",
    route: "/varicose",
    icon: "https://cdn-icons-png.flaticon.com/128/12068/12068209.png",
    desc: "GI and General Surgery covers surgical treatment of digestive system disorders and other abdominal conditions using advanced techniques for faster recovery.",
  },
  {
    title: "Oral & Maxillofacial Surgery",
    route: "/teeth",
    icon: "https://cdn-icons-png.flaticon.com/128/4634/4634931.png",
    desc: "This specialty treats conditions affecting the mouth, jaw, face, and neck, including dental implants, jaw surgery, and facial reconstruction.",
  },
  {
    title: "Dermatology",
    route: "/skin",
    icon: "https://cdn-icons-png.flaticon.com/128/9187/9187067.png",
    desc: "Dermatology focuses on skin, hair, and nail health, providing medical and cosmetic treatments for various skin conditions.",
  },
  {
    title: "Family Medition",
    route: "/body",
    icon: "https://cdn-icons-png.flaticon.com/128/16557/16557989.png",
    desc: "Family Medicine offers comprehensive healthcare for individuals and families across all age groups with long-term personalized care.",
  },
  {
    title: "Neurosurgery",
    route: "/brain",
    icon: "https://cdn-icons-png.flaticon.com/128/2920/2920235.png",
    desc: "Neurosurgery focuses on surgical treatment of brain, spine, and nervous system disorders using advanced technology and precision.",
  },
  {
    title: "Psychiatry",
    route: "/mind",
    icon: "https://cdn-icons-png.flaticon.com/128/9133/9133692.png",
    desc: "Psychiatry addresses mental health and emotional well-being through therapy, medication, and holistic approaches.",
  },
  {
    title: "Plastic Surgery",
    route: "/face",
    icon: "https://cdn-icons-png.flaticon.com/128/9411/9411387.png",
    desc: "Plastic Surgery combines science and artistry to restore, reconstruct, and enhance appearance with patient safety as priority.",
  },
  {
    title: "Endocrinology",
    route: "/endocrinology",
    icon: "https://cdn-icons-png.flaticon.com/128/349/349420.png",
    desc: "Endocrinology treats hormone-related disorders including diabetes, thyroid conditions, and metabolic issues.",
  },
  {
    title: "Gastroenterology",
    route: "/stomach",
    icon: "https://cdn-icons-png.flaticon.com/128/2217/2217851.png",
    desc: "Gastroenterology focuses on digestive system disorders including liver, pancreas, intestines, and stomach.",
  },
  {
    title: "Rheumatology",
    route: "/knee",
    icon: "https://cdn-icons-png.flaticon.com/128/9418/9418517.png",
    desc: "Rheumatology treats autoimmune and inflammatory joint and muscle disorders to improve mobility and quality of life.",
  },
  {
    title: "Ophthalmology",
    route: "/eye",
    icon: "https://cdn-icons-png.flaticon.com/128/4264/4264841.png",
    desc: "Ophthalmology provides complete eye care including diagnosis, treatment, and advanced eye surgeries.",
  },
  {
    title: "Radiology",
    route: "/chest",
    icon: "https://cdn-icons-png.flaticon.com/128/4006/4006101.png",
    desc: "Radiology uses advanced imaging techniques like X-rays, CT scans, and MRI for accurate diagnosis and treatment planning.",
  },
];

const Department = () => {
  const navigate = useNavigate();

  return (
    <div className="department-page">
      <section className="department-hero">
        <h1>Departments</h1>
      </section>

      <section className="department-cards">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="dept-card"
            onClick={() => navigate(dept.route)}
          >
            <div className="dept-icon">
              <img src={dept.icon} alt={dept.title} />
            </div>
            <h3>{dept.title}</h3>
            <p>{dept.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Department;
