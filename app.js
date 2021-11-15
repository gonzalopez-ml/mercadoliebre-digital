const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath)); //le dice a express que public es un recurso estatico

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post("/login", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
  console.log("Servidor corriendo en puerto 3000");
});
