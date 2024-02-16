import React from 'react';
import building1 from '../images/building1.jpg';
import building2 from '../images/building2.jpg';
import building3 from '../images/building3.jpg';
import building4 from '../images/building4.jpg';

const ViewBuilding = () => {
  // Sample data for the building
  const buildingData = {
    buildingName: 'Elegant Towers',
    address: '123 Main Street, Cityville',
    ownerName: 'John Doe',
    type: '2 BHK',
    carpetArea: '1200 sq feet',
    floor: '4/6',
    rent: '12,750',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #3498db', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', backgroundColor: '#ecf0f1', transition: 'transform 0.3s ease-in-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Building Images */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <img src={building1} alt="Building 1" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <img src={building2} alt="Building 2" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <img src={building3} alt="Building 3" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <img src={building4} alt="Building 4" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
        </div>

        {/* Rent Property */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#3498db' }}>Rent: {buildingData.rent}</p>
        </div>
      </div>

      {/* First Box: Building Name and Address */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#3498db' }}>Building Name:</label>
        <p>{buildingData.buildingName}</p>

        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#3498db' }}>Address:</label>
        <p>{buildingData.address}</p>
      </div>

      {/* Second Box: Owner Name, Type, Carpet Area, Floor */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#3498db' }}>Owner Name:</label>
            <p>{buildingData.ownerName}</p>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#3498db' }}>Type:</label>
            <p>{buildingData.type}</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#3498db' }}>Carpet Area:</label>
            <p>{buildingData.carpetArea}</p>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#3498db' }}>Floor Number:</label>
            <p>{buildingData.floor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBuilding;
