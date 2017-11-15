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
 app.set('port', process.env.PORT || 3000);

 /*Middlewares*/
 app.use(morgan('dev'));
 app.use(bodyParser.json());

 /*Rutas*/
 require('./rutas/alumnos')(app);

 app.listen(app.get('port'), () => {
     console.log('servidor en el puerto 3000');
 });