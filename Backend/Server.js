/// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const mysql2 = require('mysql2');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
// Add any other middleware here as needed

// Routes
app.get('/', (req, res) => {
  res.send('It fu#n worked!');
});
// Define your API routes here

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
