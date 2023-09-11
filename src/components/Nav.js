import NavLinkItem from "./NavLinkItem";

function Nav() {
  const routes = [
    {
      name: "view work →",
      path: "https://www.behance.net/samxander",
    },
  ];
  return (
    <nav className="header-nav">
      {routes.map(({ name, path }) => (
        <NavLinkItem key={name} name={name} path={path} />
      ))}
    </nav>
  );
}

export default Nav;
