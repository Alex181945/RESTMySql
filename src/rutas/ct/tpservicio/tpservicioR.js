/**
 * 
 * Autor: Bogar Chavez
 * Fecha: 19/04/2018
 * Descripcion: Maneja las rutas del catalogo de tipo de servicio
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 */

'use strict'

const ServicioControlador = require(__basedir + 'src/controladores/ct/tpservicio/tpservicioC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/tpservicio/consulta', auth, ServicioControlador.todos)

module.exports = router;