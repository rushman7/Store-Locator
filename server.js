const path  = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

const app = express();

// middleware
app.use(express.json());

app.use(cors());

// route
app.use('/api/v1/stores', require('./routes/stores'))

const PORT = process.env.PORT || 5000;

app.listen(
  PORT, () => 
  console.log(`${process.env.NODE_ENV} > Server running on port ${PORT}`)
)