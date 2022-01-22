const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers');

//routes.get('/', Usuario.index);

routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete)

module.exports = routes;


