export default function Page() {
  return (
    <div className="hero-container">
      <div className="gradient-blob top-left"></div>
      <div className="gradient-blob bottom-right"></div>
      
      <div className="glass-panel">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Adel Gannem</span>
        </h1>
        <p className="hero-subtitle">
          Building amazing web experiences with modern technologies.
        </p>
        <div className="cta-group">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
