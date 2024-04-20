import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ViewContracts = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getContract')
      .then(response => {
        console.log(response.data);
        setContracts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Set products to an empty array in case of error
        setContracts([]);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #8B5CF6, #3182CE)', fontFamily: 'Arial, sans-serif' }} className="flex items-center justify-center">
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', background: 'white' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#6B46C1', marginBottom: '2rem' }}>Contracts</h1>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', border: '1px solid #D1D5DB', width: '100%', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#6B46C1', color: 'white' }}>
                <th style={{ padding: '1rem' }}>ContractID</th>
                <th style={{ padding: '1rem' }}>CustomerID</th>
                <th style={{ padding: '1rem' }}>AccountNumber</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(contracts) && contracts.map(contract => (
                <tr key={contract.ContractID} style={{ background: '#F3F4F6', color: '#4A5568' }}>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{contract.ContractID}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{contract.CustomerID}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '1rem' }}>{contract.AccountNumber}</td>
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

export default ViewContracts;
