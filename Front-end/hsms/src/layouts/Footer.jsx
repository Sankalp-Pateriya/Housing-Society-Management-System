import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../assets/layout.scss";
import AddBuilding from "../component/addbuilding";
const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontSize: "18px", // Increased font size
};
function Footer() {
  return (
    <div className="margin-t">
      
      <div className="footer">
        <p className="footer-center">
          Copyright © 2023 Housing-Society-Management-System
        </p>
        <div className="footer-center di-sm-pb-10 di-md-pb-20">
          {/* Use Link component from react-router-dom for navigation */}
          <p className="footerlink-outer">
            <Link to="/" className="footerlinks" title="home">
              Home
            </Link>
          </p>
          <p className="footerlink-outer">
            <Link to="/contact" className="footerlinks" title="contact">
              Contact
            </Link>
          </p>
          <p className="footerlink-outer">
            <Link to="/about" className="footerlinks" title="about">
              About
            </Link>
          </p>
          <p className="footerlink-outer">
            <Link to="/terms" className="footerlinks" title="terms">
              Terms
            </Link>
          </p>
          <p className="footerlink-outer">
            <Link
              to="/privacy-policy"
              className="footerlinks"
              title="privacy policy"
            >
              Privacy Policy
            </Link>
          </p>
          <p className="footerlink-outer">
            <Link to="/sitemap" className="footerlinks" title="sitemap">
              Sitemap
            </Link>
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Footer;
