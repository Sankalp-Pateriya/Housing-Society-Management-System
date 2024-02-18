import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuildingTiles = () => {
  const [buildings, setBuildings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/buildings");
        setBuildings(response.data);
      } catch (error) {
        console.error("Error fetching buildings:", error);
      }
    };

    fetchBuildings();
  }, []);

  const handleClick = (id) => {
    navigate(`/flats/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/buildings/${id}`, { state: { buildingId: id } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/buildings/${id}`);
      setBuildings(buildings.filter((building) => building.id !== id));
    } catch (error) {
      console.error("Error deleting building:", error);
    }
  };

  return (
    <div className="building-tiles-container">
      <h2>Building List</h2>
      {buildings.map((building) => (
        <div key={building.id} className="building-tile">
          <h3 onClick={() => handleClick(building.id)}>{building.name}</h3>
          <p>
            Address: {building.address}, {building.city}, {building.state},{" "}
            {building.pinCode}
          </p>
          <p>Number of flats: {building.numberOfFlats}</p>
          <button type="button" onClick={() => handleDelete(building.id)}>
            Delete
          </button>
          <button type="button" onClick={() => handleUpdate(building.id)}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default BuildingTiles;
