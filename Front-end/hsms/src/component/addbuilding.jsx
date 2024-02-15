import React, { useState } from 'react';
import axios from 'axios';

function AddBuilding() {
  const [formData, setFormData] = useState({
    name: '',
    numberOfFlats: 0,
    state: '',
    city: '',
    line_1: '',
    line_2: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Please enter building name.';
    }

    if (formData.numberOfFlats <= 0) {
      newErrors.numberOfFlats = 'Number of flats must be greater than 0.';
    }

    if (formData.state.trim() === '') {
      newErrors.state = 'Please select a state.';
    }

    if (formData.city.trim() === '') {
      newErrors.city = 'Please enter city.';
    }

    if (formData.line_1.trim() === '') {
      newErrors.line_1 = 'Please enter address line 1.';
    }

    if (!validatePincode(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid pincode.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validatePincode = (pincode) => {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/buildings', formData);
      console.log('Response:', response.data);
      // Reset form after successful submission
      setFormData({
        name: '',
        numberOfFlats: 0,
        state: '',
        city: '',
        line_1: '',
        line_2: '',
        pincode: ''
      });
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle error responses from the server
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Add Building</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.name && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="numberOfFlats" style={{ fontWeight: 'bold' }}>Number of Flats:</label>
          <input type="number" id="numberOfFlats" name="numberOfFlats" value={formData.numberOfFlats} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.numberOfFlats && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.numberOfFlats}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="state" style={{ fontWeight: 'bold' }}>State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.state && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.state}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="city" style={{ fontWeight: 'bold' }}>City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.city && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.city}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="line_1" style={{ fontWeight: 'bold' }}>Address Line 1:</label>
          <input type="text" id="line_1" name="line_1" value={formData.line_1} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.line_1 && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.line_1}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="line_2" style={{ fontWeight: 'bold' }}>Address Line 2:</label>
          <input type="text" id="line_2" name="line_2" value={formData.line_2} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="pincode" style={{ fontWeight: 'bold' }}>Pincode:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.pincode && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.pincode}</p>}
        </div>

        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Submit</button>
      </form>
    </div>
  );
}

export default AddBuilding;
