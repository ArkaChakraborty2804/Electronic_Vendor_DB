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

  router.get('/getCompany', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM company';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getProduct', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM product';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getPackage', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM package';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getManufacturer', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM manufacturer';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getStore', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM store';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getStoreProd', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM storeprod';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getCart', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM cart';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getCustomer', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM customer';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getCustomerInstance', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM customerinstance';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getContract', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM contract';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getCarddetails', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM carddetails';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getBooking', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM booking';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  router.get('/getShipping', (req, res)=>{
    pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          const sql = 'SELECT * FROM shipping';
      
          connection.query(sql, (err, result) => {
            connection.release();
      
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ message: 'Failed to insert data' });
            }
      
            console.log('Data fetched successfully:', result);
            return res.status(200).json(result);
            // return result;
          });
        });
  })
  
  
  module.exports = router