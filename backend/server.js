const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const con = require("./db/database");
const dotenv = require("dotenv");
const router = require("./router/routes");
const app = express();

// Load Environmet
dotenv.config({ path: "./config.env" });

// connect to database
con.connect();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//API
app.use("/api/", router);

// PORT
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("App is running on port 8080");
});
