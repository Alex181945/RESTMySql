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
    let consulta2 = conexion.conectar();

    /*Respuesta consulta*/
    let respuesta;

    let obj = JSON.parse(data.objCtPersona);
    let obj2 = JSON.parse(data.arrayCtPersona);

    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${obj.iIDTipoPersona}'; SET @p1 = '${obj.cNombre}'; `;
    sql += `SET @p2 = '${obj.cAPaterno}'; SET @p3 = '${obj.cAMaterno}'; `;
    sql += `SET @p4 = '${obj.lGenero}'; SET @p5 = '${obj.dtFechaNac}'; `;
    sql += 'CALL insertactPersona(@p0, @p1, @p2, @p3, @p3, @p5, @p6, @p7, @p8, @p9);';
    sql += 'SELECT @p6 AS `iPersona`, @p7 AS `lError`, @p8 AS `cSqlState`, @p9 AS `cError`';

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

            console.log(resultado.validacion[0].lError);
            if(resultado.validacion[0].lError === 0){
                obj2.forEach(function(element) {

                    let sql = `SET @p0 = '${element.iAtributo}'; SET @p1 = '${element.iIDTipoPersona}'; `;
                    sql += `SET @p2 = '${resultado.validacion[0].iPersona}'; SET @p3 = '${element.cValor}'; `;
                    sql += `SET @p4 = '${element.cObs}';`;
                    sql += 'CALL insertaopAtributoPersona(@p0, @p1, @p2, @p3, @p3, @p5, @p6, @p7, @p8);';
                    sql += 'SELECT @p6 AS `lError`, @p7 AS `cSqlState`, @p8 AS `cError`';

                    consulta2.query(sql, function(error, result, fields){
                        if(error){
                            resultado = {
                                error: error
                            }
                        } else{
                            resultado += traeResultado.leeResultadoProcedimiento(result);
                            console.log(resultado);
                        }
                    });
    
                });

            }

        }

        console.log(resultado);

        /*Solucion a la callback*/
        callback(resultado);
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();

};
   
module.exports = TipoPersonaModelo;