import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ViewCompany = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getCompany')
      .then(response => {
        console.log(response.data);
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #8B5CF6, #3182CE)' }} className="flex items-center justify-center">
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>Companies</h1>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', border: '1px solid white', width: '100%' }}>
            <thead>
              <tr style={{ background: '#6B46C1', color: 'white' }}>
                <th style={{ padding: '1.5rem', textAlign: 'left' }}>CompanyID</th>
                <th style={{ padding: '1.5rem', textAlign: 'left' }}>Name</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <tr key={company.CompanyID} style={{ background: 'white', color: '#4A5568' }}>
                  <td style={{ border: '1px solid black', padding: '1.5rem' }}>{company.CompanyID}</td>
                  <td style={{ border: '1px solid black', padding: '1.5rem' }}>{company.CompanyName}</td>
                  {/* Add more table cells as needed */}
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

export default ViewCompany;
