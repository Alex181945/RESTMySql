/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 14/04/2018
 * Descripcion: Maneja las rutas del catalogo de carrera
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const CarreraControlador = require(__basedir + 'src/controladores/ct/carrera/carreraC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/carrera/consulta', auth, CarreraControlador.todos)
      .post('/carrera/inserta', auth, CarreraControlador.inserta)
      .get('/carrera/consulta/uno', auth, CarreraControlador.uno)
      .put('/carrera/actualiza', auth, CarreraControlador.actualiza)
      .delete('/carrera/borra', auth, CarreraControlador.borra)

module.exports = router;