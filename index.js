const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8081;

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("test route!");
});

app.get("/", (req, res) => {
  console.log(`hi on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});