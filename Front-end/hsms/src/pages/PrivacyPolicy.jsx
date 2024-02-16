import React from 'react';
import Container from 'react-bootstrap/Container';

const PrivacyPolicy = () => {
  // Define styles directly within the component
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const privacyPolicyStyle = {
    color: '#333',
  };

  const headerStyle = {
    color: '#007bff',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <Container style={containerStyle}>
      <div style={privacyPolicyStyle}>
        <h1 style={headerStyle}>Privacy Policy</h1>

        <p>
          At Housing Society Management System, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you use our
          website.
        </p>

        <h2 style={headerStyle}>Information We Collect</h2>

        <p>
          We collect personal information that you provide directly to us when using our website.
          This information may include your name, email address, contact details, and any other
          information you choose to provide.
        </p>

        <h2 style={headerStyle}>How We Use Your Information</h2>

        <p>
          The information we collect is used to provide and improve our services. We may use your
          information to communicate with you, respond to your inquiries, and personalize your
          experience.
        </p>

        <h2 style={headerStyle}>Security</h2>

        <p>
          We prioritize the security of your personal information. While we strive to use
          commercially acceptable means to protect your information, we cannot guarantee its
          absolute security.
        </p>

        <h2 style={headerStyle}>Third-Party Links</h2>

        <p>
          Our website may contain links to third-party websites. We have no control over the
          content, privacy policies, or practices of these websites and encourage you to review
          their policies before providing any personal information.
        </p>

        <h2 style={headerStyle}>Changes to This Privacy Policy</h2>

        <p>
          We may update our Privacy Policy from time to time. Any changes will be effective when
          posted on this page. We encourage you to review this Privacy Policy periodically for any
          changes.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
