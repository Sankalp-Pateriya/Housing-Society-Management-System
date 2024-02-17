// Dashboard.jsx

import React, { useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import userContext from "./context/userContext";
import { doLogout } from "./auth"; // Import the doLogout function

const Dashboard = () => {
  const userContextData = useContext(userContext);
  const navigate = useNavigate();

  // Use optional chaining to safely access nested properties
  const userEmail = userContextData?.user?.data?.email;

  const handleLogout = () => {
    // Clear user data from context and local storage
    userContextData.setUser({
      data: null,
      login: false,
    });
    doLogout(); // Call the doLogout function to remove user data from localStorage
    // Redirect to home page
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "beige", minHeight: "100vh" }}>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <h3 className="text-center">Welcome to Dashboard</h3>
            {/* Render user email only if it's available */}
            {userEmail && <h4 className="text-center">Logged in as: {userEmail}</h4>}
            <div className="text-center mt-4">
              <Button onClick={handleLogout} color="danger">Logout</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
