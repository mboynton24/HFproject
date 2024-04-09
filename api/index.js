const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// hash user password when stored in database
const salt = bcrypt.genSaltSync(10);



app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

// connect to database
mongoose.connect('mongodb+srv://BobcatDrinkTracker:BobcatDrinkTracker@cluster0.2rbtkhh.mongodb.net/?retryWrites=true&w=majority');


// User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  // User registration endpoint
  app.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // User login endpoint
  app.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'secretkey');
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

    // Error handling middleware
    app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  
  
  // Start the server
  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });