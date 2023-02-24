import NavLinkItem from "./NavLinkItem";

function Nav() {
  const routes = [
    {
      path: "work",
    },
    {
      path: "contact",
    },
  ];
  return (
    <nav className="header-nav">
      {routes.map(({ path }) => (
        <NavLinkItem key={path} path={path} />
      ))}
    </nav>
  );
}

export default Nav;
