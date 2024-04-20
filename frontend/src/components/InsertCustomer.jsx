import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertCustomer = () => {
  const [customerID, setCustomerID] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertCustomer', {
        CustomerID: customerID,
        Name: name,
        Phone: phone,
        Address: address
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
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Customer Form</h2>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default InsertCustomer;
