import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Information */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">FAQ's</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Contact Us</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Wishes</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Sitemap</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Customer Reviews</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Blogs</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Careers</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Contact Us</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Gift Vouchers</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Specials</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Returns</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Site Map</Link></li>
            </ul>
          </div>

          {/* Connect Us */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Connect Us</h5>
            <p><i className="fa-solid fa-phone"></i> 9876545210</p>
            <p><i className="fa-solid fa-envelope"></i> cake@gmail.com</p>
            <div className="d-flex gap-3">
              <Link to="/"><i className="fa-brands fa-facebook text-white"></i></Link>
              <Link to="/"><i className="fa-brands fa-instagram text-white"></i></Link>
              <Link to="/"><i className="fa-brands fa-x-twitter text-white"></i></Link>
              <Link to="/"><i className="fa-brands fa-youtube text-white"></i></Link>
            </div>
          </div>

        </div>

        <p className="text-center text-white pt-3 pb-3 mb-0">
          &copy; Copyrights - All Rights Reserved - The Flower
        </p>
      </div>
    </footer>
  );
};

export default Footer;
