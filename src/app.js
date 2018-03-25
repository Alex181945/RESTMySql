/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 14/11/2017
 * Descripcion: Maneja express
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 /*Dependencias requeridas*/
 const bodyParser = require('body-parser');
 const express    = require('express');
 const restFul    = require('express-method-override')('_method');
 const morgan     = require('morgan');
 const app        = express();

 /*Configuraciones*/
 const port = (process.env.PORT || 3000);

 /*Rutas*/
 const usuario = require('./rutas/ct/usuario/usuarioR');
 const login   = require('./rutas/sg/login/loginR');
 const defecto = require('./rutas/default/defaultR');

 console.log(port);

 app
    /*Middlewares*/
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(usuario)
    .use(login)
    .use(defecto)
    .listen(port);

module.exports = app;