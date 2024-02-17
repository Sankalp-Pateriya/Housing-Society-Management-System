import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddBuilding() {
  const [formData, setFormData] = useState({
    name: '',
    numberOfFlats: 0,
    userId: 0,
    line_1: '',
    line_2: '',
    city: '',
    pinCode: '',
    state: ''
  });

  const [errors, setErrors] = useState({});

  const [secretaries, setSecretaries] = useState([]);

  useEffect(() => {
    // Fetch list of secretaries when component mounts
    fetchSecretaries();
  }, []); // Empty dependency array to fetch data only once when component mounts

  const fetchSecretaries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/getAllSecretary');
      setSecretaries(response.data); // Set the list of secretaries in state
      
    } catch (error) {
      console.error('Error fetching secretaries:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'secretary') {
      // If the selected field is secretary, set userId with the value from sessionStorage
      setFormData({
        ...formData,
        userId: value,
        [name]: value
      });
    } else {
      // For other fields, set formData as usual
      setFormData({
        ...formData,
        [name]: value
      });
    }
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

    if (!validatepinCode(formData.pinCode)) {
      newErrors.pinCode = 'Please enter a valid pinCode.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validatepinCode = (pinCode) => {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pinCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("UserId:"+formData.userId);
    if (!validateForm()) {
      return;
    }

    try {
      
      
      const response = await axios.post('http://localhost:8080/buildings/addBuilding', formData);

      console.log('Response:', response.data);
      // Reset form after successful submission
      setFormData({
        name: '',
        numberOfFlats: 0,
        userId: null,
        line_1: '',
        line_2: '',
        city: '',
        pinCode: '',
        state: '',
        secretary: ''
      });//window.location.reload();
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
          <label htmlFor="pinCode" style={{ fontWeight: 'bold' }}>pinCode:</label>
          <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.pinCode && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.pinCode}</p>}
        </div>
       
        {/* Dropdown menu for selecting secretary */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="secretary" style={{ fontWeight: 'bold' }}>Secretary:</label>
          <select
            id="secretary"
            name="secretary"
            value={formData.secretary}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          >
            <option value="">Select Secretary</option>
            {secretaries.map((secretary) => (
              <option key={secretary.id} value={secretary.id}>{secretary.name}</option>
            ))} 
          </select>
          {errors.secretary && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.secretary}</p>}
        </div>


        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Submit</button>
      </form>
      {/* <h1> {secretaries.map((secretary) => (
              <h1 key={secretary.id} value={secretary.id}>{secretary.name}-{secretary.id}</h1>
            ))}  </h1> */}
    </div>
  );
}

export default AddBuilding;