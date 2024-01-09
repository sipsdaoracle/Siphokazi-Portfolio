import React from 'react';
import './Blog.css';
import { blogs } from '../../constants';
import BlogCard from '../blogCard/blogCard';
import { motion } from 'framer-motion';

const Blog = ({ isVisible }) => {
  return (
    <div className='blogs_container'>
      <motion.div className='blogs' initial={{ opacity: 0}}
       animate={{ opacity: isVisible ? 0 : 1 }}
       transition={{ duration: 0.7 }}>
        <h1 className='blog-head'>Blogs</h1>
       
       <section>

       <div className='blog'>
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>

       </section>
        

      </motion.div>
    </div>
  );
};

export default Blog;
