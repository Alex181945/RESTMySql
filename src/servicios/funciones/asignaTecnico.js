/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 17/05/2018
 * Descripcion: Servicio que asigna un tecnico al ticket
 * que se levanta.
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const claseConexion = require(__basedir + 'db/conexion'), 
    AsignaTecnico  = () => {};
const traeResultado = require(__basedir + 'src/servicios/funciones/funciones');

AsignaTecnico.cargaDeTrabajo = (data, callback) =>{

    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();
   
    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data}';`
    sql += 'CALL consultaTecnico(@p0, @p1, @p2, @p3);';
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
            if(parseInt(resultado.validacion[0].lError) == parseInt(0)){
                resultado = resultado.datos[0].iIDTecnico;
            } else{
                resultado = 1;
            }            
        }
        /*Solucion a la callback*/
        callback(resultado);        
    });
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();

};

module.exports = AsignaTecnico;