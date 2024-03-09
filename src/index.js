const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Get Method"));
app.post("/", (req, res) => res.send("Post Method"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
