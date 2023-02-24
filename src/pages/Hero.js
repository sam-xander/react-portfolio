import { Link } from "react-router-dom";

function Hero() {
  const links = [
    {
      name: "GitHub",
      to: "https://github.com/sam-xander",
    },
    {
      name: "LinkedIn",
      to: "https://www.linkedin.com/in/samxander/",
    },
    {
      name: "CV",
      to: "https://drive.google.com/file/d/12-ChXRcC867ltGTeO27IkwQoG5O3IyD-/view?usp=sharing",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-container">
          <div className="hero-grid-one"></div>
          <div className="hero-grid-two">
            <div></div>
          </div>
        </div>
        <div className="hero-text-container">
          <div className="hero-text">
            <h2>
              <span>I'M SAM,</span>
            </h2>
            <h2>FRONT-END DEVELOPER</h2>
          </div>
        </div>
      </section>
      <section className="hero-section-two">
        <div>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{link.name}</h3>
            </Link>
          ))}
        </div>
      </section>
      <section className="hero-section-three">
        <div>
          <h4>
            I am a motivated Front-End Developer and Digital Designer passionate
            about building beautiful and intuitive websites and applications!
          </h4>
        </div>
      </section>
    </>
  );
}

export default Hero;
