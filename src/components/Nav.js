import NavLink from "./NavLink";

function Nav() {
  const routes = [
    {
      path: "about",
    },
    {
      path: "work",
    },
    {
      path: "contact",
    },
  ];
  return (
    <nav className="header-nav">
      {routes.map(({ name, path }) => (
        <div key={name}>
          <NavLink path={path} />
        </div>
      ))}
    </nav>
  );
}

export default Nav;
