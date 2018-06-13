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

const TipoPersonaControlador = require(__basedir + 'src/controladores/op/tipo-persona/tipoPersonaC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();

    router
       .post('/tipo-persona/inserta', auth, TipoPersonaControlador.inserta)
       .post('/tipo-persona/consulta', auth, TipoPersonaControlador.lista)

module.exports = router;