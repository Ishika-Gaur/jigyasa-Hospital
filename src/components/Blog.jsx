import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const posts = [
  {
    title: "Grand Inauguration Of Jigyasa Hospital: A New Era Of Healthcare Begins",
    date: "Mar 2, 2025",
    category: "Uncategorized",
    slug: "grand-inauguration",
  },
  {
    title: "Jigyasa Hospital: Delivering Cutting-Edge Healthcare With Excellence",
    date: "Mar 2, 2025",
    category: "Health",
    slug: "cutting-edge-healthcare",
  },
];

const Blog = () => {
  return (
    <>
      <Outlet context={{ posts }} />
      <Footer />
    </>
  );
};

export default Blog;
