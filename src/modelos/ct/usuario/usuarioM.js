/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 06/12/2017
 * Descripcion: Modelo Usuarios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 'use strict'

 var conexion = require(__basedir + 'db/conexion'),
 	 UsuarioModelo  = () => {};     

 UsuarioModelo.todos = () => {};

 UsuarioModelo.uno = () => {};

 UsuarioModelo.inserta = () => {};

 UsuarioModelo.actualiza = () => {};

 UsuarioModelo.borra = () => {};

 UsuarioModelo.valida = (cb) => {
     conexion.query('CALL consultaUsuario()', cb);
 };

 module.exports = UsuarioModelo;