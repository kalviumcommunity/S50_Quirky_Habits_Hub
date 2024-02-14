const express = require("express");
const router = express.Router();
const postmodel = require("../Schemas/Posts");
const app = express();

app.use(express.json());

router.get("/posts", async (req, res) => {
  try {
    const data = await postmodel.find();
    res.json(data);
  } catch (error) {
    console.error("An error occurred while getting the post details:", error);
    res.status(500).json({ error: "Internal Server Error with the GET method of getting the post details" });
  }
});

router.post("/posts", async (req, res) => {
  try {
    console.log(req.body);
    const data = await postmodel.create(req.body);
    res.json(data);
  } catch (err) {
    console.log("An error is caught while posting the post details", err);
    res.status(500).json({ error: "Internal Server Error with the POST method of submitting the post details " });
  }
});

module.exports = router;
