import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function AdminHome()   {
    const auth =sessionStorage.getItem("auth");
    const [buildingList, setBuildingList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/home/seeAll");
            setBuildingList(response.data[0]);
          } catch (error) {
            console.error("Error:", error);
          }
        };fetchData();
    }, []);

    const handleBuildingClick = (buildingId) => {
        // Navigate to the 'viewBuilding' component with the buildingId in the route
        navigate(`/flats/${buildingId}`);
      };
  return (
    <div>
    <div className="leftsidesection">
    {auth !== "0" && (
        <div className="side-panel">
          <ul>
            {auth === "admin" && (
              <li>
                <Link to="/add-building">Add Building</Link>
              </li>
            )}
            {auth === "secretary" && (
              <li>
                <Link to="/add-flat">Add Flat</Link>
              </li>
            )}
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          
        </div>
      )}
</div>

{/* <div className="rightsidesection">
    <table>
        <thead></thead>
    </table>
</div> */}

<div><div className="building-tiles-container">
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
            <span><button type="button" className="ms-2">Delete</button></span>
            </p>
            <p>{building.numberOfFlats} Flats are Available</p>
          </div>
        ))}
      </div></div>

</div>

  );
}

export default AdminHome;