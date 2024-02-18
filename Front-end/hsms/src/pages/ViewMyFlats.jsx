import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewMyFlats.css"; // Import your CSS file for styling

function ViewMyFlats() {
  const [myFlats, setMyFlats] = useState([]);

  useEffect(() => {
    const fetchMyFlats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/flats/userFlats/:id"
        );
        setMyFlats(response.data);
      } catch (error) {
        console.error("Error fetching my flats:", error);
      }
    };

    fetchMyFlats();
  }, []);

  return (
    <div className="view-my-flats-container">
      <h2>My Flats</h2>
      <div className="my-flats-tiles-container">
        {myFlats.map((flat) => (
          <div key={flat.id} className="flat-tile">
            <h3>{flat.type}</h3>
            <p>Area: {flat.area} sqft</p>
            <p>Floor: {flat.floor}</p>
            <p>Rent: Rs. {flat.rent}</p>
            <p>
              Availability: {flat.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMyFlats;
