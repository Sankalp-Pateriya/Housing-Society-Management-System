import React, { useState } from 'react';

function AddFlat() {
  const [formData, setFormData] = useState({
    area: 0,
    floor: 0,
    type: '',
    rent: 0,
    buildingId: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <h2>Add Flat Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Area field */}
        <label htmlFor="area">Area:</label>
        <input type="number" id="area" name="area" value={formData.area} onChange={handleChange} required />

        {/* Floor field */}
        <label htmlFor="floor">Floor:</label>
        <input type="number" id="floor" name="floor" value={formData.floor} onChange={handleChange} required />

        {/* Type dropdown */}
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="1RK">1RK</option>
        </select>

        {/* Rent field */}
        <label htmlFor="rent">Rent:</label>
        <input type="number" id="rent" name="rent" value={formData.rent} onChange={handleChange} required />

        {/* BuildingId field */}
        <label htmlFor="buildingId">Building ID:</label>
        <input type="number" id="buildingId" name="buildingId" value={formData.buildingId} onChange={handleChange} required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddFlat;
