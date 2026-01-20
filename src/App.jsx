
  import { useState } from 'react';
  import ProjectList from './components/ProjectList';
  import ProjectForm from './components/ProjectForm';
  import SearchBar from './components/SearchBar';
  import './App.css';

  function App() {
  
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-commerce Website', description: 'Online shopping platform with payment integration', tech: 'React, Node.js, Stripe API' },
    { id: 2, title: 'Mobile Banking App', description: 'Secure banking application for iOS and Android', tech: 'React Native, Firebase, Node.js' },
    { id: 3, title: 'Portfolio Website', description: 'Modern portfolio design for creative professionals', tech: 'HTML, CSS, JavaScript, GSAP' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  
  const addProject = (newProject) => {
    // Create new array with all existing projects + new project
    // Assign incremental ID based on current array length
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  };

  
    // FUNCTION: filteredProjects
    // Purpose: Filters projects based on search query
    // Logic: Checks if search query exists in title, description, or tech stack
    // Returns: New array of filtered projects (doesn't mutate original)
   
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div className="app">
      <header className="app-header">
        <h1> Tech Agency Portfolio</h1>
        <p className="tagline">Showcasing innovative digital solutions and creative work</p>
      </header>

      <main className="main-content">
        {}
        <ProjectForm addProject={addProject} />
        
        {}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {}
        <ProjectList projects={filteredProjects} />
      </main>

      
    </div>
  );
}

export default App;