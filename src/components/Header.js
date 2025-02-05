import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaBell,
  FaComments,
  FaSearch,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">SportX</span>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navbar-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaHome size={22} /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/network"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaUserFriends size={22} /> <span>My Network</span>
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaBriefcase size={22} /> <span>Jobs</span>
        </NavLink>
        <NavLink
          to="/messaging"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaComments size={22} /> <span>Messaging</span>
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaBell size={22} /> <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/Profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="profile-dropdown">
            <span className="profile-initial">T</span>
            <span className="profile-name">Me</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
