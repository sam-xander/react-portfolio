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
          href="https://dribbble.com/samxander"
          rel="noreferrer"
          target="_blank"
          className="card"
        >
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fas fa-laptop fa-2x"></i>
            <h3 className="services-h3">View Portfolio</h3>
            <p>Explore a selection of my creative projects.</p>
          </div>
        </a>
        <a
          href="https://github.com/sam-xander"
          rel="noreferrer"
          target="_blank"
          className="card"
        >
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fas fa-laptop fa-2x"></i>
            <h3 className="services-h3">View GitHub</h3>
            <p>Check out my front-end work.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Services;
