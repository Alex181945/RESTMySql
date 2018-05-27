/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 23/05/2018
 * Descripcion: Maneja las rutas para la carga de informacion
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const BusquedaControlador = require(__basedir + 'src/controladores/op/busqueda/busquedaC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();

    router
       .post('/busquedas', auth, BusquedaControlador.todos)
       .get('/busquedas/genera-kardex', auth, BusquedaControlador.generaKardex)

module.exports = router;