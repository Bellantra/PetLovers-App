require("dotenv").config();
const express = require('express')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD } = process.env;

// -----------Connection with mongodbAtlas -----------
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sqvps.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true});
const db = mongoose.connection;
db.on("error",(err)=>{
  console.error(err)
})
db.once("open", () => {
  console.log("Connection successfully")
})

//-------------------- Schema ----------------------------
const Schema = mongoose.Schema;
const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
});
const User = mongoose.model('User', usersSchema);
//----------------Server configuration -------------------
const app = express();
app.use(express.json());
app.use(cors());
app.name = "API";


app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;

