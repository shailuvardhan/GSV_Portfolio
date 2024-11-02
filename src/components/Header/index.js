import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div class="logo-container">
      <span class="logo-name">GSV</span>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          <AiOutlineHome className="header-icons" />
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          <AiOutlineUser className="header-icons" />
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/projects">
          <AiOutlineFundProjectionScreen className="header-icons" />
          Projects
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/resume">
          <CgFileDocument className="header-icons" />
          Resume
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
