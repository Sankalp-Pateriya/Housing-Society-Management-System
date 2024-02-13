// import React, { useState } from 'react';
// import axios from 'axios';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'User'
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/users/register', formData);
//       console.log('Response:', response.data);
//       // Optionally, you can redirect to another page or show a success message
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error responses from the server
//       if (error.response && error.response.data) {
//         setErrors(error.response.data);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>User Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label><br />
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
//         {errors.name && <p>{errors.name}</p>}<br />

//         <label htmlFor="email">Email:</label><br />
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
//         {errors.email && <p>{errors.email}</p>}<br />

//         <label htmlFor="password">Password:</label><br />
//         <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />
//         {errors.password && <p>{errors.password}</p>}<br />

//         <label htmlFor="role">Role:</label><br />
//         <select id="role" name="role" value={formData.role} onChange={handleChange} required>
//           <option value="User">User</option>
//           <option value="Secretary">Secretary</option>
//         </select><br /><br />

//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// export default RegistrationForm;


import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', formData);
      console.log('Response:', response.data);
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle error responses from the server
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>User Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.name && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.name}</p>}

        <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.email && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.email}</p>}

        <label htmlFor="password" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required />
        {errors.password && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.password}</p>}

        <label htmlFor="role" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Role:</label>
        <select id="role" name="role" value={formData.role} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '12px' }} required>
          <option value="User">User</option>
          <option value="Secretary">Secretary</option>
        </select>

        <input type="submit" value="Submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }} />
      </form>
    </div>
  );
}

export default RegistrationForm;
