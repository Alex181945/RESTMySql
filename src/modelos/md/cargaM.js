/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 07/04/2018
 * Descripcion: Modelo Carga Datos 
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const claseConexion = require(__basedir + 'db/conexion'),
     CargaModelo  = () => {};


CargaModelo.todos = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;
   
    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.iTipoConsulta}'; SET @p1 = '${data.iIDPerfil}'; `
    sql += 'CALL consultaModulosProgramasPerfil(@p0, @p1, @p2, @p3, @p4);';
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
            let validacion = null;
            let datos = null;

            result.forEach(element => {
                if(Array.isArray(element)){

                    if(element.length != 1){
                        datos = element;
                    } else{
                        validacion = element;
                    }
                }
            });

            resultado = {
                validacion: validacion,
                    datos: datos
            }
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();
};
   
module.exports = CargaModelo;