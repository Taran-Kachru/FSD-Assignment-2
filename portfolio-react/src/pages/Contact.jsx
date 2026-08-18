import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section section--contact"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner section-inner--narrow">
        <h2 id="contact-heading" className="section-title">
          Get In Touch
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>

        <ContactForm />

        <address className="contact-info">
          <ul className="contact-list" role="list">
            <li>
              <span className="contact-label">Email</span>
              <a
                href="mailto:tk24csb0b78@student.nitw.ac.in"
                className="contact-link"
              >
                tk24csb0b78@student.nitw.ac.in
              </a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href="#" className="contact-link" aria-label="Visit my LinkedIn profile">
                linkedin.com/in/taran
              </a>
            </li>
            <li>
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/Taran-Kachru/"
                className="contact-link"
                aria-label="Visit my GitHub profile"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Taran-Kachru
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
