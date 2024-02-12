import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User'
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
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />

        <label htmlFor="role">Role:</label><br />
        <select id="role" name="role" value={formData.role} onChange={handleChange} required>
          <option value="User">User</option>
          <option value="Secretary">Secretary</option>
        </select><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
