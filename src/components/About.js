function About() {
  const skills = [
    'Core Java', 'Spring Boot', 'Hibernate',
    'JDBC', 'JPA', 'REST APIs',
    'MySQL', 'Git & GitHub', 'Maven',
    'Postman', 'Spring MVC', 'OOP',
  ];

  const stats = [
    { num: '3+', label: 'Projects Built' },
    { num: '7.8', label: 'CGPA (B.Tech ECE)' },
    { num: '2', label: 'Internships' },
    { num: '3', label: 'Certifications' },
  ];

  const timeline = [
    {
      title: 'B.Tech ECE — JNTUA (2025)',
      desc: 'Graduated with CGPA 7.8 from Geethanjali Institute of Science & Technology, building a strong foundation in engineering and programming.',
    },
    {
      title: 'Python Intern — BlackBucks (2024)',
      desc: 'Built Django web apps with database integration, worked on testing, debugging, and process flow optimization to improve performance.',
    },
    {
      title: 'Java Full Stack Intern — QSpiders (Oct 2025–Present)',
      desc: 'Developing Java applications with Core Java, JDBC, Hibernate, and Spring Boot. Building RESTful APIs, integrating MySQL, and collaborating via Git.',
    },
  ];

  return (
    <section id="about">
      <div className="sec-inner">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <span className="sec-tag">About Me</span>
          <h2 className="sec-title">
            Not just writing code —<br />
            I engineer <span className="grad">reliable Java backends</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            ECE graduate turned Java developer, passionate about building scalable
            systems with clean architecture.
          </p>
        </div>

        {/* Profile + Skills */}
        <div className="about-grid">
          <div className="avatar-wrap">
            <div className="avatar-ring">
              {/*
                TO ADD YOUR PHOTO:
                Replace the emoji below with:
                <img src="your-photo.jpg" alt="Alekhya Gontla" />
              */}
              👩‍💻
            </div>
          </div>

          <div>
            <h3 className="about-name">
              I'm <span>Alekhya Gontla</span>
            </h3>
            <p className="about-bio">
              My journey began with an ECE background and a deep curiosity about
              how software systems are built. That curiosity led me to Java — and
              I haven't looked back since.
            </p>
            <p className="about-bio">
              Currently interning at QSpiders as a Java Full Stack Developer,
              building CRUD applications, designing RESTful APIs, and optimizing
              SQL queries for real-world performance.
            </p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-chip">{skill}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline">
          <h3 className="timeline-title">
            My <span className="grad-text">Journey</span>
          </h3>
          <div className="tl-line"></div>

          {timeline.map((item, i) => (
            <div key={i} className="tl-item">
              {i % 2 === 0 ? (
                <>
                  <div className="tl-card card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className="tl-dot-wrap">
                    <div className="tl-dot"></div>
                  </div>
                  <div className="tl-empty"></div>
                </>
              ) : (
                <>
                  <div className="tl-empty"></div>
                  <div className="tl-dot-wrap">
                    <div className="tl-dot"></div>
                  </div>
                  <div className="tl-card card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
