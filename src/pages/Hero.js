import PhotoAlbum from "react-photo-album";
import Services from "../components/Services";

function Hero() {
  const images = [
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695772307/Capture-Everything_c6uvlm.webp",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768373/creative-website-concept-1.webp",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768376/Cypher-window-min.webp",
      width: 1903,
      height: 960,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768375/cypher-one-1.webp",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768379/get-assessed-1-min.webp",
      width: 1654,
      height: 2339,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768375/cypher-features-min.webp",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695773013/cypher-project-page_dqxzeb.webp",
      width: 2005,
      height: 2629,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768375/cypher-dashboard-announcement_copy-min.webp",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695771945/Crowdsurf-report_jtmbjh.webp",
      width: 1654,
      height: 2339,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768361/10k_Followers-min.webp",
      width: 1600,
      height: 900,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695772747/banner_1_alt_h0xoyu.webp",
      width: 1232,
      height: 1552,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768421/2K-followers-min.webp",
      width: 1080,
      height: 1920,
    },
    {
      src: "https://res.cloudinary.com/dzqnbbola/image/upload/v1695768377/details_3_alt-min.webp",
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
        <PhotoAlbum layout="rows" photos={images}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={`Gallery ${index + 1}`}
              loading="lazy" // Add the loading="lazy" attribute
            />
          ))}
        </PhotoAlbum>
      </section>
    </>
  );
}

export default Hero;
