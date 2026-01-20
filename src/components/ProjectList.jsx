function ProjectList({ projects }) {
  return (
    <section className="project-list">
      <h2>Our Projects <span className="project-count">({projects.length})</span></h2>
      
      {projects.length === 0 ? (
        <div className="no-projects">
          <p>No projects found. Try a different search or add a new project.</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-id">{project.id}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                <strong>Technologies:</strong> {project.tech}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;