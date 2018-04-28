/**
 * 
 * Autor: Bogar Chavez 
 * Fecha: 23/04/2018
 * Descripcion: Modelo Servicio solicitado
 * REST
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 */

'use strict'

const claseConexion = require(__basedir + 'db/conexion'),
     SolicitadoModelo  = () => {};     

     SolicitadoModelo.todos = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data}'; `
    sql += 'CALL consultasrvsolicitados(@p0, @p1, @p2, @p3);';/*Hace Falta cambio ****/
    sql += 'SELECT @p1 AS `lError`, @p2 AS `cSqlState`, @p3 AS `cError`;'; 

    /*Llamado de un query haciendo uso de una funcion*/
    consulta.query(sql, function(error, result, fields){

        /*Variable que guarda el resultado*/
        let resultado;

        /*Llenado del resultado*/
        if(error){
            resultado = {
                error: error
            }    
        } else{
            if(result.length > 4){
                resultado = {
                    validacion: result[4],
                    datos: result[2]
                }
            } else if(result.length == 4){
                resultado = {
                    validacion: result[3],
                    datos: result[1]
                }
            } else{
                resultado = {
                    validacion: result[3],
                    datos: '',
                }
            }
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();

};

SolicitadoModelo.uno = () => {};

SolicitadoModelo.inserta = (data, callback) => {};

SolicitadoModelo.actualiza = () => {};

SolicitadoModelo.borra = () => {};

module.exports = SolicitadoModelo;