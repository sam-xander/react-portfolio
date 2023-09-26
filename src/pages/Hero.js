import PhotoAlbum from "react-photo-album";
import Services from "../components/Services";

function Hero() {
  const images = [
    {
      src: "/images/gallery/modern-website-concept-1.jpg",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/creative-website-concept-1.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/Cypher-window-min.png",
      width: 1903,
      height: 960,
    },
    {
      src: "/images/gallery/artist-portfolio-1.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/cypher-one-1.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/playtime-1.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/get-assessed-1-min.png",
      width: 1654,
      height: 2339,
    },
    {
      src: "/images/gallery/cypher-features-min.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/cypher-project-1.png",
      width: 2005,
      height: 2629,
    },
    {
      src: "/images/gallery/cypher-dashboard-announcement copy-min.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/gallery/Crowdsurf-report.png",
      width: 1654,
      height: 2339,
    },
    {
      src: "/images/gallery/10k Followers-min.png",
      width: 1600,
      height: 900,
    },
    {
      src: "/images/gallery/artist-portfolio-2.png",
      width: 1920,
      height: 2312,
    },
    {
      src: "/images/gallery/banner 1_alt-min.png",
      width: 1232,
      height: 1552,
    },
    {
      src: "/images/gallery/2K-followers-min.png",
      width: 1080,
      height: 1920,
    },
    {
      src: "/images/gallery/1.5K-followers-min.png",
      width: 1080,
      height: 1920,
    },
    {
      src: "/images/gallery/details_2_alt-min.jpg",
      width: 1232,
      height: 1352,
    },
    {
      src: "/images/gallery/details_3_alt-min.jpg",
      width: 1232,
      height: 1352,
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
      <Services />
      <section className="gallery-section">
        <PhotoAlbum layout="rows" photos={images} />
      </section>
    </>
  );
}

export default Hero;
