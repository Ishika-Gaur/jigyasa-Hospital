// blogs/BlogDetail.jsx
import React from "react";
import "./blog1.css"; // or rename it to blog-detail.css
import { useParams, useOutletContext } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const BlogDetail = () => {
  const { slug } = useParams();
  const { posts } = useOutletContext(); // from Blog.jsx

  // Centralized blog data
  const blogData = {
    "grand-inauguration": {
      title:
        "Grand Inauguration of Jigyasa Hospital: A New Era of Healthcare Begins",
      image: "/hospital.png",
      date: "Mar 2, 2025",
      content: (
        <>
          <p>
            The healthcare landscape has just been redefined with the grand
            inauguration of Jigyasa Hospital, a state-of-the-art medical
            facility dedicated to providing world-class treatment and
            compassionate patient care. Founded by the esteemed Dr. C.P. Singh,
            this hospital stands as a beacon of hope for those seeking advanced
            healthcare solutions.
          </p>

          <h3>💡 A Vision Turned Reality</h3>
          <p>
            Dr. C.P. Singh, a distinguished medical professional, envisioned a
            hospital that not only treats patients but also educates communities
            about preventive healthcare. His dream came true with Jigyasa
            Hospital, which is equipped with cutting-edge technology, highly
            experienced doctors, and modern medical infrastructure.
          </p>

          <h3>🌟 A Star-Studded Inauguration Ceremony</h3>
          <p>
            The inauguration event was graced by eminent personalities from the
            medical, political, and social sectors. Special guests applauded Dr.
            C.P. Singh’s initiative in bringing affordable and high-quality
            medical care to the community. The event featured ribbon-cutting
            ceremonies, facility tours, and an insightful keynote speech by Dr.
            C.P. Singh, where he emphasized the hospital’s commitment to patient
            well-being.
          </p>

          <h3>🏥 World-Class Facilities at Jigyasa Hospital</h3>
          <ul>
            <li>✅ 24/7 Emergency & Critical Care</li>
            <li>✅ Advanced Diagnostic & Imaging Center</li>
            <li>✅ Multi-Specialty Consultation</li>
            <li>✅ Modern Operation Theaters</li>
            <li>✅ Maternity & Pediatric Care</li>
            <li>✅ Orthopedic & Physiotherapy Units</li>
            <li>✅ Preventive Health Checkups</li>
          </ul>
          <p>
            The hospital is designed to{" "}
            <strong>prioritize patient comfort</strong>, with spacious waiting
            areas, hygienic surroundings, and seamless appointment scheduling.
          </p>

          <h3>Commitment to Community Welfare</h3>
          <p>
            Beyond offering treatments, Jigyasa Hospital aims to{" "}
            <strong>educate people on preventive healthcare measures</strong>.
            Dr. CP Singh has actively promoted awareness about{" "}
            <strong>tuberculosis eradication, hygiene, and sanitation</strong>
            —highlighting the importance of{" "}
            <strong>disease prevention over cure.</strong>
          </p>

          <h3>Jigyasa Hospital Workforce: A Team of Excellence</h3>
          <p>
            The hospital takes pride in its{" "}
            <strong>highly qualified and experienced team of doctors</strong>,
            including specialists from diverse medical fields. From general
            physicians to expert surgeons, each medical professional is
            dedicated to<strong>delivering exceptional patient care.</strong>
          </p>

          <h3>A New Dawn for Healthcare</h3>
          <p>
            With its{" "}
            <strong>
              cutting-edge facilities and patient-centric approach
            </strong>
            , Jigyasa Hospital is set to revolutionize healthcare in the region.
            The inauguration marks the beginning of a{" "}
            <strong>new chapter in medical excellence</strong> , ensuring that
            quality healthcare is accessible to all.
          </p>

          <p>
            🚑 <strong>Jigyasa Hospital – Because Every Life Matters!</strong>
          </p>
          <div className="meta">
            <span>📅 Mar 2, 2025</span>
            <span>📧 jigyasahospitalmbd@Gmail.Com</span>
            <span>💬 Comment</span>
          </div>
        </>
      ),
    },

    // You can add more blogs her
    "cutting-edge-healthcare": {
      title:
        "Jigyasa Hospital: Delivering Cutting-Edge Healthcare with Excellence",
      image: "/img-1.png",
      date: "Mar 2, 2025",
      content: (
        <>
          <h3>💡A Visionary Approach to Modern Healthcare</h3>
          <p>
            Jigyasa Hospital, founded by the esteemed Dr. CP Singh, has emerged
            as a leader in providing world-class healthcare services. With a
            mission to offer top-tier medical care, the hospital is equipped
            with state-of-the-art technology, advanced medical infrastructure,
            and a team of highly skilled professionals dedicated to improving
            patient outcomes.
            <br />
            Recognized for its exceptional patient care, innovative treatment
            methods, and commitment to community well-being, Jigyasa Hospital
            has set a new benchmark in the healthcare industry. The institution
            proudly received the LA Patient Excellence Award 2022, further
            solidifying its position as a trusted name in medical services.
          </p>

          <h3>🌟 Expert Medical Services at Jigyasa Hospital</h3>
          <p>
            Jigyasa Hospital offers a wide range of medical services, catering
            to various healthcare needs, including:
          </p>
          <ul>
            <li>
              ✅ <strong>Specialized Treatments</strong>: Expert care in
              cardiology, orthopedics, neurology, gynecology, and more.
            </li>
            <li>
              ✅ <strong>Advanced Diagnostic Services</strong>: Cutting-edge
              imaging and laboratory facilities for accurate and timely
              diagnosis.{" "}
            </li>
            <li>
              ✅ <strong>Surgical Excellence</strong>: Modern operation theaters
              with the latest technology for minimally invasive and major
              surgical procedures.
            </li>
            <li>
              ✅ <strong>Comprehensive Patient Care</strong>: A patient-first
              approach ensures comfort, convenience, and compassionate
              treatment.
            </li>
          </ul>
          <p>
            The hospital’s dedicated team of highly qualified doctors and
            medical professionals ensures that each patient receives the best
            possible care.
          </p>

          <h3>Dr. CP Singh: A Visionary in Healthcare</h3>
          <p>
            Dr. CP Singh, a distinguished medical professional, has always been
            driven by a passion for serving society. His journey in the
            healthcare sector began with the goal of eradicating diseases like
            tuberculosis through awareness and improved sanitation practices.
            With years of expertise and a relentless commitment to medical
            innovation and social responsibility, he has transformed Jigyasa
            Hospital into a center of excellence.
          </p>

          <h3>A Patient-Centric Approach</h3>
          <p>
            Jigyasa Hospital is designed to provide a seamless healthcare
            experience. From dedicated consultation spaces to modern waiting
            areas, every aspect of the hospital is tailored to enhance patient
            convenience. The hospital follows strict hygiene and safety
            protocols, ensuring infection-free, high-quality treatment
            environments.
          </p>

          <h3>Why Choose Jigyasa Hospital?</h3>
          <p>
            ✅ Highly Experienced Medical Team
            <br /> ✅ World-Class Infrastructure & Equipment
            <br /> ✅ Advanced Surgical & Non-Surgical Treatments
            <br /> ✅ 24/7 Emergency & Critical Care Services
            <br /> ✅ Patient-Focused, Ethical Healthcare
            <br />
          </p>

          <p>
            Jigyasa Hospital continues to expand its medical services and
            community outreach, making high-quality healthcare accessible to
            all.
          </p>
          <p>
            For the best in modern healthcare, expert treatment, and
            compassionate care, visit Jigyasa Hospital today!
          </p>
          <p>
            <strong>📍 Book an Appointment Now!</strong>
          </p>
          <div className="meta">
            <span>📅 Mar 2, 2025</span>
            <span>📧 jigyasahospitalmbd@Gmail.Com</span>
            <span>💬 Comment</span>
          </div>
        </>
      ),
    },
  };

  const post = blogData[slug];

  if (!post) return <h2>Blog Not Found</h2>;

  return (
    <div className="blog-container">
      <div className="blog-left">
        <h1 className="blog-title">{post.title}</h1>
        <img src={post.image} alt={post.title} className="featured-image" />
        <div className="blog-content">{post.content}</div>

        {/* About the Author */}
        <div className="about-author">
          <h3>About the Author</h3>
          <div className="author-box">
            <img
              src="/default-avatar.png"
              alt="Author"
              className="author-avatar"
            />
            <p>jigyasahospitalmbd@gmail.com</p>
          </div>
        </div>

        {/* Comment Section */}
        <div className="comment-section">
          <h3>Leave a Reply</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className="comment-form">
            <textarea placeholder="Comment *" required></textarea>

            <div className="input-row">
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="Email *" required />
            </div>

            <input type="text" placeholder="Website" />

            <label className="comment-checkbox">
              <input type="checkbox" />
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>

            <button type="submit">Post Comment</button>
          </form>
        </div>
      </div>

      <div className="blog-right">
        <Sidebar posts={posts} />
      </div>
    </div>
  );
};

export default BlogDetail;
