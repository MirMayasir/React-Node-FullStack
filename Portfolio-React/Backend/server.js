const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Apply CORS middleware
app.use(cors());

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mayasir123',
  database: 'mayasir'
});

// Connect to MySQL database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to fetch data from MySQL database
app.get('/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts'; // Replace 'your_table_name' with your actual table name
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Route to handle form submissions
app.post('/contacts', (req, res) => {
  const { firstName, lastName, email, number, message } = req.body;

  // Validate input data
  if (!firstName || !lastName || !email || !number || !message) {
    res.status(400).json({ error: 'Please fill out all fields.' });
    return;
  }

  const query = 'INSERT INTO contacts (firstName, lastName, email, number, message) VALUES (?, ?, ?, ?, ?)'; // Replace 'your_table_name' with your actual table name
  connection.query(query, [firstName, lastName, email, number, message], (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(201).json({ message: 'Form data received', data: req.body });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
