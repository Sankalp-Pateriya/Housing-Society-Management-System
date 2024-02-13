import React, { useState } from 'react';
import axios from 'axios';

function AddFlat() {
  const [formData, setFormData] = useState({
    area: 0,
    floor: 0,
    type: '',
    rent: 0,
    buildingId: 0
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateFormData = () => {
    let newErrors = {};

    if (formData.area <= 0) {
      newErrors.area = 'Area must be greater than 0.';
    }

    if (formData.floor <= 0) {
      newErrors.floor = 'Floor must be greater than 0.';
    }

    if (formData.type === '') {
      newErrors.type = 'Please select a type.';
    }

    if (formData.rent <= 0) {
      newErrors.rent = 'Rent must be greater than 0.';
    }

    if (formData.buildingId <= 0) {
      newErrors.buildingId = 'Building ID must be greater than 0.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateFormData();

    if (Object.keys(newErrors).length === 0) {
      try {
        // Make a POST request to your Spring Boot backend endpoint
        const response = await axios.post('http://localhost:8080/api/flats', formData);
        console.log('Response:', response.data);
        // Handle any further actions based on the response, if needed
      } catch (error) {
        console.error('Error:', error);
        // Handle error responses from the server
      }
    } else {
      // Update errors state with new validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Add Flat Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Area field */}
        <label htmlFor="area" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Area:</label>
        <input type="number" id="area" name="area" value={formData.area} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.area && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.area}</p>}

        {/* Floor field */}
        <label htmlFor="floor" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Floor:</label>
        <input type="number" id="floor" name="floor" value={formData.floor} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.floor && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.floor}</p>}

        {/* Type dropdown */}
        <label htmlFor="type" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Type:</label>
        <select id="type" name="type" value={formData.type} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required>
          <option value="">Select Type</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="1RK">1RK</option>
        </select>
        {errors.type && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.type}</p>}

        {/* Rent field */}
        <label htmlFor="rent" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Rent:</label>
        <input type="number" id="rent" name="rent" value={formData.rent} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.rent && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.rent}</p>}

        {/* BuildingId field */}
        <label htmlFor="buildingId" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Building ID:</label>
        <input type="number" id="buildingId" name="buildingId" value={formData.buildingId} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.buildingId && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.buildingId}</p>}

        <input type="submit" value="Submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }} />
      </form>
    </div>
  );
}

export default AddFlat;
