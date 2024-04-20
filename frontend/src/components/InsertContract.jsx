import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertContract = () => {
  const [contractID, setContractID] = useState('');
  const [customerID, setCustomerID] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertContract', {
        ContractID: contractID,
        CustomerID: customerID,
        AccountNumber: accountNumber
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
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Contract Form</h2>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="contractID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Contract ID:</label>
          <input
            type="text"
            id="contractID"
            value={contractID}
            onChange={(event) => setContractID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="customerID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Customer ID:</label>
          <input
            type="text"
            id="customerID"
            value={customerID}
            onChange={(event) => setCustomerID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="accountNumber" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(event) => setAccountNumber(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default InsertContract;
