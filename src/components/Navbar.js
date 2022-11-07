import { NavLink } from "react-router-dom";
//Link-u merr class ne menyre automatike active nese perdorim Navlink
const Navbar = () => {
  return (
    <nav className="primary-nav">
      <NavLink to="/science">Science</NavLink>
      <NavLink to="/sports">Sports</NavLink>
      <NavLink to="/business">Business</NavLink>
      <NavLink to="/world">World</NavLink>
      <NavLink to="/politics">Politics</NavLink>
      <NavLink to="/automobile">Automobile</NavLink>
      <NavLink to="/">All</NavLink>
    </nav>
  );
};
export default Navbar;
