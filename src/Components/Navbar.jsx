import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar shadow-sm">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand fw-bold me-5" to="/">🍰 Cake World</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link nav-animate" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-animate" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-animate" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-animate" to="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
