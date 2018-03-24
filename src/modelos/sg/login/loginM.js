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

var claseConexion = require(__basedir + 'db/conexion'),
     LoginModelo  = () => {};

LoginModelo.valida = (data, callback) => {
    
    /*Instancia de clase conexion*/
    let conexion = new claseConexion();
   
    /*Ejecucion de metodo conectar*/
    let consulta = conexion.conectar();
   
    /*Procedimiento MySql*/
    let sql = `SET @p0 = '${data.cUsuario}'; SET @p1 = '${data.cContrasena}'; `
    sql += 'CALL consultaUsuario(@p0, @p1, @p2, @p3, @p4);';
    sql += 'SELECT @p2 AS `lError`, @p3 AS `cSqlState`, @p4 AS `cError`;';

    consulta.query(sql, callback);
        //consulta.query('CALL consultaUsuario2()', callback);
        //consulta.query('CALL consultaUsuario(`cUsuario`,`cContrasena`,`lError`,`cSqlState`,`cError`)', data, callback);
        /*consulta.query(sql, function(error, resultado, campos){
            if(error){
                callback = error;
                return;
            }
            console.log(resultado);
            //console.log(campos);
            callback = resultado;
        });*/
   
    /*Ejecucion de metodo desconectar*/
    conexion.desconectar();
};
   
module.exports = LoginModelo;