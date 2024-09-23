import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div class="logo-container">
      <span class="logo-name">GSV</span>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/project">
          Project
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
