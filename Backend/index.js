const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./Models/User");
const connectDB = require("./connectMongo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

const app = express();

//> if we use credentials in front end we need to put credentials and origin
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());
app.use(cookieParser());

const salt = bcrypt.genSaltSync(10);
const jwtSecret = "gowtham";

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
  console.log('password:', password)

  const userInfo = await User.findOne({ username });
  //* Decrypting the pwd and checking match
  const passwordVerified = bcrypt.compareSync(password, userInfo.password);

  if (passwordVerified) {
    const token = jwt.sign({ username, id: userInfo._id }, jwtSecret, {});

    // > using cookie
    res.cookie("token", token).json({ id: userInfo._id, username });
  } else {
    return res.status(400).send("Invalid Credentials");
  }
});

//> get User Profile

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, (err, info) => {
    if (err) {
      throw err;
    }
    res.json(info);
  });
});

//> Logout

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok logout Success");
});

app.listen(8080, async () => {
  console.log("Connected to 8080 server");

  //> Connnecting mongoDb via mongoose

  const isConnected = await connectDB();
  if (isConnected) {
    console.log("Mongo DB is Connected succesfully");
  }
});
