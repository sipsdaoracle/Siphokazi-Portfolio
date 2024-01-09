import React from 'react';
import './Resume.css';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import { experiences } from '../../constants';
import { motion } from 'framer-motion';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const Resume = ({ isVisible }) => {
  return (
    <div className='resume'>
      <motion.div className='resume-info' initial={{ opacity: 0}}
       animate={{ opacity: isVisible ? 0 : 1 }}
       transition={{ duration: 0.7 }}>
        <h1 className='resume-head'>Resume</h1>

        <div className='icon-head'>
          <CasesOutlinedIcon style={{ fontSize: 26 }} className='resume-icon'  />
          <h2>Experience</h2>
        </div>

        <div className='experience-list'>
          {experiences.map((experience, index) => (
            <div key={index} className='experience-item'>

              
              <h4>{experience.title}</h4>
              <p className='company_name'>{experience.company_name}</p>
            
              <span>{experience.date}</span>
             
              
              
              <ul>
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

        <div className='education-container'>
          <div className='formal'>

                <div className="formal-head">
                <SchoolOutlinedIcon style={{fontSize: 30}} className='educon'/>
                  <h3>Formal Education</h3>
                </div>

                <ul className='schools'>

                  <li>Strelitzia High School</li>
                  <p className='qualification'> National Senior Certificate (Matric)</p>
                  <p className='date'> December 2009</p>
                  
                  <br/>

                  <li>Nelson Mandela University</li>
                  <p className='qualification'> National Diploma in I.T: Software Development</p>
                  <p className='date'> December 2015</p>
                  

                </ul>
                
           
                
          </div>

          <div className='non-formal'>
            <div className="non-formal-head">
            <SchoolOutlinedIcon style={{fontSize: 30}} className='educon-2'/>
            <h3>Non-Formal Education</h3>
            </div>

            <ul className='non-formal-schools'>
            <li>Amazon</li>
                  <p className='qualification'> AWS/reStart Post Graduate </p>
                  <p className='date'> December 2023</p>
                  
                  <br/>

                  <li>Deimos</li>
                  <p className='qualification'> DGCP Professional Cloud Architect</p>
                  <p className='date'> November 2023</p>

                  <br/>

                  <li>Girl Code</li>
                  <p className='qualification'> AWS Cloud Practitioner Bootcamp</p>
                  <p className='date'> May 2023</p>

                  <br/>

                  <li>Amazon</li>
                  <p className='qualification'> DGCP Professional Cloud Architect</p>
                  <p className='date'> December 2022</p>

                  <br/>

                  <li>ALE Institue Pretoria</li>
                  <p className='qualification'> NMCP/MCSA Windows Server2012</p>
                  <p className='date'> September 2016</p>
            </ul>
          
          </div>
        </div>

        {/* Add Responsive Progress Bars Here */}
        <div className='progress-bars'>

          <h3>Skills</h3>
            {/* Progress Bar 1 */}
            <div className='progress-bar'>
              <span className='label'>Cloud Architecture</span>
              <div className='bar' style={{ width: '80%' }}>
                <span className='level'>Advanced</span>
              </div>
            </div>

            {/* Progress Bar 2 */}
            <div className='progress-bar'>
              <span className='label'>Cloud Migration</span>
              <div className='bar' style={{ width: '60%' }}>
              <span className='level-2'>Intermediate</span>
              </div>
            </div>

            {/* Progress Bar 3 */}
            <div className='progress-bar'>
              <span className='label'>System Monitoring</span>
              <div className='bar' style={{ width: '75%' }}>
              <span className='level-2'>Intermediate</span>
              </div>
            </div>

            {/* Progress Bar 4 */}
            <div className='progress-bar'>
              <span className='label'>DevOps</span>
              <div className='bar' style={{ width: '90%' }}>
              <span className='level'>Advanced</span>
              </div>
            </div>
            {/* Progress Bar 5 */}
            <div className='progress-bar'>
              <span className='label'>Kubernetes</span>
              <div className='bar' style={{ width: '60%' }}>
              <span className='level-2'>Intermediate</span>
              </div>
            </div>
            {/* Progress Bar 6 */}
            <div className='progress-bar'>
              <span className='label'>GitOps</span>
              <div className='bar' style={{ width: '90%' }}>
              <span className='level'>Advanced</span>
              </div>
            </div>
            {/* Progress Bar 7 */}
            <div className='progress-bar'>
              <span className='label'>Argo</span>
              <div className='bar' style={{ width: '90%' }}>
              <span className='level'>Advanced</span>
              </div>
            </div>
          </div>

        
      </motion.div>
    </div>
  );
};

export default Resume;
