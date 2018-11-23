/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 14/04/2018
 * Descripcion: Maneja las rutas del catalogo de periodo
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const PeriodoControlador = require(__basedir + 'src/controladores/ct/periodo/periodoC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/periodo/consulta', auth, PeriodoControlador.todos)
      .get('/periodo/consulta-sin-carrera', auth, PeriodoControlador.todosSinCarrera)
      .post('/periodo/inserta', auth, PeriodoControlador.inserta)
      .get('/periodo/consulta/uno', auth, PeriodoControlador.uno)
      .put('/periodo/actualiza', auth, PeriodoControlador.actualiza)
      .delete('/periodo/borra', auth, PeriodoControlador.borra)

module.exports = router;