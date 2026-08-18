import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, theme }) {
  const [showDetails, setShowDetails] = useState(false);

  const { id, title, image, imageAlt, description, longDescription, tags, liveUrl, githubUrl } =
    project;

  return (
    <article className="project-card">
      <div className="project-thumb">
        <img
          src={image}
          alt={imageAlt}
          className="project-img"
          width="400"
          height="220"
        />
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">
          {showDetails ? longDescription : description}
        </p>
        <ul className="project-tags" role="list" aria-label="Technologies used">
          {tags.map(tag => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a
            href={liveUrl}
            className="btn btn--sm btn--primary"
            aria-label={`View ${title} live demo`}
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            className="btn btn--sm btn--outline"
            aria-label={`View ${title} source code on GitHub`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button
            className="btn btn--sm btn--ghost"
            onClick={() => setShowDetails(prev => !prev)}
            aria-expanded={showDetails}
            aria-controls={`details-${id}`}
          >
            {showDetails ? 'Less' : 'View Details'}
          </button>
          <Link
            to={`/projects/${id}`}
            className="btn btn--sm btn--outline"
            aria-label={`Full page for ${title}`}
            data-theme={theme}
          >
            Full Page
          </Link>
        </div>
      </div>
    </article>
  );
}
