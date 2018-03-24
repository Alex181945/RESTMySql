/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 05/03/2018
 * Descripcion: Maneja las rutas para validacion del usuario
 * al iniciar sesion
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

var LoginControlador = require(__basedir + 'src/controladores/sg/login/loginC'),
    express = require('express'),
    router  = express.Router();

    router
       .post('/validausuario', LoginControlador.valida)

module.exports = router;