import { Link, useLocation } from "react-router-dom";

function NavLink({ path }) {
  const { pathname } = useLocation();

  const activePath = pathname.split("/");

  return (
    <Link
      to={`/${path}`}
      className={`nav-link ${activePath[1] === path && "active"}`}
    >
      {path}
    </Link>
  );
}

export default NavLink;
