const express = require("express");

const UserController = require('./controllers/UserController')
const ResultController = require('./controllers/ResultController')

const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ MyCreator: 'Gustavo R. Silva' });
})

routes.post('/users', UserController.store);
routes.post('/user/login', UserController.login);
routes.get('/user/:cpf', UserController.findOne);
routes.get('/user/:id/results', UserController.userResults);

routes.get('/results', ResultController.index)

module.exports = routes;