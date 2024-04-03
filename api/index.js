const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// hash user password when stored in database
const salt = bcrypt.genSaltSync(10);



app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });


mongoose.connect('mongodb+srv://BobcatDrinkTracker:BobcatDrinkTracker@cluster0.2rbtkhh.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const userDoc = await User.create({
            email,
            username,
            password:bcrypt.hashSync(password, salt)
        });
        res.status(200).json(userDoc); // Set status code to 200 explicitly
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error -provided from mongoose
            if (error.keyPattern && error.keyValue) {
                const duplicateKey = Object.keys(error.keyPattern)[0];
                res.status(400).json({ error: `The ${duplicateKey} '${error.keyValue[duplicateKey]}' is already in use.` });
            } else {
                res.status(500).json({ error: 'Duplicate key error, but unable to determine the duplicate key.' });
            }
        } else {
            // Other errors -
            res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const userDoc = await User.findOne({ username });
      if (userDoc) {
        const passOk = await bcrypt.compare(password, userDoc.password);
        if (passOk) {
          // Login successful
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(400).json({ error: 'Incorrect password' });
        }
      } else {
        res.status(400).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  });
  

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
