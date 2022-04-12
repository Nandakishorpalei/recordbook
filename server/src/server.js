const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json());

const userController = require("./controllers/userController");
app.use("/users", userController);

const collegeContoller = require("./controllers/collegeController");
app.use("/colleges", collegeContoller);


module.exports = app;


