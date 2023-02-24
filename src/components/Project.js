import { Link } from "react-router-dom";

function Project({ link, image, title, subtitle }) {
  return (
    <Link
      to={link}
      alt={title}
      className="work-grid-item"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: `url("${image}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="work-grid-item-overlay"></div>
      <div className="work-grid-item-text">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
      </div>
    </Link>
  );
}

export default Project;
