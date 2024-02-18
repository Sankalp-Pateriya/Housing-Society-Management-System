import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../component/ProfilePage.css";
function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve data from session storage
    const storedUserData = JSON.parse(sessionStorage.getItem("userData"));
    setUserData(storedUserData);
  }, []);

  const handleViewMyFlats = () => {
    if (userData && userData.id) {
      // Navigate to the specified route along with the user ID
      navigate(`/users/viewFlats/${userData.id}`);
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {userData && (
        <div className="profile-form">
          <div className="profile-field">
            <div className="profile-box">
              <label>ID:</label>
              <span>{userData.id}</span>
            </div>
          </div>
          <div className="profile-field">
            <div className="profile-box">
              <label>Name:</label>
              <span>{userData.name}</span>
            </div>
          </div>
          <div className="profile-field">
            <div className="profile-box">
              <label>Email:</label>
              <span>{userData.email}</span>
            </div>
          </div>
          <div className="profile-field">
            <div className="profile-box">
              <label>Contact:</label>
              <span>{userData.contact}</span>
            </div>
          </div>
          <div className="profile-field">
            <div className="profile-box">
              <label>Role:</label>
              <span>{userData.role}</span>
            </div>
          </div>
        </div>
      )}

      {userData && (
        <div className="profile-field">
          <button className="view-my-flats-button" onClick={handleViewMyFlats}>
            View My Flats
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
