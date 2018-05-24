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
     TicketModelo  = () => {};
const traeResultado = require(__basedir + 'src/servicios/funciones/funciones');


TicketModelo.todos = (data, callback) => {
    
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
            resultado = traeResultado.leeResultadoProcedimiento(result);
        }
        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();
};

TicketModelo.inserta = (data, callback) =>{

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();
    
    /*Conversion de string a json*/
    let obj = JSON.parse(data.objTicket);
   
    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${obj.iIDEstado}'; SET @p1 = '${obj.cNumInventario}'; `
    sql += `SET @p2 = '${obj.cResguardante}'; SET @p3 = '${obj.cUsuarioEquipo}'; `
    sql += `SET @p4 = '${obj.cExtension}'; SET @p5 = '${obj.iIDEdificio}'; `
    sql += `SET @p6 = '${obj.cPiso}'; SET @p7 = '${obj.cOficina}'; `
    sql += `SET @p8 = '${obj.iIDTipoServicio}'; SET @p9 = '${obj.cUsuarioReporta}'; `
    sql += `SET @p10 = '${obj.cObs}'; SET @p11 = '${obj.iIDCreaTicket}'; `
    sql += `SET @p12 = '${obj.iIDCriticidad}'; SET @p13 = '${data.iIDTecnico}'; `
    sql += `SET @p14 = '${obj.lTecnicoAcepta}'; SET @p15 = '${obj.lNotificacion}'; `
    sql += `SET @p16 = '${obj.lArrendado}'; SET @p17 = '${obj.cUsuarioR}'; `
    sql += 'CALL insertaTicket(@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20);';
    sql += 'SELECT @p18 AS `lError`, @p19 AS `cSqlState`, @p20 AS `cError`;';

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
   
module.exports = TicketModelo;