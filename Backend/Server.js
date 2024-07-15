/// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const mysql2 = require('mysql2');
const cors = require('cors');


const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
// Add any other middleware here as needed

// Routes
app.get('/', (req, res) => {
  res.send('It fu#n worked!');
});
// Define your API routes here

// Endpoint to fetch content by ID
app.get('/content/:id', (req, res) => {
  const contentId = req.params.id;
  const query = 'SELECT Info_page FROM information_page WHERE Info_ID = 1';

  connection.query(query, [contentId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});


// MySQL Database Connection
const db = mysql2.createConnection({
  host: 'localhost', // Corrected: Remove port number
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





















// app.post('/upload', (req, res) => {
//   const imagePath = path.join(__dirname, 'Backend/Images/2024-06-29.png');
//   const imageBuffer = fs.readFileSync(imagePath);

//   const sql = 'INSERT INTO images (name, image) VALUES (?, ?)';
//   const values = ['image_name', imageBuffer];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Failed to insert image:', err);
//       res.status(500).send('Failed to insert image');
//     } else {
//       res.send('Image inserted successfully');
//     }
//   });
// });
