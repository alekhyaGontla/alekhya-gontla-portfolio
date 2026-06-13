function Projects() {
  const featured = [
    {
      num: '01',
      title: 'Merchant Product Management System',
      desc: 'Console-based system built with Java and Hibernate to manage merchant and product data. Implements full CRUD with 5+ entity relationships, merchant authentication, and product filtering by category and brand.',
      tech: ['Java', 'Hibernate', 'JPA', 'MySQL', 'OOP'],
      code: 'https://github.com/alekhyaGontla/Merchant-Product-Management-System',
      highlights: ['10 menu operations', 'Hibernate ORM', 'Custom exceptions'],
      bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', // merchant/store/products
      type: 'Java Backend',
    },
    {
      num: '02',
      title: 'Bank Management System — REST API',
      desc: 'Spring Boot REST API for managing Banks, Accounts, and Addresses. Features deposit, withdraw, and transfer operations with 11 custom exceptions, pagination, and a unified JSON response structure.',
      tech: ['Spring Boot', 'JPA', 'PostgreSQL', 'REST API', 'Maven'],
      code: 'https://github.com/alekhyaGontla/BankOperation-Using-RESTAPIs',
      highlights: ['25+ API endpoints', '11 custom exceptions', 'Pagination support'],
      bg: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', // banking
      type: 'REST API',
    },
    {
      num: '03',
      title: 'Student Management System',
      desc: 'Robust console app using Java, JDBC, and MySQL to manage student records. Implements full CRUD with fast data retrieval, search by multiple fields, and structured DAO pattern.',
      tech: ['Java', 'JDBC', 'MySQL', 'SQL', 'DAO Pattern'],
      code: 'https://github.com/alekhyaGontla/student-management-system-java-mysql',
      highlights: ['100+ records managed', 'DAO pattern', 'JDBC connectivity'],
      bg: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', // students studying
      type: 'Java Backend',
    },
    {
      num: '04',
      title: 'Hotel Booking Analytics Dashboard',
      desc: 'Interactive React dashboard that visualizes hotel booking data through charts and KPIs. Built with Vite for fast performance and deployed live on Vercel.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS'],
      code: 'https://github.com/alekhyaGontla/Hotel-Booking-Analytics',
      live: 'https://hotel-booking-analytics-mauve.vercel.app',
      highlights: ['Live on Vercel', 'Interactive charts', 'Responsive design'],
      bg: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', // hotel
      type: 'Frontend',
    },
  ];

  const more = [
    {
      title: 'Netflix Landing Page Clone',
      desc: 'Pixel-perfect Netflix homepage clone built with pure HTML and CSS. Fully responsive with hover effects and animations.',
      tech: ['HTML5', 'CSS3'],
      code: 'https://github.com/alekhyaGontla/Netflix-CSS',
      bg: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80', // streaming/netflix feel
      type: 'Frontend',
    },
    {
      title: 'Dermal Image Classification (ML)',
      desc: 'CNN-based deep learning model to classify skin tumour images for computer-aided diagnosis. Full preprocessing pipeline, training, and evaluation.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Jupyter'],
      code: 'https://github.com/alekhyaGontla',
      bg: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', // medical/AI
      type: 'Machine Learning',
    },
    {
      title: 'Reversible QCA 8:1 Multiplexer',
      desc: 'Reversible logic-based 8:1 multiplexer using Quantum-dot Cellular Automata. Simulated in Xilinx Vivado for low-power VLSI.',
      tech: ['Verilog', 'VHDL', 'Xilinx Vivado', 'QCA'],
      code: 'https://github.com/alekhyaGontla',
      bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', // circuit board
      type: 'Hardware / VLSI',
    },
  ];

  return (
    <section id="projects">
      <div className="sec-inner">

        {/* Header */}
        <div className="proj-header">
          <span className="sec-tag">Selected Work</span>
          <h2 className="sec-title">
            Projects built with <span className="grad">clean architecture</span>
          </h2>
          <p className="sec-sub">
            Java backends, REST APIs, and full-stack apps — each built with
            real-world patterns and production-ready structure.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="projects-grid">
          {featured.map((project, i) => (
            <div
              key={i}
              className="proj-card"
              style={{ '--proj-bg': `url(${project.bg})` }}
            >
              {/* Background image layer */}
              <div className="proj-bg-img"></div>
              {/* Dark overlay */}
              <div className="proj-overlay"></div>

              {/* Content */}
              <div className="proj-content">
                <div className="proj-card-top">
                  <span className="proj-type-badge">{project.type}</span>
                  <span className="proj-num">{project.num}</span>
                </div>
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.desc}</p>

                <div className="proj-highlights">
                  {project.highlights.map((h) => (
                    <span key={h} className="highlight-pill">✦ {h}</span>
                  ))}
                </div>

                <div className="tech-pills">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="proj-links">
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="link-code">
                    ↗ Source Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-live">
                      ⬡ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects */}
        <div className="more-header">
          <div className="more-title">More Projects</div>
          <div className="more-line"></div>
        </div>
        <div className="more-grid">
          {more.map((project, i) => (
            <div
              key={i}
              className="proj-card more-card"
              style={{ '--proj-bg': `url(${project.bg})` }}
            >
              <div className="proj-bg-img"></div>
              <div className="proj-overlay"></div>
              <div className="proj-content">
                <span className="proj-type-badge">{project.type}</span>
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.desc}</p>
                <div className="tech-pills">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
                <div className="proj-links">
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="link-code">
                    ↗ Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="proj-cta">
          <a href="https://github.com/alekhyaGontla" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}
