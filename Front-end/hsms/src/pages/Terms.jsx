import React from 'react';
import Container from 'react-bootstrap/Container';

const Terms = () => {
  // Define styles directly within the component
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const termsStyle = {
    color: '#333',
    textAlign: 'justify',
    lineHeight: '1.6',
  };

  const headerStyle = {
    color: '#007bff',
  };

  return (
    <Container style={containerStyle}>
      <div style={termsStyle}>
        <h1 style={headerStyle}>Terms and Conditions</h1>

        <p>
          Welcome to Housing Society Management System! These terms and conditions outline the
          rules and regulations for the use of our website.
        </p>

        <h2 style={headerStyle}>1. Acceptance of Terms</h2>

        <p>
          By accessing this website, you are agreeing to be bound by these website terms and
          conditions, all applicable laws, and regulations, and agree that you are responsible for
          compliance with any applicable local laws.
        </p>

        <h2 style={headerStyle}>2. Use of Materials</h2>

        <p>
          The content on this website is for general information purposes only. The materials
          contained on this website are provided 'as is.' Your use of any information or materials on
          this website is entirely at your own risk.
        </p>

        <h2 style={headerStyle}>3. User Account and Security</h2>

        <p>
          To access certain features of the website, you may be required to create a user account.
          You are responsible for maintaining the confidentiality of your account and password and
          for restricting access to your computer.
        </p>

        <h2 style={headerStyle}>4. Privacy Policy</h2>

        <p>
          Our Privacy Policy outlines how we collect, use, disclose, and safeguard your information.
          By using our website, you consent to the terms of our Privacy Policy.
        </p>

        <h2 style={headerStyle}>5. Changes to Terms</h2>

        <p>
          We reserve the right to revise these terms and conditions at any time. You should visit
          this page periodically to review the most current terms because they are binding on you.
        </p>

        <h2 style={headerStyle}>6. Contact Information</h2>

        <p>
          If you have any questions or concerns about our Terms and Conditions, please contact us at{' '}
          <a href="mailto:info@housingmanagement.com" style={{ color: '#007bff', textDecoration: 'none' }}>
            info@housingmanagement.com
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

export default Terms;
