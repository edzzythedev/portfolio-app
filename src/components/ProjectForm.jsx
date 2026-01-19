import { useState } from 'react';

function ProjectForm({ addProject }) {
  // Local form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!title.trim() || !description.trim() || !tech.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Create new project object
    const newProject = {
      title: title.trim(),
      description: description.trim(),
      tech: tech.trim()
    };

    // Pass to parent component
    addProject(newProject);

    // Reset form
    setTitle('');
    setDescription('');
    setTech('');
  };

  return (
    <section className="project-form">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="project-title">Project Title:</label>
          <input
            id="project-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-description">Description:</label>
          <textarea
            id="project-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the project goals, features, and outcomes"
            rows="4"
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-tech">Technologies Used:</label>
          <input
            id="project-tech"
            type="text"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            placeholder="e.g., React, Node.js, MongoDB, CSS"
            className="form-input"
          />
          <small className="form-hint">Separate technologies with commas</small>
        </div>

        <button type="submit" className="submit-btn">
          Add Project to Portfolio
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;