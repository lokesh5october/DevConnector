const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const app = express();
//DB config
const db = require("./config/keys").mongoURI;
//connect to mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Welcome fellas!!"));
//Routes
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/profile", profile);
const port = process.env.port || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
