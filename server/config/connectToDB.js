// Load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to database');
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = connectToDB;
