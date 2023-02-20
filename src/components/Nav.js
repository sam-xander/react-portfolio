import NavLinkItem from "./NavLinkItem";

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
        <NavLinkItem key={name} path={path} />
      ))}
    </nav>
  );
}

export default Nav;
