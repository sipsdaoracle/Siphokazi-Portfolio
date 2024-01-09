import React from 'react'
import "./About.css"
import { motion } from 'framer-motion';

import { networking, software, cloud, devops } from '../../assets'


const About = ({ isVisible }) => {
  return (
    
    <div className='About'>
      <motion.div className='about-info'
       initial={{ opacity: 0}}
       animate={{ opacity: isVisible ? 0 : 1 }}
       transition={{ duration: 0.7 }}>
        <h1 className='about-head'>About Me</h1>
        <p className='about-text'> Passionate Site Reliability Engineer with a robust background in implementing and managing automation tools for seamless software development, testing, and deployment.<br/>
        </p>

      <p className='about-text'>
      My expertise spans infrastructure as code, continuous integration, containerization, and cloud computing technologies. I thrive on fostering collaboration and effective communication within cross-functional teams. 
      </p>

      <p className='about-text'>
      Currently, I am making impactful contributions as a Site Reliability Engineer Intern at Deimos Cloud, driving Cloud Infrastructure Management, Kubernetes Cluster Configuration, and CI/CD Pipeline Implementation.
      </p>

      <p className='about-text'>
      My commitment to proactive security practices and dedication to optimizing application operation through Kubernetes resource management and application Dockerization defines my approach to ensuring cloud infrastructure resilience and reliability.
      </p>

      <p className='about-text'>Eager to bring this passion for innovation and technical proficiency to a dynamic team.</p>

      <h1 className='about-head-2'>What I Do</h1>

      <div className='skills'>

        <div className='skill'>
          <img src={devops} alt="Devops" className='devops-icon'/>
          <p className='skill-text'><span className='skill-head'>DevOps & SRE</span><br/> <br/> Combining software development (Dev) and IT operations (Ops) to enhance collaboration and productivity, ensuring the reliability and performance of systems.</p>
        </div>

        <div className='skill'>
          <img src={cloud} alt="Devops" className='devops-icon'/>
            <p className='skill-text'> <span className='skill-head'>Cloud Computing</span><br/> <br/>Technology that enables on-demand access to a shared pool of computing resources (such as servers, storage, and databases) over the internet</p>
        </div>

        <div className='skill'>
        <img src={networking} alt="Devops" className='devops-icon'/>
          <p className='skill-text'> <span className='skill-head'>Computer Networking</span><br/> <br/>The field of connecting and communicating between computers and other devices, facilitating data exchange and resource sharing through various network technologies and protocols.</p>
        </div>
        
        <div className='skill'>
        <img src={software} alt="Devops" className='devops-icon'/>
          <p className='skill-text'> <span className='skill-head'>Software Development</span><br/> <br/>The process of creating computer programs or applications, involving writing, testing, and maintaining code to meet specific functionality and performance requirements.</p>
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default About