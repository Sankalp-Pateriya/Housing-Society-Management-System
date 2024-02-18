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
      <div className="website-info">
        <h2>Welcome to Our Property Portal</h2>
        <p>
          Explore and find your dream home! Whether you want to put up your
          property for sale or book an apartment, our platform provides a
          seamless experience. Users can search based on location, city,
          localities, pincode, and apply filters like rent range, area, and
          availability. Create an account, login, and discover various property
          options put up by other users.
        </p>
        <h3>On this Webiste You can</h3>
        <div>
          <ul>
            <li>Create Your free account</li>
            <li>Login with your existing account</li>
            <li>Search Properties in India</li>
            <li>View Details of any Property</li>
            <li>
              Filter based on different criterias such as Rent Range, Area, etc.
            </li>
            <li>book properties directly through the website</li>
            <li>
              Contact Real Estate Agents for more information about the property
            </li>
          </ul>
        </div>
        <div>
          <h4>
            First time on the site ??{" "}
            <a href="/signup" style={linkStyle}>
              Get Registered
            </a>
          </h4>

          <ul>
            <li>
              Have some properties to showcase?
              <a href="/signup" style={linkStyle}>
                Register as a Secretary!
              </a>
            </li>
            <li>
              Want to buy/view property?{" "}
              <a href="/signup" style={linkStyle}>
                Click here to register as a User!
              </a>
            </li>
            <li>
              Want to filter as per your budget, area and other criteria?
              <a href="/home" style={linkStyle}>
                Apply Filters
              </a>
            </li>
            <li>
              Want to view All available property?
              <a href="/home/seeAll" style={linkStyle}>
                Go here!
              </a>
            </li>
            <li>
              Already a User ?{" "}
              <a href="/login" style={linkStyle}>
                Welcome Back!
              </a>
            </li>
          </ul>
        </div>
      </div>
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
