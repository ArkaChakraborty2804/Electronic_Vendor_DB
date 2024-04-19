import React, { useState } from 'react';
import axios from 'axios';

const InsertManufacturer = () => {
  const [manufacturerID, setManufacturerID] = useState('');
  const [productID, setProductID] = useState('');
  const [manufacturerName, setManufacturerName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/insertManufacturer', {
        ManufacturerID: manufacturerID,
        ProductID: productID,
        ManufacturerName: manufacturerName
      });
      console.log('Data successfully submitted:', response.data);
      // You can add further logic here after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors here
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '400px' }}>
      <h2 style={{ marginBottom: '20px' }}>Manufacturer Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="manufacturerID">Manufacturer ID:</label>
          <input
            type="text"
            id="manufacturerID"
            value={manufacturerID}
            onChange={(event) => setManufacturerID(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productID">Product ID:</label>
          <input
            type="text"
            id="productID"
            value={productID}
            onChange={(event) => setProductID(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="manufacturerName">Manufacturer Name:</label>
          <input
            type="text"
            id="manufacturerName"
            value={manufacturerName}
            onChange={(event) => setManufacturerName(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default InsertManufacturer;
