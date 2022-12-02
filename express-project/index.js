const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const { response } = require("express");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("home", { title: "Search" });
});

app.get("/search", async (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery) {
    res.redirect(302, "/");
    return;
  }

  const results = await searchNews(searchQuery);
  console.log(searchQuery);
  console.log(results);
//   res.render("search", {
//     title: `Search results for ${searchQuery}`,
//     searchResults: results,
//     searchQuery,
//   });
res.status(200).json(results);
});

async function searchNews(query) {
//   const response = await axios.get(
//     'https://hn.algolia.com/api/v1/search?query='+query.trim()+"&tags=story&hitsPerPage=90"
//   );
 await axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>{console.log(response.data);});
//console.log(response.data);
//return response.data;
}
app.get("/home", (req, res) => {
  res.send("Helllo, This is home router");
});
app.get("/login", (req, res) => {
  res.send("Helllo, This is login router");
});
app.get("/profile", (req, res) => {
  res.send("Helllo, This is profile router");
});

app.listen(process.env.port || 3000);
console.log("server is running at 3000");
