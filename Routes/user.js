const express = require("express");
const router = express.Router();
const usermodel = require("../Schemas/Users");
const app = express();

app.use(express.json());


// GET REQUEST
router.get("/users", async (req, res) => {
  try {
    const data = await usermodel.find();
    res.json(data); 
  } catch (error) {
    console.error("An error occurred with the GET method while getting the user data:", error);
    res.status(500).json({ error: "Internal Server Error with the GET method while getting the user data" });
  }
});


// POST REQUEST
router.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const data = await usermodel.create(req.body);
    res.json(data);
  } catch (err) {
    console.log("An error is caught with the POST method while posting the user data", err);
    res.status(500).json({ error: "Internal Server Error with the POST method while posting the user data" });
  }
});




module.exports = router;
