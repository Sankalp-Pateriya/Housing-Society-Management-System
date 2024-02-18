import React, { useState, useEffect } from "react";
import axios from "axios";

function AddFlat() {
  const [formData, setFormData] = useState({
    area: 0,
    floor: 0,
    type: "",
    rent: 0,
    buildingId: 0,
    userId: 0, // New field for user selection
  });
  const [buildings, setBuildings] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch list of buildings when component mounts
    fetchBuildings();
    fetchUsers();
  }, []); // Empty dependency array to fetch data only once when component mounts

  const fetchBuildings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/buildings"); // Adjust the endpoint accordingly
      setBuildings(response.data); // Set the list of buildings in state
    } catch (error) {
      console.error("Error fetching buildings:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/flats/addFlat"); // Adjust the endpoint accordingly
      setUsers(response.data); // Set the list of users in state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "building") {
      // If the selected field is secretary, set userId with the value from sessionStorage
      setFormData({
        ...formData,
        buildingId: value,
        [name]: value,
      });
    } else if (name === "user") {
      // If the selected field is secretary, set userId with the value from sessionStorage
      setFormData({
        ...formData,
        userId: value,
        [name]: value,
      });
    } else {
      // For other fields, set formData as usual
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateFormData = () => {
    let newErrors = {};

    if (formData.area <= 0) {
      newErrors.area = "Area must be greater than 0.";
    }

    if (formData.floor <= 0) {
      newErrors.floor = "Floor must be greater than 0.";
    }

    if (formData.type === "") {
      newErrors.type = "Please select a type.";
    }

    if (formData.rent <= 0) {
      newErrors.rent = "Rent must be greater than 0.";
    }

    if (formData.buildingId <= 0) {
      newErrors.buildingId = "Building ID must be greater than 0.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    console.log("BuildingId:" + formData.buildingId);
    console.log("UserId:" + formData.userId);
    e.preventDefault();

    const newErrors = validateFormData();

    if (Object.keys(newErrors).length === 0) {
      try {
        // Make a POST request to your Spring Boot backend endpoint
        const response = await axios.post(
          "http://localhost:8080/flats/addFlat",
          formData
        );
        console.log("Response:", response.data);
        // Handle any further actions based on the response, if needed
      } catch (error) {
        console.error("Error:", error);
        // Handle error responses from the server
      }
    } else {
      // Update errors state with new validation errors
      setErrors(newErrors);
    }
    window.location.reload();
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Add Flat Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Area field */}
        <label
          htmlFor="area"
          style={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Area:
        </label>
        <input
          type="number"
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "12px",
          }}
          required
        />
        {errors.area && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {errors.area}
          </p>
        )}

        {/* Floor field */}
        <label
          htmlFor="floor"
          style={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Floor:
        </label>
        <input
          type="number"
          id="floor"
          name="floor"
          value={formData.floor}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "12px",
          }}
          required
        />
        {errors.floor && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {errors.floor}
          </p>
        )}

        {/* Type dropdown */}
        <label
          htmlFor="type"
          style={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Type:
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "12px",
          }}
          required
        >
          <option value="">Select Type</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="1RK">1RK</option>
        </select>
        {errors.type && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {errors.type}
          </p>
        )}

        {/* Rent field */}
        <label
          htmlFor="rent"
          style={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Rent:
        </label>
        <input
          type="number"
          id="rent"
          name="rent"
          value={formData.rent}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "12px",
          }}
          required
        />
        {errors.rent && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {errors.rent}
          </p>
        )}

        {/* BuildingId dropdown */}
        <label
          htmlFor="buildingId"
          style={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Select Building:
        </label>
        <select
          id="buildingId"
          name="buildingId"
          value={formData.buildingId}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "12px",
          }}
          required
        >
          <option value="">Select Building</option>
          {buildings.map((building) => (
            <option key={building.id} value={building.id}>
              {building.name}
            </option>
          ))}
        </select>
        {errors.buildingId && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {errors.buildingId}
          </p>
        )}

        {/* User dropdown */}
        <label
          htmlFor="userId"
          style={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Select User:
        </label>
        <select
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "12px",
          }}
          required
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        {errors.userId && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {errors.userId}
          </p>
        )}

        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "12px 24px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />
      </form>
    </div>
  );
}

export default AddFlat;
