import React, { useState } from 'react';
import axios from 'axios';
import page from '../page';

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
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '400px' }}>
      <h2 style={{ marginBottom: '20px' }}>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="bookingID">Booking ID:</label>
          <input
            type="text"
            id="bookingID"
            value={bookingID}
            onChange={(event) => setBookingID(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
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
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(event) => setBookingDate(event.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default InsertBooking;
