import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assets/ViewBuilding.scss";

function ViewBuilding() {
  const { id } = useParams();
  const [buildingInfo, setBuildingInfo] = useState({});
  const [flatsList, setFlatsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Convert id to a number using parseInt
        const buildingId = parseInt(id, 10);

        const response = await axios.get(
          `http://localhost:8080/buildings/${buildingId}`
        );

        console.log("API Response:", response.data);
        setBuildingInfo(response.data[0]);
        setFlatsList(response.data[1]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="view-building-container">
      <div className="building-info">
        <h2>{buildingInfo.name}</h2>
        <p>Number of Flats: {buildingInfo.numberOfFlats}</p>
        <p>
          Address:{" "}
          {`${buildingInfo.line_1}, ${buildingInfo.line_2}, ${buildingInfo.city}, ${buildingInfo.pinCode}, ${buildingInfo.state}`}
        </p>
      </div>

      <div className="flats-list">
        <h2>Flats List</h2>
        {flatsList.map((flat) => (
          <div key={flat.id} className="flat-tile">
            <h3>{flat.type}</h3>
            <p>Area: {flat.area} sqft</p>
            <p>Floor: {flat.floor}</p>
            <p>Available: {flat.isAvailable ? "Yes" : "No"}</p>
            <p>Rent: Rs. {flat.rent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBuilding;
