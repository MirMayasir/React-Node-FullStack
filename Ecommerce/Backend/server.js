const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: 'Mayasir123', // your MySQL password
    database: 'mayasir'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

//order placed
app.post('/orders', (req, res) => {
    const { cartItems, totalPrice, gstAmount, totalWithGST } = req.body;

    if (!cartItems || cartItems.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }

    connection.beginTransaction((err) => {
        if (err) throw err;

        const orderData = {
            total_price: totalPrice,
            gst_amount: gstAmount,
            total_with_gst: totalWithGST,
            order_date: new Date()
        };

        connection.query('INSERT INTO orders SET ?', orderData, (error, results) => {
            if (error) {
                return connection.rollback(() => {
                    throw error;
                });
            }

            const orderId = results.insertId;
            const orderItems = cartItems.map(item => [orderId, item.id]); // Ensure cartItems contains item IDs

            connection.query('INSERT INTO order_items (order_id, item_id) VALUES ?', [orderItems], (error, results) => {
                if (error) {
                    return connection.rollback(() => {
                        throw error;
                    });
                }

                connection.commit((err) => {
                    if (err) {
                        return connection.rollback(() => {
                            throw err;
                        });
                    }
                    res.json({ message: 'Order placed successfully!' });
                });
            });
        });
    });
});

// Endpoint to fetch all orders
app.get('/orders', (req, res) => {
    const query = `
        SELECT
            o.id AS order_id,
            o.total_price,
            o.gst_amount,
            o.total_with_gst,
            o.order_date,
            i.id AS item_id,
            i.title,
            i.description,
            i.price,
            i.image,
            i.rating
        FROM orders o
        JOIN order_items oi ON o.id = oi.order_id
        JOIN items i ON oi.item_id = i.id
        ORDER BY o.id;
    `;

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching orders:', error);
            res.status(500).json({ error: 'Failed to fetch orders' });
        } else {
            res.json(results);
        }
    });
});

//signin

app.get('/', (req, res) => {
    res.send('Hello, World! This is your basic API.');
});

// Handle sign-in form submission
app.post('/users', async (req, res) => {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const query = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';

    db.query(query, [name, email, phone, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('User added successfully');
    });
});

// Endpoint to fetch all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
});

// Handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE name = ?'; // Assuming 'name' is used as the username

    db.query(query, [username], async (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(401).send('User not found');
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send('Invalid password');
        }

        res.status(200).send('Logged in successfully');
    });
});

app.get('/login', (req, res) => {
    const { username, password } = req.query; // Get username and password from query parameters

    const query = 'SELECT * FROM users WHERE name = ?'; // Assuming 'name' is used as the username

    db.query(query, [username], async (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(401).send('User not found');
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send('Invalid password');
        }

        res.status(200).send('Logged in successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
