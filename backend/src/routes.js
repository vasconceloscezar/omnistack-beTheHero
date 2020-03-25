//IMPORTS
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


//Cria rotas da seção
routes.post('/sessions', SessionController.create);


//Cria as rotas das ONGS 
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


// Cria rotas dos perfis
routes.get('/profile', ProfileController.index);

// Cria rotas dos casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;
