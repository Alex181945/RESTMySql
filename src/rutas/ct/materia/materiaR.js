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

const MateriaControlador = require(__basedir + 'src/controladores/ct/materia/materiaC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/materia/consulta', auth, MateriaControlador.todos)
      .post('/materia/inserta', auth, MateriaControlador.inserta)
      .get('/materia/consulta/uno', auth, MateriaControlador.uno)
      .put('/materia/actualiza', auth, MateriaControlador.actualiza)
      .delete('/materia/borra', auth, MateriaControlador.borra)

module.exports = router;