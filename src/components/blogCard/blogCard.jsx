// BlogCard.jsx
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  const { blog_image, blog_name, blog_description, blog_url } = blog;

  return (
    <div className="blog-card">
      <img src={blog_image} alt={blog_name} className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-name">{blog_name}</h3>
        <p className="blog-description">{blog_description}</p>
        <a href={blog_url} target="_blank" rel="noopener noreferrer" className="blog-link">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
