import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertStoreProd = () => {
  const [storeID, setStoreID] = useState('');
  const [productID, setProductID] = useState('');
  const [quantity, setQuantity] = useState('');
  const [manufacturerID, setManufacturerID] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertStoreProd', {
        StoreID: storeID,
        ProductID: productID,
        Quantity: parseInt(quantity), // Convert quantity to integer
        ManufacturerID: manufacturerID
      });
      console.log('Data successfully submitted:', response.data);
      // You can add further logic here after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors here
    }
  };

  return (
    <>
    <Navbar/>
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '400px' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Store Product Form</h2>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="storeID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Store ID:</label>
          <input
            type="text"
            id="storeID"
            value={storeID}
            onChange={(event) => setStoreID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="productID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Product ID:</label>
          <input
            type="text"
            id="productID"
            value={productID}
            onChange={(event) => setProductID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="quantity" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Quantity:</label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="manufacturerID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Manufacturer ID:</label>
          <input
            type="text"
            id="manufacturerID"
            value={manufacturerID}
            onChange={(event) => setManufacturerID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default InsertStoreProd;
