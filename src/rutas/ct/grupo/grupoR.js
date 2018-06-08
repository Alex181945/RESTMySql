/**
 * 
 * Autor: Bogar Chavez
 * Fecha: 24/05/2018
 * Descripcion: Maneja las rutas del catalogo de grupo.
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 */

'use strict'

const GrupoControlador = require(__basedir + 'src/controladores/ct/grupo/grupoC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/srvsolicitado/consulta', auth, GrupoControlador.todos)

module.exports = router;