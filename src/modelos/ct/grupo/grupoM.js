/**
 * 
 * Autor: Bogar Chavez 
 * Fecha: 24/05/2018
 * Descripcion: Modelo Servicio solicitado
 * REST
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 */

'use strict'

const claseConexion = require(__basedir + 'db/conexion'),
     GrupoModelo  = () => {};
const traeResultado = require(__basedir + 'src/servicios/funciones/funciones');    

    GrupoModelo.todos = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;

    /*Procedimiento MySql*/
    let sql = 'CALL consultaGrupos(@p1, @p2, @p3);';
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
            resultado = traeResultado.leeResultadoProcedimiento(result);
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();

};

GrupoModelo.uno = (data, callback) => {

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.iTipoConsulta}'; `;
    sql += `SET @p1 = '${data.iGrupo}'; `;
    sql += 'CALL consultaopGrupo(@p0, @p1, @p2, @p3, @p4);';
    sql += 'SELECT @p2 AS `lError`, @p3 AS `cSqlState`, @p4 AS `cError`;';

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

GrupoModelo.inserta = (data, callback) => {};

GrupoModelo.actualiza = () => {};

GrupoModelo.borra = () => {};

module.exports = GrupoModelo;