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

 const UsuarioModelo      = require(__basedir + 'src/modelos/ct/usuario/usuarioM'),
 	 UsuarioControlador = () => {};     

 UsuarioControlador.todos = (req, res, next) => {
    res.send('Accedi');
 };

 UsuarioControlador.uno = (req, res, next) => {};

 UsuarioControlador.inserta = (req, res, next) => {};

 UsuarioControlador.actualiza = (req, res, next) => {};

 UsuarioControlador.borra = (req, res, next) => {};

 module.exports = UsuarioControlador;