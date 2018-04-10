/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 07/04/2018
 * Descripcion: Maneja las rutas para la carga de informacion
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const CargaControlador = require(__basedir + 'src/controladores/md/cargaC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();

    router
       .post('/carga/modulo', auth, CargaControlador.todos)

module.exports = router;