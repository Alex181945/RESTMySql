/**
 * 
 * Autor: Bogar Chavez
 * Fecha: 23/04/2018
 * Descripcion: Maneja las rutas del catalogo de tipo de solicitud
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 * 
 */

'use strict'

const SolicitudControlador = require(__basedir + 'src/controladores/ct/fmsolicitud/fmsolicitudC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/fmsolicitud/consulta', auth, SolicitudControlador.todos)

module.exports = router;