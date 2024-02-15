const express = require ('express');
const app = express();
const User = require('/models/User');
const mongoose = require('mongoose');
app.use(express.json());


app.get('/register', (req, res) => {
    res.json('working')
})


app.listen(4000);