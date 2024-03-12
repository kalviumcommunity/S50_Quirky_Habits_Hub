const express = require("express");
const router = express.Router();
const usermodel = require("../Schemas/Users");
const Joi = require('joi');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());


// Destructure

const generateToken = ({ username, name, password, phone_number, email }) => {
  return jwt.sign( { username, name, phone_number, email, password } , process.env.JWT_SECRET, { expiresIn: "1h", });
};


// GET REQUEST
router.get("/", async (req, res) => {
  try {
    const data = await usermodel.find();
    res.json(data);
  } catch (error) {
    console.error("An error occurred with the GET method while getting the user data:", error);
    res.status(500).json({
      error: "Internal Server Error with the GET method while getting the user data",
    });
  }
});


// GET REQUEST ACCORDING ID
router.get("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const userData = await usermodel.findById(userID);

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(userData);
  } catch (error) {
    console.error("An error occurred while getting the user details:", error);
    res.status(500).json({
      error: "Internal Server Error with the GET method of getting the user details",
    });
  }
});




// POST REQUEST with Joi Validation
const createUserSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone_number: Joi.string().required(),
});

function validateCreateUser(req, res, next) {
  console.log(req.body)
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  next();
}


router.post("/", validateCreateUser, async (req, res) => {
  try {
    const data = await usermodel.create(req.body);
    const token = generateToken(data);

    console.log("Token",token)
    console.log("Data",data)

    res.status(201).json({ user: data, token: token });
  } catch (err) {
    console.log("An error is caught with the POST method while posting the user data", err);
    res.status(500).json({
      error: "Internal Server Error with the POST method while posting the user data",
    });
  }
});



// PUT REQUEST with Joi Validation
const updateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone_number: Joi.string().required(),
});

function validateUpdateUser(req, res, next) {
  const { error } = updateUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

router.put("/:id", validateUpdateUser, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await usermodel.findByIdAndUpdate(
      id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phone_number: req.body.phone_number,
        },
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("An error occurred while updating the user:", error);
    res.status(500).json({
      error: "Internal Server Error with the PUT method of updating the user",
    });
  }
});

// PATCH REQUEST with Joi Validation
const updatePartialUserSchema = Joi.object({
  username: Joi.string(),
  name: Joi.string(),
  email: Joi.string().email(),
  phone_number: Joi.string(),
});

function validateUpdatePartialUser(req, res, next) {
  const { error } = updatePartialUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

router.patch("/:id", validateUpdatePartialUser, async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)

    const updateFields = {};
    if (req.body.name) {
      updateFields.name = req.body.name;
    }
    if (req.body.username) {
      updateFields.username = req.body.username;
    }
    if (req.body.email) {
      updateFields.email = req.body.email;
    }
    if (req.body.password) {
      updateFields.password = req.body.password;
    }
    if (req.body.phone_number) {
      updateFields.phone_number = req.body.phone_number;
    }

    const updatedData = await usermodel.findByIdAndUpdate(id, updateFields,{new: true});
    console.log("üpdated",updatedData)

    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("An error occurred while updating the user:", error);
    res.status(500).json({
      error: "Internal Server Error with the PATCH method of updating the user",
    });
  }
});

// DELETE ACCORDING ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await usermodel.findByIdAndDelete(id);
  res.status(201).json({
    Message: "Deleted Successfully",
  });
});


module.exports = router;
