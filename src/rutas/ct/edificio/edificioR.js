/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 14/04/2018
 * Descripcion: Maneja las rutas del catalogo de edificios
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const EdificioControlador = require(__basedir + 'src/controladores/ct/edificio/edificioC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/edificios/consulta', auth, EdificioControlador.todos)

module.exports = router;