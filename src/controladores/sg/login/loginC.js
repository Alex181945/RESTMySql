/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 23/03/2018
 * Descripcion: Controlador Usuarios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const LoginModelo      = require(__basedir + 'src/modelos/sg/login/loginM'),
      LoginControlador = () => {};
      
LoginControlador.valida = (req, res, next) => {
    
    let credenciales = {
        cUsuario  : req.query.cUsuario,
        cContrasena : req.query.cContrasena,
        lError : 0,
        cSqlState : '',
        cError : ''
    }
    
    LoginModelo.valida(credenciales, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });
};

module.exports = LoginControlador;