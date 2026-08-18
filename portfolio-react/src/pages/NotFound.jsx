import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section
      className="section section--notfound"
      aria-labelledby="notfound-heading"
    >
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="notfound-code" aria-hidden="true">404</p>
        <h2 id="notfound-heading" className="section-title">
          Page Not Found
        </h2>
        <p className="section-subtitle">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/home" className="btn btn--primary">
          Go Home
        </Link>
      </div>
    </section>
  );
}
