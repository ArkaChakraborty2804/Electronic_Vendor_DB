const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const getRoutes = require('./routes/getRoutes');
const insertRoutes = require('./routes/insertRoutes')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.use(express.json());



// app.post('/api/insertData', (req, res) => {
//   const { name } = req.body;

//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('Error getting connection:', err);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

//     const sql = 'INSERT INTO tab VALUES (?)';

//     connection.query(sql, name, (err, result) => {
//       connection.release();

//       if (err) {
//         console.error('Error executing query:', err);
//         return res.status(500).json({ message: 'Failed to insert data' });
//       }

//       console.log('Data inserted successfully:', result);
//       res.status(200).json({ message: 'Data inserted successfully', insertedId: result.insertId });
//     });
//   });
// });

// app.get('/api/getCompany', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM company';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getProduct', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM product';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getPackage', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM package';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getManufacturer', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM manufacturer';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getStore', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM store';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getStoreProd', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM storeprod';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getCart', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM cart';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getCustomer', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM customer';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getCustomerInstance', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM customerinstance';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getContract', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM contract';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getCarddetails', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM carddetails';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getBooking', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM booking';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

// app.get('/api/getShipping', (req, res)=>{
//   pool.getConnection((err, connection) => {
//         if (err) {
//           console.error('Error getting connection:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         const sql = 'SELECT * FROM shipping';
    
//         connection.query(sql, (err, result) => {
//           connection.release();
    
//           if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Failed to insert data' });
//           }
    
//           console.log('Data fetched successfully:', result);
//           res.status(200).json({msg: "Data fetched successfully"});
//           return result;
//         });
//       });
// })

app.use(cors())

app.use('/api', getRoutes);
app.use('/api', insertRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
