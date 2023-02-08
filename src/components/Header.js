import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-logo">
          SAM <span>XANDER</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
