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

 var claseConexion = require(__basedir + 'db/conexion'),
 	 UsuarioModelo  = () => {};     

 UsuarioModelo.todos = () => {};

 UsuarioModelo.uno = () => {};

 UsuarioModelo.inserta = (data, callback) => {};

 UsuarioModelo.actualiza = () => {};

 UsuarioModelo.borra = () => {};

 UsuarioModelo.valida = (data, callback) => {
     /*Instancia de clase conexion*/
     let conexion = new claseConexion();

     /*Ejecucion de metodo conectar*/
     let consulta = conexion.conectar();

     /*Procedimiento MySql*/
     consulta.query(`CALL consultaUsuario(${data.cUsuario}, ${data.cContrasena}, ${data.lError}, ${data.cSqlState}, ${data.cError})`, callback);

     /*Ejecucion de metodo desconectar*/
     conexion.desconectar();
 };

 module.exports = UsuarioModelo;