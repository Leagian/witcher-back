const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const serverPort = 4242;

const app = express();

const dataingredients = require("./ingredients.json");
const datapotions = require("./potions.json");

app.use(morgan("tiny"));
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("une nouvelle requête est arrivée dans l’API !  ");
  res.json({ dataingredients, datapotions });
});

app.listen(serverPort, () => console.log("http://localhost:4242"));
