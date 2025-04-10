const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

require("dotenv").config();

const api = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan('tiny'))

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: "1",
    name: "My macbook 1",
    image: "some usrl",
  };
  res.send(products);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
