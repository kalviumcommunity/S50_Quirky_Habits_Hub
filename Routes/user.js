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
    console.log(error, "An error identified");
  }
});

router.post("/users", async (req, res) => {
  console.log(req.body);
  const data = await usermodel.create(req.body);

  res.json(data);
});

module.exports = router;
