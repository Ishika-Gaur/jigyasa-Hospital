import "./blogsection.css";
import { Link } from "react-router-dom";

const Blogsection = () => {
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
  return (
    <section className="blog-section">
      <h2 className="blog-section-subtitle">FROM BLOG</h2>
      <h1 className="blog-section-title">News & Articles</h1>
      <p className="blog-section-description">
        Stay updated with the latest healthcare news, expert tips, and important
        articles to help you make informed health decisions.
      </p>
      <div className="blog-cards-container">
        {posts.map((post) => (
          <div className="blog-card" key={post.slug}>
            <span className="blog-category">{post.category}</span>
            <h3 className="blog-title">{post.title}</h3>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>· {post.comments} Comments</span>
            </div>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogsection;
