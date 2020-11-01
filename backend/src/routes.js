const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ MyCreator: 'Gustavo R. Silva' });
})


module.exports = routes;
