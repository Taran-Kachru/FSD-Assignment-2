import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; 2026 Taran. Designed &amp; built with React &amp; CSS3.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav" role="list">
            <li>
              <NavLink to="/home" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="footer-link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
