const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      stack: 'TBD',
      badge: 'In Progress',
      image: `${import.meta.env.BASE_URL}blurred-project.jpg`,
      comingSoon: true
    },
    {title: 'Fantasy Football MitPicks',
      stack: 'TBD',
      badge: 'In Progress',
      image: `${import.meta.env.BASE_URL}blurred-project.jpg`,
      comingSoon: true
    },
    {
      title: 'Project 3',
      stack: 'TBD',
      badge: 'In Progress',
      image: `${import.meta.env.BASE_URL}blurred-project.jpg`,
      comingSoon: true
    }
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="badge">{project.badge}</span>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.stack}</p>
            {project.comingSoon ? (
              <span className="coming-soon">Coming Soon</span>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-btn">
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
