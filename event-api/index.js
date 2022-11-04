const express = require("express");
const cors = require("cors");

const api = require("./routes/api");
const port = 3000;

const app = express();
app.use(cors());

app.use("/api", api);

app.listen(port, function () {
  console.log("Server is running" + port);
});
