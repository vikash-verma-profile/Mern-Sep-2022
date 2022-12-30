const express = require("express");
const { Routes } = require("./routes");
const { setupLogging } = require("./logging");
const { setupProxies } = require("./proxy");
const { setupAuth } = require("./auth");
const app = express();
const port = 3000;

setupLogging(app);
setupAuth(app, Routes);
setupProxies(app, Routes);
app.get("/hello", (req, res) => {
  return res.send("Hello World");
});

app.listen(port, () => {
  console.log(`example app is running`);
});
