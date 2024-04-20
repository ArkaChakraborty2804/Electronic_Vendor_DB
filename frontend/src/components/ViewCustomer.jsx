import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getCustomer')
      .then(response => {
        console.log(response.data);
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Set products to an empty array in case of error
        setCustomers([]);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #8B5CF6, #3182CE)', fontFamily: 'Arial, sans-serif' }} className="flex items-center justify-center">
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', background: 'white' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#6B46C1', marginBottom: '2rem' }}>Customers</h1>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', border: '1px solid #D1D5DB', width: '100%', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#6B46C1', color: 'white' }}>
                <th style={{ padding: '1rem' }}>CustomerID</th>
                <th style={{ padding: '1rem' }}>Name</th>
                <th style={{ padding: '1rem' }}>Phone</th>
                <th style={{ padding: '1rem' }}>Address</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(customers) && customers.map(customer => (
                <tr key={customer.CustomerID} style={{ background: '#F3F4F6', color: '#4A5568' }}>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{customer.CustomerID}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{customer.Name}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{customer.Phone}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{customer.Address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewCustomers;
