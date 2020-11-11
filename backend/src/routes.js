const express = require("express");

const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ MyCreator: 'Gustavo R. Silva' });
})

routes.post('/users', UserController.store);
routes.post('/user/login', UserController.login);

module.exports = routes;