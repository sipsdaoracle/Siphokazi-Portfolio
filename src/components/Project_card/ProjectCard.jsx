import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./ProjectCard.css"; // You can create a CSS file for styling

const ProjectCard = ({ project }) => {
  const { project_name, project_image, project_tools, project_details, github_repo } = project;

  return (
    <div className='project-card'>
      <img src={project_image} alt={project_name} />
      <h3>{project_name}</h3>
      <p>{project_tools}</p>
      <p>{project_details}</p>

      
        <Button
        className='git-btn'
          variant="outlined"
          startIcon={<GitHubIcon />}
          href={github_repo}
          target="_blank"
          rel="noopener noreferrer"
        > View in Github</Button>
     
    </div>
  );
};

export default ProjectCard;
