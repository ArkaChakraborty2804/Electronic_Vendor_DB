import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';

const InsertCart = () => {
  const [cartID, setCartID] = useState('');
  const [storeID, setStoreID] = useState('');
  const [productID, setProductID] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertCart', {
        CartID: cartID,
        StoreID: storeID,
        ProductID: productID,
        Quantity: parseInt(quantity) // Convert quantity to integer
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
      <h2 style={{ marginBottom: '20px' }}>Cart Form</h2>
      <form onSubmit={handleSubmit}>
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
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="storeID">Store ID:</label>
          <input
            type="text"
            id="storeID"
            value={storeID}
            onChange={(event) => setStoreID(event.target.value)}
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
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default InsertCart;
