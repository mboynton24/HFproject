const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://BobcatDrinkTracker:BobcatDrinkTracker@cluster0.2rbtkhh.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const userDoc = await User.create({
            email,
            username,
            password
        });
        res.status(200).json(userDoc); // Set status code to 200 explicitly
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            if (error.keyPattern && error.keyValue) {
                const duplicateKey = Object.keys(error.keyPattern)[0];
                res.status(400).json({ error: `The ${duplicateKey} '${error.keyValue[duplicateKey]}' is already in use.` });
            } else {
                res.status(500).json({ error: 'Duplicate key error, but unable to determine the duplicate key.' });
            }
        } else {
            // Other errors
            res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
