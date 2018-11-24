/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 15/04/2018
 * Descripcion: Modelo Edificios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const claseConexion = require(__basedir + 'db/conexion'),
     MateriaModelo  = () => {};
const traeResultado = require(__basedir + 'src/servicios/funciones/funciones');     

MateriaModelo.todos = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data}'; `
    sql += 'CALL consultactMaterias(@p0, @p1, @p2, @p3);';
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

MateriaModelo.uno = (data, callback) => {

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data}'; `;
    sql += 'CALL consultaEdificio(@p0, @p1, @p2, @p3);';
    sql += 'SELECT @p1 AS `lError`, @p2 AS `cSqlState`, @p3 AS `cError`;';

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

MateriaModelo.inserta = (data, callback) => {

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Conversion de string a json*/
    let obj = JSON.parse(data);

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${obj.cMateria}'; SET @p1 = '${obj.cClaveSEP}'; `;
    sql += `SET @p2 = '${obj.iCarrera}'; SET @p3 = '${obj.iPeriodo}'; `;
    sql += 'CALL insertactMateria(@p0, @p1, @p2, @p3, @p4, @p5, @p6);';
    sql += 'SELECT @p4 AS `lError`, @p5 AS `cSqlState`, @p6 AS `cError`;';

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

MateriaModelo.actualiza = (data, callback) => {

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Conversion de string a json*/
    let obj = JSON.parse(data);

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${obj.iIDEdificio}'; `; 
    sql += `SET @p1 = '${obj.cEdificio}'; SET @p2 = '${obj.cAbreviatura}'; `;
    sql += `SET @p3 = '${obj.iPisos}';    SET @p4 = '${obj.cPisoEsp}'; `;
    sql += `SET @p5 = '${obj.cCalle}';    SET @p6 = '${obj.cNumExt}'; `;
    sql += `SET @p7 = '${obj.cColonia}';  SET @p8 = '${obj.cMunicipio}'; `;
    sql += `SET @p9 = '${obj.cEstado}';   SET @p10 = '${obj.cCP}'; `;
    sql += `SET @p11 = '${obj.lActivo}';  SET @p12 = '${obj.cUsuario}'; `;
    sql += 'CALL actualizaEdificio(@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15);';
    sql += 'SELECT @p13 AS `lError`, @p14 AS `cSqlState`, @p15 AS `cError`;';

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

MateriaModelo.borra = (data, callback) => {

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.iIDEdificio}'; SET @p1 = '${data.cUsuario}'; `; 
    sql += 'CALL borraEdificio(@p0, @p1, @p2, @p3, @p4);';
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

module.exports = MateriaModelo;