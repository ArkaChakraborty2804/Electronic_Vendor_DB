import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertShipping = () => {
  const [shippingID, setShippingID] = useState('');
  const [bookingID, setBookingID] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertShipping', {
        ShippingID: shippingID,
        BookingID: bookingID,
        CompanyName: companyName,
        Location: location,
        DeliveryDate: deliveryDate,
        Deadline: deadline
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
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Shipping Form</h2>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="shippingID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Shipping ID:</label>
          <input
            type="text"
            id="shippingID"
            value={shippingID}
            onChange={(event) => setShippingID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="bookingID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Booking ID:</label>
          <input
            type="text"
            id="bookingID"
            value={bookingID}
            onChange={(event) => setBookingID(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="companyName" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="location" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="deliveryDate" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Delivery Date:</label>
          <input
            type="date"
            id="deliveryDate"
            value={deliveryDate}
            onChange={(event) => setDeliveryDate(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="deadline" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default InsertShipping;
