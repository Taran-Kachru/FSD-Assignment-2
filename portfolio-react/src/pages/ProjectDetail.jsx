import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="section section--notfound" aria-labelledby="notfound-heading">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 id="notfound-heading" className="section-title">
            Project Not Found
          </h2>
          <p className="section-subtitle">
            No project with that ID exists.
          </p>
          <Link to="/projects" className="btn btn--primary">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const { title, image, imageAlt, longDescription, tags, liveUrl, githubUrl, highlights } =
    project;

  return (
    <section
      className="section section--project-detail"
      aria-labelledby="detail-heading"
    >
      <div className="section-inner section-inner--narrow">
        <Link to="/projects" className="btn btn--outline btn--sm back-btn">
          ← Back to Projects
        </Link>

        <h2 id="detail-heading" className="section-title" style={{ marginTop: 'var(--sp-6)' }}>
          {title}
        </h2>

        <div className="detail-thumb">
          <img
            src={image}
            alt={imageAlt}
            className="detail-img"
            width="720"
            height="405"
          />
        </div>

        <p className="detail-desc">{longDescription}</p>

        <div className="detail-meta">
          <div>
            <h3 className="detail-meta-title">Technologies</h3>
            <ul className="project-tags" role="list" aria-label="Technologies used">
              {tags.map(tag => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="detail-meta-title">Highlights</h3>
            <ul className="detail-highlights" role="list">
              {highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-links" style={{ marginTop: 'var(--sp-8)' }}>
          <a
            href={liveUrl}
            className="btn btn--primary"
            aria-label={`View ${title} live demo`}
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            className="btn btn--outline"
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title} source code on GitHub`}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
