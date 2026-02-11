import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css"; // or blog1.css

const Sidebar = ({ posts }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="blog-right">
      <div className="sidebar-section">
        <h3>LATEST POSTS</h3>
        {posts.map((post, idx) => (
          <Link key={idx} to={`/blog/${post.slug}`} className="latest-post">
            {post.title}
          </Link>
        ))}
      </div>

      <div className="sidebar-section gallery">
        <h3>GALLERY</h3>
        <div className="gallery-grid">
          {["/img-1.png", "/img-2.jpeg", "/img-3.png", "/img-4.png", "/img-5.jpeg"].map(
            (src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx + 1}`}
                onClick={() => openImage(src)}
                className="gallery-img"
              />
            )
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged view" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
