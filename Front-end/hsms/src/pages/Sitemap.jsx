import React from 'react';
import Container from 'react-bootstrap/Container';

const Sitemap = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // Center alignment
  };

  const sitemapStyle = {
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    color: '#007bff',
    fontSize: '36px', // Increased font size
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '18px', // Increased font size
  };

  return (
    <Container style={containerStyle}>
      <div style={sitemapStyle}>
        <h1 style={headerStyle}>Sitemap</h1>

        <ul style={listStyle}>
          <li style={listItemStyle}>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/add-building" style={linkStyle}>
              Add Building
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/add-user" style={linkStyle}>
              Add User
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/add-flat" style={linkStyle}>
              Add Flat
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/view-building" style={linkStyle}>
              View Building
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/login" style={linkStyle}>
              Login
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/signup" style={linkStyle}>
              Signup
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/about" style={linkStyle}>
              About Us
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/privacy-policy" style={linkStyle}>
              Privacy Policy
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/terms" style={linkStyle}>
              Terms
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/contact" style={linkStyle}>
              Contact
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/sitemap" style={linkStyle}>
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sitemap;
