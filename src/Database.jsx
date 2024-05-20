const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'your-database-host', // e.g., 'localhost' or an IP address
  user: 'your-database-username',
  password: 'your-database-password',
  database: 'your-database-name',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query to check if the user exists
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (error, results) => {
    if (error) {
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
