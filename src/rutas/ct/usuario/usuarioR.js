/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 23/02/2018
 * Descripcion: Maneja las rutas de los usuarios
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 'use strict'

 const UsuarioControlador = require(__basedir + 'src/controladores/ct/usuario/usuarioC'),
     express = require('express'),
     auth    = require(__basedir + 'src/middleware/auth'),
     router  = express.Router();
     
     router
       .post('/consultausuarios', auth.isAuth, UsuarioControlador.valida)

 module.exports = router;