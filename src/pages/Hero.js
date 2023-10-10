import Services from "../components/Services";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Hero() {
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
              <span>DESIGNER+</span>
              <br />
              DEVELOPER
            </h2>
            <a
              href="https://dribbble.com/samxander"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              VIEW WORK →
            </a>
          </div>
        </div>
      </section>
      <Services />
      {/* <Gallery imageArray={imageArray} /> */}
    </>
  );
}

export default Hero;
