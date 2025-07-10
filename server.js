const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
