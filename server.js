/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 25/02/2018
 * Descripcion: Script de inicio servicio
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

/*Directorio Base*/
global.__basedir = __dirname + "/";

//console.log(__basedir);//Directorio base

/*Archivo de inicio*/
var server = require('./src/app');

/*Mensaje para indicar servicio activo*/
console.log("Servicio Iniciado");