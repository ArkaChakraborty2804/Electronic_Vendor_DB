const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  router.post('/insertCompany', (req, res)=>{
    const {CompanyID, CompanyName} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO company  VALUES (?, ?)';
          const values = [CompanyID, CompanyName];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertProduct', (req, res)=>{
    const {ProductID, CompanyID, ProductName, ProductType, Price} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO product (ProductID, CompanyID, ProductName, ProductType, Price) VALUES (?, ?, ?, ?, ?)';
          const values = [ProductID, CompanyID, ProductName, ProductType, Price];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertPackage', (req, res)=>{
    const {PackageID, ProductID, CompanyID, PackageName} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO package (PackageID, ProductID, CompanyID, PackageName) VALUES (?, ?, ?, ?)';
          const values = [PackageID, ProductID, CompanyID, PackageName];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertManufacturer', (req, res)=>{
    const {ManufacturerID, ProductID, ManufacturerName} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO manufacturer VALUES (?, ?, ?)';
          const values = [ManufacturerID, ProductID, ManufacturerName];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertStore', (req, res)=>{
    const {StoreID, StoreName, StoreType, Address} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO store VALUES (?, ?, ?, ?)';
          const values = [StoreID, StoreName, StoreType, Address];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertStoreProd', (req, res)=>{
    const {StoreID, ProductID, Quantity, ManufacturerID} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO storeprod VALUES (?, ?, ?, ?)';
          const values = [StoreID, ProductID, Quantity, ManufacturerID];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })
  
  router.post('/insertCart', (req, res)=>{
    const {CartID, StoreID, ProductID, Quantity} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO cart VALUES (?, ?, ?, ?)';
          const values = [CartID, StoreID, ProductID, Quantity];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertCustomer', (req, res)=>{
    const {CustomerID, Name, Phone, Address} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO customer VALUES (?, ?, ?, ?)';
          const values = [CustomerID, Name, Phone, Address];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertCustomerInstance', (req, res)=>{
    const {OrderID, CustomerID, CartID} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO customerinstance VALUES (?, ?, ?)';
          const values = [OrderID, CustomerID, CartID];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertContract', (req, res)=>{
    const {ContractID, CustomerID, AccountNumber} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO contract VALUES (?, ?, ?)';
          const values = [ContractID, CustomerID, AccountNumber];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertCarddetails', (req, res)=>{
    const {CustomerID, CardNumber} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO carddetails VALUES (?, ?)';
          const values = [CustomerID, CardNumber];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertBooking', (req, res)=>{
    const {BookingID, OrderID, BookingDate} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO booking VALUES (?, ?, ?)';
          const values = [BookingID, OrderID, BookingDate];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  router.post('/insertShipping', (req, res)=>{
    const {ShippingID, BookingID, CompanyName, Location, DeliveryDate, Deadline} = req.body;
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'INSERT INTO shipping VALUES (?, ?, ?, ?, ?, ?)';
          const values = [ShippingID, BookingID, CompanyName, Location, DeliveryDate, Deadline];
      
          connection.query(sql, values, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            res.status(200).json({msg: "Data fetched successfully"});
            return result;
          });
        });
  })

  module.exports = router