import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateBuilding() {
  const location = useLocation();
  const buildingId = location.state.buildingId;

  const [buildingData, setBuildingData] = useState({
    id: 0,
    name: "",
    numberOfFlats: 0,
    userId: 0,
    line_1: "",
    line_2: "",
    city: "",
    pinCode: "",
    state: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/buildings/${buildingId}`
        );
        const buildingInfo = response.data[0][0]; // Extracting building details from JSON

        setBuildingData({
          id: buildingInfo.id,
          name: buildingInfo.name,
          numberOfFlats: buildingInfo.numberOfFlats,
          userId: buildingInfo.userId,
          line_1: buildingInfo.line_1,
          line_2: buildingInfo.line_2,
          city: buildingInfo.city,
          pinCode: buildingInfo.pinCode,
          state: buildingInfo.state,
        });
      } catch (error) {
        console.error("Error fetching building data:", error);
      }
    };

    fetchData();
  }, [buildingId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuildingData({
      ...buildingData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/buildings/${buildingData.id}`, {
        ...buildingData,
      });
      console.log("Building details updated successfully!");
    } catch (error) {
      console.error("Error updating building details:", error);
    }
  };

  return (
    <div>
      <h1>Update Building</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={buildingData.id} readOnly />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={buildingData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number of Flats:
          <input
            type="number"
            name="numberOfFlats"
            value={buildingData.numberOfFlats}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Line 1:
          <input
            type="text"
            name="line_1"
            value={buildingData.line_1}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other input fields for building details */}
        <button type="submit">Update Building</button>
      </form>
    </div>
  );
}

export default UpdateBuilding;
