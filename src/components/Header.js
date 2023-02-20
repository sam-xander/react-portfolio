import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <h1 className="header-logo">
            SAM <span>XANDER</span>
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
