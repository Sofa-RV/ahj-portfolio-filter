import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.img} alt={`Project ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;