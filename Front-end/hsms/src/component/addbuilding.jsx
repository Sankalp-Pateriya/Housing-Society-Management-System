import React, { useState } from 'react';

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

  const validatePincode = (pincode) => {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password length validation
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Perform validation
    if (!validatePincode(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid pincode.';
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    if (Object.keys(newErrors).length === 0) {
      // All validations passed, submit the form
      // Handle form submission here
      console.log(formData);
    } else {
      // Update errors state with new validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Add Building Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        {/* Number of flats field */}
        <label htmlFor="numberOfFlats">Number of Flats:</label>
        <input type="number" id="numberOfFlats" name="numberOfFlats" value={formData.numberOfFlats} onChange={handleChange} required />

        {/* State dropdown */}
        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange} required>
          <option value="">Select State</option>
          {/* Add dropdown options for states */}
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
        </select>

        {/* City dropdown */}
        <label htmlFor="city">City:</label>
        <select id="city" name="city" value={formData.city} onChange={handleChange} required>
          <option value="">Select City</option>
          {/* Add dropdown options for cities */}
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>

        {/* Address fields */}
        <label htmlFor="line_1">Address Line 1:</label>
        <input type="text" id="line_1" name="line_1" value={formData.line_1} onChange={handleChange} required />

        <label htmlFor="line_2">Address Line 2:</label>
        <input type="text" id="line_2" name="line_2" value={formData.line_2} onChange={handleChange} />

        {/* Pincode field */}
        <label htmlFor="pincode">Pincode:</label>
        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />

        {/* Display error messages for pincode, email, and password */}
        {errors.pincode && <p>{errors.pincode}</p>}
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddBuilding;
