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
     TipoPersonaModelo  = () => {};
const traeResultado = require(__basedir + 'src/servicios/funciones/funciones');

TipoPersonaModelo.todos = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;
   
    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.tipoBusqueda == 'caracter' ? data.elementoBusqueda : ""}'; SET @p1 = '${data.tipoBusqueda == 'numero' ? data.elementoBusqueda : 0}'; `
    sql += 'CALL consultaAlumnos(@p0, @p1, @p2, @p3, @p4);';
    sql += 'SELECT @p2 AS `lError`, @p3 AS `cSqlState`, @p4 AS `cError`;';

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
            resultado = traeResultado.leeResultadoProcedimiento(result);
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();
};

TipoPersonaModelo.inserta = (data, callback) => {
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;

    console.log(data.objCtPersona.iIDTipoPersona);

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.objCtPersona.iIDTipoPersona}'; SET @p1 = '${data.objCtPersona.cNombre}'; `;
    sql += `SET @p2 = '${data.objCtPersona.cAPaterno}'; SET @p3 = '${data.objCtPersona.cAMaterno}'; `;
    sql += `SET @p4 = '${data.objCtPersona.lGenero}'; SET @p5 = '${data.objCtPersona.cAPaterno}'; `;
    sql += 'CALL insertactPersona(@p0, @p1, @p2, @p3, @p3, @p5, @p6, @p7, @p8);';
    sql += 'SELECT @p6 AS `lError`, @p7 AS `cSqlState`, @p8 AS `cError`';

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
            resultado = traeResultado.leeResultadoProcedimiento(result);
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();

};
   
module.exports = TipoPersonaModelo;