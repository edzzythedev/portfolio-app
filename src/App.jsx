/**
 * Main App Component - Portfolio Showcase Application
 * This is the root component that manages global state and orchestrates all child components
 */
import { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  /**
   * STATE MANAGEMENT:
   * projects: Main state array holding all project objects
   * searchQuery: String state for filtering projects based on search input
   * 
   * useState hook initializes state variables and provides setter functions
   */
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-commerce Website', description: 'Online shopping platform with payment integration', tech: 'React, Node.js, Stripe API' },
    { id: 2, title: 'Mobile Banking App', description: 'Secure banking application for iOS and Android', tech: 'React Native, Firebase, Node.js' },
    { id: 3, title: 'Portfolio Website', description: 'Modern portfolio design for creative professionals', tech: 'HTML, CSS, JavaScript, GSAP' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  /**
   * FUNCTION: addProject
   * Purpose: Adds a new project to the projects array
   * Pattern: Immutable update using spread operator to create new array
   * Flow: Child component (ProjectForm) calls this via props
   */
  const addProject = (newProject) => {
    // Create new array with all existing projects + new project
    // Assign incremental ID based on current array length
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  };

  /**
   * FUNCTION: filteredProjects
   * Purpose: Filters projects based on search query
   * Logic: Checks if search query exists in title, description, or tech stack
   * Returns: New array of filtered projects (doesn't mutate original)
   */
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /**
   * COMPONENT RENDER:
   * Returns JSX that defines the application structure
   * Uses semantic HTML elements for accessibility
   * Passes state and functions as props to child components
   */
  return (
    <div className="app">
      <header className="app-header">
        <h1> Tech Agency Portfolio</h1>
        <p className="tagline">Showcasing innovative digital solutions and creative work</p>
      </header>

      <main className="main-content">
        {/* ProjectForm receives addProject function via props */}
        <ProjectForm addProject={addProject} />
        
        {/* SearchBar receives searchQuery state and setter via props */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {/* ProjectList receives filtered projects array via props */}
        <ProjectList projects={filteredProjects} />
      </main>

      <footer className="app-footer">
        {/* <p>© 2024 Creative Agency. All projects are confidential and protected.</p> */}
      </footer>
    </div>
  );
}

export default App;