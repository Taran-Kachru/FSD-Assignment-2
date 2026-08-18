export default function Skills({ skills }) {
  return (
    <div className="skills-block">
      <h3 className="skills-title">Core Skills</h3>
      <ul className="skills-list" role="list">
        {skills.map(({ name, pct, label }) => (
          <li key={name} className="skill-item">
            <span className="skill-name">{name}</span>
            <div
              className="skill-bar"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={label}
            >
              <div
                className="skill-fill"
                style={{ '--skill-pct': `${pct}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
