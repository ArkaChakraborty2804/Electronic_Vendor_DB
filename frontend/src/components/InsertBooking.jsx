import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';
import Navbar from './Navbar';

const InsertBooking = () => {
  const [bookingID, setBookingID] = useState('');
  const [orderID, setOrderID] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(page + '/insertBooking', {
        BookingID: bookingID,
        OrderID: orderID,
        BookingDate: bookingDate
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
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Booking Form</h2>
        <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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
            <label htmlFor="orderID" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Order ID:</label>
            <input
                type="text"
                id="orderID"
                value={orderID}
                onChange={(event) => setOrderID(event.target.value)}
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
            />
            </div>
            <div style={{ marginBottom: '20px' }}>
            <label htmlFor="bookingDate" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Booking Date:</label>
            <input
                type="date"
                id="bookingDate"
                value={bookingDate}
                onChange={(event) => setBookingDate(event.target.value)}
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
            />
            </div>
            <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
        </div>
    </>
  );
};

export default InsertBooking;
