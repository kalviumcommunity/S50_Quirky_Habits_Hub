const mongoose = require("mongoose");
require('dotenv').config();
const URI = process.env.URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected successfully");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
