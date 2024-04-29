const express = require("express");
const router = express.Router();
const postmodel = require("../Schemas/Posts");
const Joi = require('joi');

// Joi schema for post validation
const postSchema = Joi.object({
  created_by : Joi.string().required(),
  username : Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  link: Joi.string(),
  reactions: Joi.number().default(0),
});

// Validation middleware
function validatePost(req, res, next) {
  const { error } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

// GET
router.get("/", async (req, res) => {
  try {
    const data = await postmodel.find();
    res.json(data);
  } catch (error) {
    console.error("An error occurred while getting the post details:", error);
    res.status(500).json({
      error: "Internal Server Error with the GET method of getting the post details",
    });
  }
});

// GET ACCORDING TO THE ID
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postmodel.findById(postId);
    res.json(post);
  } catch (error) {
    console.error("An error occurred while getting the post details:", error);
    res.status(500).json({
      error: "Internal Server Error with the GET method of getting the post details",
    });
  }
});

// POST
router.post("/", validatePost, async (req, res) => {
  try {
    const data = await postmodel.create(req.body);
    res.json(data);
  } catch (err) {
    console.log("An error is caught while posting the post details", err);
    res.status(500).json({
      error: "Internal Server Error with the POST method of submitting the post details",
    });
  }
});

router.get('/getmyposts/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const posts = await postmodel.find({ created_by: userId });
    res.json(posts);
  } catch (err) {-
    res.status(500).json({ message: err.message });
  }
})


router.patch("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postmodel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    post.reactions += 1;
    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (err) {
    console.log("An error occurred while updating the post details", err);
    res.status(500).json({
      error: "Internal Server Error with the PATCH method of updating the post details",
    });
  }
});

// PUT
router.put("/:id", validatePost, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await postmodel.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          link: req.body.link,
        },
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("An error occurred while updating the post:", error);
    res.status(500).json({
      error: "Internal Server Error with the PUT method while updating the post",
    });
  }
});

// PATCH
router.patch("/:id", validatePost, async (req, res) => {
  try {
    const id = req.params.id;

    const updateFields = {};
    if (req.body.title) {
      updateFields.title = req.body.title;
    }
    if (req.body.content) {
      updateFields.content = req.body.content;
    }
    if (req.body.link) {
      updateFields.link = req.body.link;
    }

    const updatedData = await postmodel.findByIdAndUpdate(
      id,
      {
        $set: updateFields,
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("An error occurred while updating the post using PATCH:", error);
    res.status(500).json({
      error: "Internal Server Error with the PATCH method of updating the post",
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await postmodel.findByIdAndDelete(id);
    res.status(201).json({
      Message: "Deleted Successfully",
    });
  } catch (err) {
    console.log("An error occurred in the deleting process of post details");
    res.status(500).json({
      error: "Internal Server error with the deleting process of the post details",
    });
  }
});

module.exports = router;
