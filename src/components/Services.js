import { useEffect } from "react";

function Services() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsEl = document.getElementById("cards");
    if (cardsEl) {
      cardsEl.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsEl) {
        cardsEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="services">
      <div id="cards">
        <a
          href="https://www.behance.net/samxander"
          rel="noreferrer"
          target="_blank"
          className="card"
        >
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fas fa-laptop fa-2x"></i>
            <h3 className="services-h3">Portfolio</h3>
            <p>Explore a selection of my creative projects.</p>
          </div>
        </a>

        {/* Keep the card comments for future use
        <a href="/" className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fas fa-cogs fa-2x"></i>
            <h3 className="services-h3">Services</h3>
            <p>Discover how I can assist you.</p>
          </div>
        </a>

        <a href="/" className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fas fa-paint-brush fa-2x"></i>
            <h3 className="services-h3">Process</h3>
            <p>Learn about my professional workflow.</p>
          </div>
        </a>

        <a href="/" className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fas fa-envelope fa-2x"></i>
            <h3 className="services-h3">Contact</h3>
            <p>Get in touch with me.</p>
          </div>
        </a> */}
      </div>
    </div>
  );
}

export default Services;
