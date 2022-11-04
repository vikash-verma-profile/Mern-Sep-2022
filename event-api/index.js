const express = require("express");
const cors = require("cors");
const bodyParser=require('body-parser');

const api = require("./routes/api");
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api", api);

app.listen(port, function () {
  console.log("Server is running" + port);
});
