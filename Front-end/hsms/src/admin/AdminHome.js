import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BuildingTiles = () => {
  // State to store the list of buildings
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    // Function to fetch buildings from the API
    const fetchBuildings = async () => {
      try {
        // Make a GET request to fetch buildings from the API
        const response = await axios.get("http://localhost:8080/buildings");
        // Update state with the fetched buildings
        setBuildings(response.data);
      } catch (error) {
        console.error("Error fetching buildings:", error);
      }
    };

    // Call the fetchBuildings function when the component mounts
    fetchBuildings();
  }, []); // Empty dependency array ensures the effect runs only once on mount
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/flats/${id}`);
  };

  return (
    <div className="building-tiles-container">
      <h2>Building List</h2>
      {buildings.map((building) => (
        <div
          key={building.id}
          className="building-tile"
          onClick={() => handleClick(building.id)}
        >
          <h3>{building.name}</h3>
          <p>
            Address: {building.address}, {building.city}, {building.state},{" "}
            {building.pinCode}
            <span>
              <button type="button">Delete</button>
            </span>
          </p>
          <p>Number of flats: {building.numberOfFlats}</p>
          {/* You can add more building information as needed */}
        </div>
      ))}
    </div>
  );
};

export default BuildingTiles;
