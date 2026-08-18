import { useState } from 'react';

const INITIAL = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', message: '' };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };
  if (!fields.name.trim()) errors.name = 'Full name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.message.trim()) errors.message = 'Message is required.';
  return errors;
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean);
}

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentErrors = validate(fields);
  const isInvalid = hasErrors(currentErrors);

  function handleChange(e) {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...fields, [name]: value }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(fields);
    setErrors(errs);
    if (hasErrors(errs)) return;
    setSubmitted(true);
    setFields(INITIAL);
    setTouched({});
    setErrors(INITIAL_ERRORS);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <p>Thanks for reaching out! I'll get back to you soon.</p>
        <button
          className="btn btn--outline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input${errors.name && touched.name ? ' form-input--error' : ''}`}
            placeholder="Jane Smith"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
            aria-invalid={!!(errors.name && touched.name)}
          />
          {errors.name && touched.name && (
            <span id="name-error" className="form-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input${errors.email && touched.email ? ' form-input--error' : ''}`}
            placeholder="jane@example.com"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
            aria-invalid={!!(errors.email && touched.email)}
          />
          {errors.email && touched.email && (
            <span id="email-error" className="form-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="form-input"
          placeholder="Project inquiry"
          value={fields.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message <span className="required" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={`form-textarea${errors.message && touched.message ? ' form-input--error' : ''}`}
          rows="6"
          placeholder="Tell me about your project..."
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
          aria-invalid={!!(errors.message && touched.message)}
        />
        {errors.message && touched.message && (
          <span id="message-error" className="form-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--full"
        disabled={isInvalid && Object.keys(touched).length > 0}
        aria-disabled={isInvalid && Object.keys(touched).length > 0}
      >
        Send Message
      </button>
    </form>
  );
}
