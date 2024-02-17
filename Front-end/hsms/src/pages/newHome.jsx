import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./newHome.css";
function SeeAll() {
  const navigate = useNavigate();
  const [buildingList, setBuildingList] = useState([]);
  const [flatList, setFlatList] = useState([]);

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

    navigate(`/buildings/${buildingId}`);
    // You can also send a GET request using axios if needed
  };

  const handleFlatClick = (flatId) => {
    // Navigate to the flat details page with the flatId
    navigate(`/flat/${flatId}`);
    // You can also send a GET request using axios if needed
  };

  const renderBuildingTiles = () => {
    return (
      <div>
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
            <p> {building.numberOfFlats} Flats are Availble </p>
          </div>
        ))}
      </div>
    );
  };

  const renderFlatTiles = () => {
    return (
      <div>
        <h2>Flat List</h2>
        {flatList.map((flat) => (
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
    </div>
  );
}

export default SeeAll;
