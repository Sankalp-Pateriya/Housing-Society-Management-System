import React from 'react';

const Contact = () => {
  const contactContainerStyle = {
    minHeight: 'calc(100vh - 160px)', // Set minimum height to fill the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const contactInfoStyle = {
    color: '#333',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#007bff',
  };

  const contactDetailsStyle = {
    marginTop: '20px',
  };

  const emailStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const phoneNumberStyle = {
    color: '#007bff',
  };

  const addressTileStyle = {
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '10px',
    margin: '20px 0',
    maxWidth: '300px', // Limit the width of the address tiles
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <div style={contactContainerStyle}>
      <div style={contactInfoStyle}>
        <h1 style={headingStyle}>Contact Us</h1>

        <div style={contactDetailsStyle}>
          <p>
            For any inquiries, please feel free to reach out to us:
          </p>

          <p style={emailStyle}>
            Email: <a href="mailto:info@housingmanagement.com">info@housingmanagement.com</a>
          </p>

          <p style={phoneNumberStyle}>
            Phone: +1 (555) 123-4567
          </p>
        </div>

        {/* Multiple Addresses */}
        <div>
          <div style={addressTileStyle}>
            <h3>City Branch</h3>
            <p>
              123 Main Street, Cityville, Country
              <br />
              Phone: +1 (555) 456-7890
            </p>
          </div>

          <div style={addressTileStyle}>
            <h3>Suburb Branch</h3>
            <p>
              456 Suburb Avenue, Suburbia, Country
              <br />
              Phone: +1 (555) 789-0123
            </p>
          </div>

          {/* Add more address tiles as needed */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
