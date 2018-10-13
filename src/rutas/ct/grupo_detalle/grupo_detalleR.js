/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 14/04/2018
 * Descripcion: Maneja las rutas del catalogo de grupo-detalle
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const GrupoDetalleControlador = require(__basedir + 'src/controladores/ct/grupo_detalle/grupo_detalleC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/grupo-detalle/consulta', auth, GrupoDetalleControlador.todos)
      .post('/grupo-detalle/inserta', auth, GrupoDetalleControlador.inserta)
      .get('/grupo-detalle/consulta/uno', auth, GrupoDetalleControlador.uno)
      .put('/grupo-detalle/actualiza', auth, GrupoDetalleControlador.actualiza)
      .delete('/grupo-detalle/borra', auth, GrupoDetalleControlador.borra)

module.exports = router;