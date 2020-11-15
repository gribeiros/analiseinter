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

routes.post('/list/mm1', ResultController.saveMmm1)
routes.post('/list/mm1b', ResultController.saveMm1b)
routes.post('/list/mm1k', ResultController.saveMm1k)
routes.post('/list/minfinitosk', ResultController.saveMinfinitok)
routes.post('/list/minfinitos', ResultController.saveMminifinitos)
routes.post('/list/mmm', ResultController.saveMmm)
routes.post('/list/mmmb', ResultController.saveMmmb)

routes.get('/results/:id/list', ResultController.findByList);
routes.get('/results/:id', ResultController.index)

module.exports = routes;