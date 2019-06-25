const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/", postRoutes);
app.use("/api/", userRoutes);

mongoose
  .connect(
    "mongodb+srv://Salma:010elemnop@nodejs-3zjvj.mongodb.net/reddit?retryWrites=true&w=majority"
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
