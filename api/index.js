const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


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
    phoneNumber: String,
    username: String,
    bio: String,
    photoUrl: String,
    coverUrl: String,
    
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

  // Configure multer for photo upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
};

// Update profile route - allows is called when user wants to upload photos for simplicicty
app.put('/settings', verifyToken, upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), async (req, res) => {
  try {
    const { name, email, phoneNumber, username, bio } = req.body;
    const photo = req.files['photo']?.[0];
    const cover = req.files['cover']?.[0];

    const userId = req.userId;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        phoneNumber,
        username,
        bio,
        ...(photo && { photoUrl: photo.filename }),
        ...(cover && { coverUrl: cover.filename }),
      },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get profile route
app.get('/profile', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;

    // Fetch user profile from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// handles a user logging out - takes them back to landing page
app.post('/logout', (req, res) => {
  // Clear the user's session / token
  res.clearCookie('token');

  res.status(200).json({ message: 'Logged out successfully' });
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