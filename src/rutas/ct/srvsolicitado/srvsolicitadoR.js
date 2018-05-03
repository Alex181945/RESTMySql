/**
 * 
 * Autor: Bogar Chavez
 * Fecha: 19/04/2018
 * Descripcion: Maneja las rutas del catalogo de servicio solicitado.
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 */

'use strict'

const SolicitadoControlador = require(__basedir + 'src/controladores/ct/srvsolicitado/srvsolicitadoC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/srvsolicitado/consulta', auth, SolicitadoControlador.todos)

module.exports = router;