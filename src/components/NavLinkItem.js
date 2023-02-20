import { NavLink } from "react-router-dom";

function NavLinkItem({ path }) {
  return (
    <NavLink to={`/${path}`} className="nav-link" activeClassName="active">
      {path}
    </NavLink>
  );
}

export default NavLinkItem;
