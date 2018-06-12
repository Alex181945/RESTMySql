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

    let obj = JSON.parse(data.objCtPersona);
    let obj2 = JSON.parse(data.arrayCtPersona);
    var contador = Object.keys(obj2).length;

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${obj.iIDTipoPersona}'; SET @p1 = '${obj.cNombre}'; `;
    sql += `SET @p2 = '${obj.cAPaterno}'; SET @p3 = '${obj.cAMaterno}'; `;
    sql += `SET @p4 = '${obj.lGenero}'; SET @p5 = '${obj.dtFechaNac}'; `;
    sql += `SET @p6 = '${data.arrayCtPersona}'; SET @p7 = '${contador}';`;
    sql += 'CALL opInsertaPersona(@p0, @p1, @p2, @p3, @p3, @p5, @p6, @p7, @p8, @p9, @p10, @p11);';
    sql += 'SELECT @p8 AS `iPersona`, @p9 AS `lError`, @p10 AS `cSqlState`, @p11 AS `cError`';

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