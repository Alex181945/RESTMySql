/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 23/03/2018
 * Descripcion: Modelo Usuarios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const claseConexion = require(__basedir + 'db/conexion'),
    servicio = require(__basedir + 'src/servicios/seg/token'),
     LoginModelo  = () => {};


LoginModelo.valida = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;
   
    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.cUsuario}'; SET @p1 = '${data.cContrasena}'; `
    sql += 'CALL validaUsuario(@p0, @p1, @p2, @p3, @p4);';
    sql += 'SELECT @p2 AS `lError`, @p3 AS `cSqlState`, @p4 AS `cError`;';

    /*Llamado de un query simple*/
    //consulta.query(sql, callback);

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
            if(result[4].lError != 0){
                resultado = {
                    validacion: result[4],
                    datos: result[2],
                    token: servicio.createToken(result[2].cUsuario)
                }
            } else{
                resultado = {
                    validacion: result[4],
                    datos: result[2],
                }
            }
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();
};
   
module.exports = LoginModelo;