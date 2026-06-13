function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('home');
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = ['home', 'about', 'projects', 'contact'];

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo">
          Alekhya<span>.</span>
        </div>

        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a
                href="#"
                className={active === link ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(link); }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-ham" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        {links.map(link => (
          <a
            key={link}
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo(link); }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
