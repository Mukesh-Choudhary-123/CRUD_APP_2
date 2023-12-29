const express = require("express");
const app = express();
const mysql = require("mysql2");
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const port = 8080;

app.get("/", (req, res) => {
  res.send("Server start");
});

//middleware
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log("listening at port 8080");
});
