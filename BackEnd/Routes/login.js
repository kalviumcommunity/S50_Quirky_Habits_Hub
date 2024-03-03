const express = require("express");
const router = express.Router();
const usermodel = require("../Schemas/Users");
const Joi = require('joi');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());



router.get("/:id", async (req, res) => {
    try {
      const userID = req.params.id;
      const userData = await usermodel.findById(userID);
  
      if (!userData) {
        return res.status(404).json({ error: "User not found" });
      }

      // Generate JWT token
      const token = jwt.sign({ userData }, 'loginsecret', { expiresIn: '1h' });

      res.json({
        userData,
        token,
      });
    } catch (error) {
      console.error("An error occurred while getting the user details:", error);
      res.status(500).json({
        error: "Internal Server Error with the GET method of getting the user details",
      });
    }
  });
