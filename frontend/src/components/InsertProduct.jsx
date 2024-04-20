import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertProduct = () => {
  const [productID, setProductID] = useState('');
  const [companyID, setCompanyID] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertProduct', {
        ProductID: productID,
        CompanyID: companyID,
        ProductName: productName,
        ProductType: productType,
        Price: parseFloat(price) // Assuming price is a string in the input field
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
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Product Form</h2>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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
          <label htmlFor="companyID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Company ID:</label>
          <input
            type="text"
            id="companyID"
            value={companyID}
            onChange={(event) => setCompanyID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="productName" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="productType" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Product Type:</label>
          <input
            type="text"
            id="productType"
            value={productType}
            onChange={(event) => setProductType(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="price" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default InsertProduct;
