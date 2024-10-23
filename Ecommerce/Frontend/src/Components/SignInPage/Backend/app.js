const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Mayasir123',
   database: 'mayasir'
});

db.connect(err => {
    if(err){
        throw err;
    }
    console.log("MySQl connected");
});

app.post('/users', async (req,res) => {
        const {name, email, phone, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO USERS (name, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, phone, hashedPassword] , (err, result) => {
            if(err){
                return res.status(500).send(err);
            }
            res.status(200).send('user added successfully');
        });
});

app.get('/users', (req, res) => {
        const query = 'SELECT * FROM USERS';
        db.query(query, (err, result) => {
            if(err){
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
});


app.post('/login', async (req,res) =>{
    const {username, password} = req.body;
    const query = 'SELECT * FROM USERS WHERE name = ?';
    db.query(query, [username], async (err, result) => {
        if(err){
            return res.status(500).send(err);
        }

        if(result.length === 0){
            return res.status(500).send('invalid user');
        }

        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).send("wrong password");
        }
        res.status(200).send("logged in");
    })
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});