import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className="section section--projects"
      aria-labelledby="projects-heading"
    >
      <div className="section-inner">
        <h2 id="projects-heading" className="section-title">
          Projects
        </h2>
        <p className="section-subtitle">
          A selection of things I've built recently.
        </p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
