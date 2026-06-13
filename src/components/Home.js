function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="home-inner">
        <span className="home-tag">Java Full Stack Developer</span>

        <h1 className="home-h1">
          Building <span className="grad">resilient Java systems</span>
          <br />
          that scale with confidence.
        </h1>

        <p className="home-sub">
          I'm <span className="hi">Alekhya Gontla</span> — a{' '}
          <span className="hilit">Java Full Stack Developer</span> with hands-on
          experience in Spring Boot, Hibernate, REST APIs, and MySQL, focused on
          crafting robust enterprise applications.
        </p>

        <div className="btn-row">
          <a
            href="#"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
          >
            Explore Projects
          </a>
          <a
            href="#"
            className="btn-outline"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
