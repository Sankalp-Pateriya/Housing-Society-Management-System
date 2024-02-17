import React from "react";

function About()   {
  return (
    <div className="about-container" style={{ backgroundColor: "#f5f5dc", color: "#333" }}>
      <div className="container">
        <form>
          <h1>About Our Housing Society</h1>
          <p>Welcome to our housing society! We are dedicated to providing a comfortable and secure living environment for all residents.</p>

          <h2>Our Mission and Vision</h2>
          <p>Our mission is to foster a vibrant community where residents feel safe, respected, and engaged. We envision a society where everyone works together to create a harmonious and fulfilling living experience.</p>

          <h2>History</h2>
          <p>Established in 2005, our housing society has been serving residents for over 15 years. Over the years, we have grown and adapted to meet the changing needs of our community.</p>

          <h2>Management Team</h2>
          <p>Meet our dedicated management team who work tirelessly to ensure the smooth operation of our society:</p>
          <p>President: John Doe</p>
          <p>Secretary: Jane Smith</p>
          <p>Treasurer: Michael Johnson</p>

          <h2>Services and Facilities</h2>
          <p>We offer a range of services and facilities to enhance the quality of life for our residents, including:</p>
          <ul style={{ listStyleType: "none" }}>
            <li>24/7 Security</li>
            <li>Maintenance Services</li>
            <li>Recreational Areas</li>
            <li>Community Spaces</li>
          </ul>

          <h2>Community Initiatives</h2>
          <p>We organize various initiatives and programs to bring residents together and build a strong sense of community. Join us for events such as:</p>
          <ul style={{ listStyleType: "none" }}>
            <li>Community BBQs</li>
            <li>Health and Wellness Workshops</li>
            <li>Environmental Cleanup Drives</li>
          </ul>

          <h2>Contact Information</h2>
          <p>For inquiries or assistance, please contact us:</p>
          <p>- Address: 123 Main Street, City, State, ZIP</p>
          <p>- Phone: (555) 123-4567</p>
          <p>- Email: info@housing-society.com</p>

          <h2>Testimonials</h2>
          <blockquote>
            "Living in this housing society has been a wonderful experience. The sense of community here is amazing, and the facilities provided are top-notch."
          </blockquote>
          <blockquote>
            "I moved into this housing society a year ago, and I've never felt more at home. The management team is responsive, and my neighbors are friendly."
          </blockquote>

          <h2>FAQs</h2>
          <ul style={{ listStyleType: "none" }}>
            <li><strong>Q:</strong> What are the parking policies?</li>
            <p><strong>A:</strong> Each resident is allocated one parking spot. Additional parking is available on a first-come, first-served basis.</p>
            <li><strong>Q:</strong> Are pets allowed?</li>
            <p><strong>A:</strong> Yes, we allow pets in accordance with our pet policy. Please refer to the housing society rules for more details.</p>
          </ul>

          <h2>Future Plans</h2>
          <ul style={{ listStyleType: "none" }}>
            <li>Renovation of Common Areas</li>
            <li>Implementation of Green Initiatives</li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default About;
