/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 06/12/2017
 * Descripcion: Controlador Usuarios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

 var UsuarioModelo      = require(__basedir + 'src/modelos/ct/usuario/usuarioM'),
 	 UsuarioControlador = () => {};     

 UsuarioControlador.todos = (req, res, next) => {};

 UsuarioControlador.uno = (req, res, next) => {};

 UsuarioControlador.inserta = (req, res, next) => {};

 UsuarioControlador.actualiza = (req, res, next) => {};

 UsuarioControlador.borra = (req, res, next) => {};

 UsuarioControlador.valida = (req, res, next) => {

    let credenciales = {
        cUsuario  : req.query.cUsuario,
        cContrasena : req.query.cContrasena,
        lError : 0,
        cSqlState : '',
        cError : ''
    }

     UsuarioModelo.valida(credenciales, (error) => {
         if(error){

             let respuesta = {
                 title : 'Error',
                 descripcion: error
             }

             res.send(respuesta);

         } else {
             let respuesta = {
                 title : 'Exito',
                 descripcion : error
             }

             res.send(respuesta);
         }
     });
 };

 module.exports = UsuarioControlador;