import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="section section--hero loading-screen" aria-label="Loading">
        <div className="loader" aria-busy="true" aria-live="polite">
          <span className="loader-dot" />
          <span className="loader-dot" />
          <span className="loader-dot" />
        </div>
      </section>
    );
  }

  return (
    <section
      id="intro"
      className="section section--hero"
      aria-labelledby="intro-heading"
    >
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 id="intro-heading" className="hero-name">
          Taran
        </h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-tagline">
          I design and build clean, accessible, and performant web experiences —
          from pixel-perfect interfaces to robust back-end APIs.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn btn--primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn--outline">
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="avatar-placeholder">
          <img
            src="/assets/profile.svg"
            alt="Illustrated avatar representing Taran"
            className="avatar-img"
            width="280"
            height="280"
          />
        </div>
      </div>
    </section>
  );
}
