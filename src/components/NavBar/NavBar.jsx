import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav" >
      <ul className="list" >
        <li className="item">
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
