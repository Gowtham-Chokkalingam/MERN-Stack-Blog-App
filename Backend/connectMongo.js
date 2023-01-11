const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const URI = "mongodb+srv://gowtham:chokkalingam@cluster0.ljikbeg.mongodb.net/Blog-Mern?retryWrites=true&w=majority";

const connectDB = async () => await mongoose.connect(URI);
module.exports = connectDB;
