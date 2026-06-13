function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace timeout with EmailJS or your preferred email service
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1400);
  };

  const infoCards = [
    { title: '📍 Location', val: 'Bangalore, Karnataka' },
    { title: '✅ Open to Work', val: 'Entry-level Java roles' },
    { title: '⚡ Response Time', val: 'Within 24 hours' },
    { title: '📞 Phone', val: '+91 8886002739' },
  ];

  return (
    <section id="contact">
      <div className="sec-inner">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <span className="sec-tag">Contact</span>
          <h2 className="sec-title">
            Get In <span className="grad">Touch</span>
          </h2>
        </div>

        <div className="contact-grid">

          {/* Left Info */}
          <div>
            <p className="contact-bio">
              I'm actively looking for{' '}
              <strong>entry-level Java Developer roles</strong> where I can
              contribute to <strong>scalable enterprise applications</strong>.
              If you're building something meaningful with Java, I'd love to connect.
            </p>

            <div className="info-grid">
              {infoCards.map((card) => (
                <div key={card.title} className="info-card">
                  <strong>{card.title}</strong>
                  <span>{card.val}</span>
                </div>
              ))}
            </div>

            <div className="social-links">
              <a
                href="https://github.com/alekhyagontla"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gontla-alekhya"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:alekhyag0410@gmail.com">
                Email
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {sent && (
              <div className="success-msg">Message sent! I'll reply soon 🚀</div>
            )}

            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-send" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
