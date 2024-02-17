import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewUser({ userId }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/users/${userId}`
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();

    // Cleanup function to cancel any pending requests if the component unmounts or the userId changes
    return () => {
      // Cancel the request using axios cancel token if necessary
    };
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>View User</h2>
      <div style={{ marginBottom: "12px" }}>
        <strong>Name:</strong> {userData.name}
      </div>
      <div style={{ marginBottom: "12px" }}>
        <strong>Email:</strong> {userData.email}
      </div>
      <div style={{ marginBottom: "12px" }}>
        <strong>Role:</strong> {userData.role}
      </div>
    </div>
  );
}

export default ViewUser;
