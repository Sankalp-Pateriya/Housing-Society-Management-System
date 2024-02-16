import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewFlat({ flatId }) {
  const [flatData, setFlatData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/flats/${flatId}`);
        setFlatData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchFlatData();

    return () => {
      // Cleanup function if necessary
    };
  }, [flatId]);

  const handleEdit = () => {
    // Logic for editing flat
    console.log('Edit flat:', flatData);
  };

  const handleDelete = () => {
    // Logic for deleting flat
    console.log('Delete flat:', flatData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!flatData) {
    return <div>Flat not found</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>View Flat</h2>
      <div style={{ marginBottom: '12px' }}>
        <strong>Area:</strong> {flatData.area}
      </div>
      <div style={{ marginBottom: '12px' }}>
        <strong>Floor:</strong> {flatData.floor}
      </div>
      <div style={{ marginBottom: '12px' }}>
        <strong>Type:</strong> {flatData.type}
      </div>
      <div style={{ marginBottom: '12px' }}>
        <strong>Rent:</strong> {flatData.rent}
      </div>
      <div style={{ marginBottom: '12px' }}>
        <strong>Building ID:</strong> {flatData.buildingId}
      </div>
      {flatData.image && (
        <div style={{ marginBottom: '12px' }}>
          <strong>Image:</strong>
          <img src={flatData.image} alt="Flat" style={{ display: 'block', maxWidth: '100%', marginTop: '8px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={handleEdit} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginRight: '8px' }}>Edit</button>
        <button onClick={handleDelete} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Delete</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default ViewFlat;
