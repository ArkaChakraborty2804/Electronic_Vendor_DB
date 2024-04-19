import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';

const InsertCustomerInstance = () => {
  const [orderID, setOrderID] = useState('');
  const [customerID, setCustomerID] = useState('');
  const [cartID, setCartID] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertCustomerInstance', {
        OrderID: orderID,
        CustomerID: customerID,
        CartID: cartID
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
      <h2 style={{ marginBottom: '20px' }}>Customer Instance Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="orderID">Order ID:</label>
          <input
            type="text"
            id="orderID"
            value={orderID}
            onChange={(event) => setOrderID(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="customerID">Customer ID:</label>
          <input
            type="text"
            id="customerID"
            value={customerID}
            onChange={(event) => setCustomerID(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cartID">Cart ID:</label>
          <input
            type="text"
            id="cartID"
            value={cartID}
            onChange={(event) => setCartID(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default InsertCustomerInstance;
