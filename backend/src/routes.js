//IMPORTS
const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


//Cria rotas da seção
routes.post('/sessions', SessionController.create);


//Cria as rotas das ONGS 
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
[Segments.BODY]: Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  whatsapp: Joi.string().required().min(10).max(11), 
  city: Joi.string().required(),
  uf: Joi.string().required().length(2),
})
}),OngController.create);


// Cria rotas dos perfis
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(), 
  }).unknown()
}), ProfileController.index);

// Cria rotas dos casos
routes.get('/incidents', IncidentController.index);

routes.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object({
    title: Joi.string().required().min(10),
    description: Joi.string().required().min(30),
    value: Joi.number().required()
  })
  }), IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;
