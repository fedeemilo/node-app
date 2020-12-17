const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>NODE JS APP</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
