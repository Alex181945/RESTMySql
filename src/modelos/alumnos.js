/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 06/12/2017
 * Descripcion: Modelo alumnos
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 'use strict'

 var conexion = require('/db/conexion'),
 Alumno   = () => {};     

 Alumno.todos = () => {};

 Alumno.inserta = () => {};

 Alumno.uno = () => {};

 Alumno.actualiza = () => {};

 Alumno.borra = () => {};

 Alumno.valida = (cb) => {
     conexion.query('CALL consultaUsuario()');
 };

 module.exports = Alumno;