import Skills from '../components/Skills/Skills';

const SKILLS = [
  { name: 'HTML & CSS',       pct: 95, label: 'HTML and CSS proficiency 95%' },
  { name: 'JavaScript',       pct: 85, label: 'JavaScript proficiency 85%' },
  { name: 'Node.js / Express', pct: 78, label: 'Node.js and Express proficiency 78%' },
  { name: 'React',            pct: 80, label: 'React proficiency 80%' },
  { name: 'SQL / MongoDB',    pct: 72, label: 'SQL and MongoDB proficiency 72%' },
];

export default function About() {
  return (
    <section
      id="about"
      className="section section--about"
      aria-labelledby="about-heading"
    >
      <div className="section-inner">
        <h2 id="about-heading" className="section-title">
          About Me
        </h2>
        <div className="about-grid">
          <article className="about-bio">
            <p>
              I'm a passionate developer with a strong foundation in both
              front-end design and back-end engineering. I enjoy transforming
              complex problems into simple, intuitive solutions that users
              actually love to use.
            </p>
            <p>
              Currently pursuing my Bachelor's in Computer Science, I've built
              projects spanning REST APIs, real-time applications, and responsive
              web UIs — always keeping accessibility and performance at the
              forefront.
            </p>
            <p>
              Outside of coding I enjoy photography, hiking, and contributing to
              open-source projects. I believe the best software is shaped by
              curiosity and empathy.
            </p>
          </article>
          <Skills skills={SKILLS} />
        </div>
      </div>
    </section>
  );
}
