import { NavLink } from "react-router-dom";

function NavLinkItem({ name, path }) {
  return (
    <NavLink to={`${path}`} className="nav-link" activeclassname="active">
      {name}
    </NavLink>
  );
}

export default NavLinkItem;
