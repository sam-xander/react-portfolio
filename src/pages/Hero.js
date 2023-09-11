import { Gallery } from "react-grid-gallery";

function Hero() {
  const images = [
    {
      src: "/images/gallery/modern-website-concept-1.jpg",
      width: 1920,
      height: 1080,
      caption: "Modern Website Design",
    },
    {
      src: "/images/gallery/creative-website-concept-1.png",
      width: 1920,
      height: 1080,
      caption: "Creative Website Design",
    },
    {
      src: "/images/gallery/Cypher-window-min.png",
      width: 1903,
      height: 960,
      caption: "Cypher Dashboard Design",
    },
    {
      src: "/images/gallery/artist-portfolio-1.png",
      width: 1920,
      height: 1080,
      caption: "Artist Portfolio Design",
    },
    {
      src: "/images/gallery/cypher-one-1.png",
      width: 1920,
      height: 1080,
      caption: "Cypher One Page Design",
    },
    {
      src: "/images/gallery/playtime-1.png",
      width: 1920,
      height: 1080,
      caption: "Video Game Search Platform Design",
    },
    {
      src: "/images/gallery/cypher-features-min.png",
      width: 1920,
      height: 1080,
      caption: "Cypher Features Graphic",
    },
    {
      src: "/images/gallery/cs logo-min.png",
      width: 4500,
      height: 4500,
      caption: "Cypher Features Graphic",
    },
    {
      src: "/images/gallery/cypher-project-1.png",
      width: 2005,
      height: 2629,
      caption: "Cypher Features Graphic",
    },
    {
      src: "/images/gallery/cypher-dashboard-announcement copy-min.png",
      width: 1920,
      height: 1080,
      caption: "Cypher Features Graphic",
    },
    {
      src: "/images/gallery/get-assessed-1-min.png",
      width: 1654,
      height: 2339,
      caption: "Cypher Features Graphic",
    },
    {
      src: "/images/gallery/Crowdsurf-report.png",
      width: 1654,
      height: 2339,
      caption: "Cypher Features Graphic",
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
              <span>DESIGNER+</span>
              <br />
              DEVELOPER
            </h2>
            <a
              href="https://www.behance.net/samxander"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              VIEW WORK →
            </a>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <Gallery
          images={images}
          enableImageSelection={false}
          rowHeight={270}
          margin={0}
        />
      </section>
    </>
  );
}

export default Hero;
