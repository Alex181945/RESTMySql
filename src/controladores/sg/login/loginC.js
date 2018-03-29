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
        cUsuario  : req.body.cUsuario,
        cContrasena : req.body.cContrasena,
        lError : 0,
        cSqlState : '',
        cError : ''
    }
    
    LoginModelo.valida(credenciales, (error, filas) => {
        
        if(error){
            console.log(error);
            res.send(error);
        } else {
            console.log(filas);
            res.send(filas);
        }
    });
};

module.exports = LoginControlador;