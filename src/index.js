require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => res.send("Get Method Teraru"));
app.post("/", (req, res) => res.send("Post Method"));

app.listen(port, () => console.log("Server ready on port 3000."));

module.exports = app;
