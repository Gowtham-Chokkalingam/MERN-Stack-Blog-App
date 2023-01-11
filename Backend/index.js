const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./Models/User");
const connectDB = require("./connectMongo");
const bcrypt = require("bcryptjs");
const { json } = require("express");

const app = express();

app.use(cors());

app.use(express.json());

const salt = bcrypt.genSaltSync(10);

//> Register Route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//> Login Route

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userInfo = await User.findOne({ username });
//* Decrypting the pwd and checking match   
  const passwordVerified = bcrypt.compareSync(password, userInfo.password);
  res.json(passwordVerified);
});

app.listen(8080, async () => {
  console.log("Connected to 8080 server");

  //> Connnecting mongoDb via mongoose

  const isConnected = await connectDB();
  if (isConnected) {
    console.log("Mongo DB is Connected succesfully");
  }
});
