import React from "react";
import { Outlet, Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import "./blog.css";


const posts = [
  {
    title:
      "Grand Inauguration Of Jigyasa Hospital: A New Era Of Healthcare Begins",
    date: "Mar 2, 2025",
    category: "Uncategorized",
    slug: "grand-inauguration",
  },
  {
    title:
      "Jigyasa Hospital: Delivering Cutting-Edge Healthcare With Excellence",
    date: "Mar 2, 2025",
    category: "Health",
    slug: "cutting-edge-healthcare",
  },
];

const BlogIndex = () => {
  const location = useLocation();
  return (
    <div className="blog-container">
      {/* Left side (Blog List or Blog Detail) */}
      <div className="blog-left">
        {location.pathname === "/blog" && (
          <>
          <div className="blog-list-grid">
            {posts.map((post, index) => (
              <div className="blog-card" key={index}>
                <p className="category">{post.category}</p>
                <Link to={`/blog/${post.slug}`} className="blog-title">
                  {post.title}
                </Link>
                <div className="meta">
                  <span>📅 {post.date}</span>
                  <span>📧 jigyasahospitalmbd@gmail.com</span>
                  <span>💬 Comment</span>
                </div>
                <p className="excerpt">{post.title.split(":")[1]}</p>
              </div>
            ))}
            </div>
          </>
        )}
        <Outlet context={{ posts }} />
      </div>

      {/* Right side (Sticky Sidebar) */}
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
            <img src="img-1.png" alt="Gallery 1" />
            <img src="img-2.jpeg" alt="Gallery 2" />
            <img src="img-3.png" alt="Gallery 3" />
            <img src="img-4.png" alt="Gallery 4" />
            <img src="img-5.jpeg" alt="Gallery 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
