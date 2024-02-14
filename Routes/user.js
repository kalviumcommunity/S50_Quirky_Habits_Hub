const express = require("express");
const router = express.Router();
const usermodel = require("../Schemas/Users");
const app = express();

app.use(express.json());

router.get("/users", async (req, res) => {
  try {
    const data = await usermodel.find();
    res.json(data);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const data = await usermodel.create(req.body);
    res.json(data);
  } catch (err) {
    console.log("An error is caught", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
