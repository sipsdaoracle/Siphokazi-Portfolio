import React from 'react';
import ProjectCard from '../Project_card/ProjectCard';
import "./Portfolio.css";
import { motion } from 'framer-motion';
import { portfolio } from '../../constants/index'; // Make sure to provide the correct path

const Portfolio = ({ isVisible }) => {
  return (
    <div className='projects_container'>
      <motion.div className='projects' initial={{ opacity: 0}}
       animate={{ opacity: isVisible ? 0 : 1 }}
       transition={{ duration: 0.7 }}>
        <h1 className='head-text'>Portfolio</h1>
        <p className='sub-text'> Here is a couple of impactful projects where I've applied my skills and expertise. Feel free to check out the Github repo!</p>

        <div className='project'>
          {portfolio.map((project, index) => (
            <ProjectCard className="project-card" key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
