import PhotoAlbum from "react-photo-album";
import Services from "../components/Services";

function Hero() {
  // Function to build Cloudinary URLs
  const buildCloudinaryURL = (imageName, width, height) => {
    return `https://res.cloudinary.com/dzqnbbola/image/fetch/q_auto,f_auto,w_${width},h_${height}/v1695763569/https://samxander.com/cld-assets/images/gallery/${imageName}`;
  };

  const images = [
    {
      src: buildCloudinaryURL("modern-website-concept-1.jpg", 1920, 1080),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("creative-website-concept-1.png", 1920, 1080),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("Cypher-window-min.png", 1903, 960),
      width: 1903,
      height: 960,
    },
    {
      src: buildCloudinaryURL("artist-portfolio-1.png", 1920, 1080),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("cypher-one-1.png", 1920, 1080),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("playtime-1.png", 1920, 1080),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("get-assessed-1-min.png", 1654, 2339),
      width: 1654,
      height: 2339,
    },
    {
      src: buildCloudinaryURL("cypher-features-min.png", 1920, 1080),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("cypher-project-1.png", 2005, 2629),
      width: 2005,
      height: 2629,
    },
    {
      src: buildCloudinaryURL(
        "cypher-dashboard-announcement copy-min.png",
        1920,
        1080
      ),
      width: 1920,
      height: 1080,
    },
    {
      src: buildCloudinaryURL("Crowdsurf-report.png", 1654, 2339),
      width: 1654,
      height: 2339,
    },
    {
      src: buildCloudinaryURL("10k Followers-min.png", 1600, 900),
      width: 1600,
      height: 900,
    },
    {
      src: buildCloudinaryURL("artist-portfolio-2.png", 1920, 2312),
      width: 1920,
      height: 2312,
    },
    {
      src: buildCloudinaryURL("banner 1_alt-min.png", 1232, 1552),
      width: 1232,
      height: 1552,
    },
    {
      src: buildCloudinaryURL("2K-followers-min.png", 1080, 1920),
      width: 1080,
      height: 1920,
    },
    {
      src: buildCloudinaryURL("1.5K-followers-min.png", 1080, 1920),
      width: 1080,
      height: 1920,
    },
    {
      src: buildCloudinaryURL("details_2_alt-min.jpg", 1232, 1352),
      width: 1232,
      height: 1352,
    },
    {
      src: buildCloudinaryURL("details_3_alt-min.jpg", 1232, 1352),
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
