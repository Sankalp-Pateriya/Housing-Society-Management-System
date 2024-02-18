import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./newHome.css";
import BookFlatPopup from "../component/BookFlatPopup"; // Import the Popup component

function SeeAll() {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");
  const [buildingList, setBuildingList] = useState([]);
  const [flatList, setFlatList] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null); // Track the selected flat for booking
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/home/seeAll");
        setBuildingList(response.data[0]);
        setFlatList(response.data[1]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleBuildingClick = (buildingId) => {
    // Navigate to the 'viewBuilding' component with the buildingId in the route
    navigate(`/flats/${buildingId}`);
  };

  const handleFlatClick = (flatId) => {
    // Set the selected flat and open the popup
    setSelectedFlat(flatId);
    setIsPopupOpen(true);
  };

  const handleBookFlat = async (flatId) => {
    // Implement the booking logic using axios
    try {
      await axios.put(`http://localhost:8080/flats/${flatId}`);
      // You may want to handle success or show a confirmation message
      console.log("Flat booked successfully!");
    } catch (error) {
      console.error("Error booking flat:", error);
    }

    // Close the popup and clear the selected flat
    setIsPopupOpen(false);
    setSelectedFlat(null);

    // Reload the page
    window.location.reload();
  };

  const handleCancelBooking = () => {
    // Close the popup and clear the selected flat
    setIsPopupOpen(false);
    setSelectedFlat(null);
  };

  const renderBuildingTiles = () => {
    return (
      <div className="building-tiles-container">
        <h2>Building List</h2>
        {buildingList.map((building) => (
          <div
            key={building.id}
            className="building-tile"
            onClick={() => handleBuildingClick(building.id)}
          >
            <h3>{building.name}</h3>
            <p>
              Address:{" "}
              {`${building.line_1}, ${building.line_2}, ${building.city}, ${building.pinCode}, ${building.state}`}
            </p>
            <p>{building.numberOfFlats} Flats are Available</p>
          </div>
        ))}
      </div>
    );
  };

  const renderFlatTiles = () => {
    const availableFlats = flatList.filter((flat) => !flat.isAvailable);

    return (
      <div className="flat-tiles-container">
        <h2>Flat List</h2>
        {availableFlats.map((flat) => (
          <div
            key={flat.id}
            className="flat-tile"
            onClick={() => handleFlatClick(flat.id)}
          >
            <h3>{flat.type}</h3>
            <p>Area: {flat.area} sqft</p>
            <p>Floor: {flat.floor}</p>
            <p
              className="availability"
              style={{ color: flat.isAvailable ? "red" : "lightgreen" }}
            >
              Available: {flat.isAvailable ? "No" : "Yes"}
            </p>
            <h5>Rent: Rs. {flat.rent}</h5>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="see-all-container">
      {renderBuildingTiles()}
      {renderFlatTiles()}
      {isPopupOpen && (
        <BookFlatPopup
          title="Book Flat"
          message="Do you want to book this flat?"
          onYes={handleBookFlat}
          onCancel={handleCancelBooking}
          flatId={selectedFlat}
        />
      )}
    </div>
  );
}

export default SeeAll;
