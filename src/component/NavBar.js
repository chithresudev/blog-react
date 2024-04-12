import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
       
        <li className="nav-item">
        <Link className="nav-link" to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
