import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [insertOpen, setInsertOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const toggleInsert = () => {
    setInsertOpen(!insertOpen);
    setViewOpen(false); // Close view dropdown when opening insert dropdown
  };

  const toggleView = () => {
    setViewOpen(!viewOpen);
    setInsertOpen(false); // Close insert dropdown when opening view dropdown
  };

  return (
    <nav style={{ background: 'linear-gradient(to right, #8B5CF6, #3182CE)', color: '#fff', padding: '10px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0 }}><Link to='/' style={{ textDecoration: 'none', color: 'white', padding: '10px' }}>Shopify</Link></h2>
        </div>
        <div>
          <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 40 }}>
            <li style={{ marginRight: '40px', marginLeft: '40px', position: 'relative' }}>
              <span onClick={toggleInsert} style={{ cursor: 'pointer' }}>Insert</span>
              {insertOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '5px', zIndex: 100, width: '145px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/insert-company" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Company</Link></li>
                    <li><Link to="/insert-product" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Product</Link></li>
                    <li><Link to="/insert-package" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Package</Link></li>
                    <li><Link to="/insert-manufacturer" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Manufacturer</Link></li>
                    <li><Link to="/insert-store" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Store</Link></li>
                    <li><Link to="/insert-cart" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Cart</Link></li>
                    <li><Link to="/insert-customer" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Customer</Link></li>
                    <li><Link to="/insert-customerinstance" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Customer Instance</Link></li>
                    <li><Link to="/insert-contract" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Contract</Link></li>
                    <li><Link to="/insert-carddetails" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Card Details</Link></li>
                    <li><Link to="/insert-booking" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Booking</Link></li>
                    <li><Link to="/insert-shipping" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Shipping</Link></li>
                    <li><Link to="/insert-storeprod" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Store Products</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li style={{ marginRight: '40px', position: 'relative' }}>
              <span onClick={toggleView} style={{ cursor: 'pointer' }}>View</span>
              {viewOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '5px', zIndex: 100, width: '145px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/view-company" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Company</Link></li>
                    <li><Link to="/view-product" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Product</Link></li>
                    <li><Link to="/view-package" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Package</Link></li>
                    <li><Link to="/view-manufacturer" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Manufacturer</Link></li>
                    <li><Link to="/view-store" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Store</Link></li>
                    <li><Link to="/view-cart" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Cart</Link></li>
                    <li><Link to="/view-customer" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Customer</Link></li>
                    <li><Link to="/view-customerinstance" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Customer Instance</Link></li>
                    <li><Link to="/view-contract" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Contract</Link></li>
                    <li><Link to="/view-carddetails" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Card Details</Link></li>
                    <li><Link to="/view-booking" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Booking</Link></li>
                    <li><Link to="/view-shipping" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Shipping</Link></li>
                    <li><Link to="/view-storeprod" style={{ textDecoration: 'none', color: '#333', padding: '10px' }}>Store Products</Link></li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
