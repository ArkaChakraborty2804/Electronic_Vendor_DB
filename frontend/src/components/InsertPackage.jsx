import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertPackage = () => {
  const [packageID, setPackageID] = useState('');
  const [productID, setProductID] = useState('');
  const [companyID, setCompanyID] = useState('');
  const [packageName, setPackageName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertPackage', {
        PackageID: packageID,
        ProductID: productID,
        CompanyID: companyID,
        PackageName: packageName
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
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Package Form</h2>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="packageID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Package ID:</label>
          <input
            type="text"
            id="packageID"
            value={packageID}
            onChange={(event) => setPackageID(event.target.value)}
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
          <label htmlFor="packageName" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Package Name:</label>
          <input
            type="text"
            id="packageName"
            value={packageName}
            onChange={(event) => setPackageName(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default InsertPackage;
