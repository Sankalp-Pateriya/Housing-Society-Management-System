import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewFlatPage = ({ match }) => {
  const [flatData, setFlatData] = useState(null);

  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/flats/flatNbuilding/${match.params.id}`
        );
        setFlatData(response.data);
      } catch (error) {
        console.error("Error fetching flat data:", error);
      }
    };

    fetchFlatData();
  }, [match.params.id]);

  return (
    <div className="view-flat-container">
      <h2>Flat Details</h2>
      {flatData && (
        <div className="flat-details">
          <div className="building-details">
            <h3>Building Details</h3>
            <p>ID: {flatData[0][0].id}</p>
            <p>Name: {flatData[0][0].name}</p>
            <p>Number of Flats: {flatData[0][0].numberOfFlats}</p>
            <p>
              Address:{" "}
              {`${flatData[0][0].line_1}, ${flatData[0][0].line_2}, ${flatData[0][0].city}, ${flatData[0][0].pinCode}, ${flatData[0][0].state}`}
            </p>
          </div>
          <div className="flat-details">
            <h3>Flat Details</h3>

            <p>Building Name: {flatData[0][0].name}</p>
            <p>Area: {flatData[1][0].area} sqft</p>
            <p>Floor: {flatData[1][0].floor}</p>
            <p>Type: {flatData[1][0].type}</p>
            <p>Rent: Rs. {flatData[1][0].rent}</p>
            <p>
              Building Address: {flatData[0][0].line_1}, {flatData[0][0].line_2}
              ,{flatData[0][0].city},{flatData[0][0].pinCode}.
            </p>
            <p>User ID: {flatData[1][0].userId}</p>
            <p>Available: {flatData[1][0].available ? "Yes" : "No"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewFlatPage;
