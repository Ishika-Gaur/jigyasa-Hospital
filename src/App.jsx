import React from "react";

import { Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "./components/ScrollToTop";


import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Department from "./components/Department";
import Doctors from "./components/Doctors";
import Pages from "./components/Pages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Facility from "./components/Facility";
import Blog from "./components/Blog";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";

import BlogDetail from "./blogs/BlogDetail";
import BlogIndex from "./components/BlogIndex";
import Sidebar from "./components/Sidebar";
import TandC from "./components/TandC";
import Privacypolicy from "./components/Privacypolicy";
import Support from "./components/Support";

import Aboutus from "./sections/Aboutus";
import Heropage from "./sections/Heropage";
import Offersection from "./sections/Offersection";
import Contactsection from "./sections/Contactsection";
import Expertsection from "./sections/Expertsection";
import Blogsection from "./sections/Blogsection";
import Specialities from "./sections/Specialities";
import Getinvolve from "./sections/Getinvolve";
import Testimonialsection from "./sections/Testimonialsection";




import Brain from "./bodyparts/Brain";
import Ankle from "./bodyparts/Ankle";
import Arm from "./bodyparts/Arm";
import Chest from "./bodyparts/Chest";
import Ear from "./bodyparts/Ear";
import Elbow from "./bodyparts/Elbow";
import Eye from "./bodyparts/Eye";
import Foot from "./bodyparts/Foot";
import Heart from "./bodyparts/Heart";
import Hip from "./bodyparts/Hip";
import Kidney from "./bodyparts/Kidney";
import Knee from "./bodyparts/Knee";
import Liver from "./bodyparts/Liver";
import Lowerback from "./bodyparts/Lowerback";
import Nose from "./bodyparts/Nose";
import Reproductive from "./bodyparts/Reproductive";
import Stomach from "./bodyparts/Stomach";
import Thigh from "./bodyparts/Thigh";
import Throat from "./bodyparts/Throat";
import Varicose from "./bodyparts/Varicose";
import Skin from "./bodyparts/Skin";
import Body from "./bodyparts/Body";
import Face from "./bodyparts/Face";
import GeneralMedicine from "./bodyparts/GeneralMedicine"; 
import Teeth from "./bodyparts/Teeth";
import Endocrinology from "./bodyparts/Endocrinology";
import Mind from "./bodyparts/Mind";

const App = () => {
  return (
    <>
      <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/facility" element={<Facility />} />
        <Route path="/testimonial" element={<Testimonial />} />

        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogIndex />} />
          <Route path=":slug" element={<BlogDetail />} />

          <Route path="sidebar" element={<Sidebar />} />
        </Route>

        <Route path="/footer" element={<Footer />} />
        <Route path="/tandc" element={<TandC />} />
        <Route path="/privacy" element={<Privacypolicy />} />
        <Route path="/support" element={<Support />} />

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/heropage" element={<Heropage />} />
        <Route path="/offersection" element={<Offersection />} />
        <Route path="/contactsection" element={<Contactsection />} />
        <Route path="/expertsection" element={<Expertsection />} />
        <Route path="/blogsection" element={<Blogsection />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/getinvolve" element={<Getinvolve />} />
        <Route path="/testimonialsection" element={<Testimonialsection />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
<Route path="/video-gallery" element={<VideoGallery />} />



        {/* --------Body Parts------ */}
        <Route path="/brain" element={<Brain />} />
        <Route path="/ear" element={<Ear />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/throat" element={<Throat />} />
        <Route path="/arm" element={<Arm />} />
        <Route path="/ankle" element={<Ankle />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/elbow" element={<Elbow />} />
        <Route path="/foot" element={<Foot />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/hip" element={<Hip />} />
        <Route path="/kidney" element={<Kidney />} />
        <Route path="/knee" element={<Knee />} />
        <Route path="/liver" element={<Liver />} />
        <Route path="/lowerback" element={<Lowerback />} />
        <Route path="/nose" element={<Nose />} />
        <Route path="/reproductive" element={<Reproductive />} />
        <Route path="/stomach" element={<Stomach />} />
        <Route path="/thigh" element={<Thigh />} />
        <Route path="/varicose" element={<Varicose />} />
        <Route path="/skin" element={<Skin />} />
         <Route path="/body" element={<Body />} />
          <Route path="/face" element={<Face />} />
          <Route path="/generalmedicine" element={<GeneralMedicine />} />
          <Route path="/teeth" element={<Teeth />} />
           <Route path="/endocrinology" element={<Endocrinology/>} />
            <Route path="/mind" element={<Mind/>} />
      </Routes>


      <a
        href="https://wa.me/7900903333" // Replace with your WhatsApp number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp Chat"
        />
      </a>
    </>
  );
};

export default App;
