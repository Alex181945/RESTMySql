/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 07/04/2018
 * Descripcion: Controlador Carga datos de la aplicacion
 * en funcion al perfil del usuario
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

 const TipoPersonaModelo    = require(__basedir + 'src/modelos/op/tipo-persona/tipoPersonaM'),
 	 TipoPersonaControlador = () => {};     

 TipoPersonaControlador.todos = (req, res, next) => {

    let consulta = {
        iTipoConsulta  : req.body.iTipoConsulta,
        iIDPerfil : req.body.iIDPerfil
    }

    TipoPersonaModelo.todos(consulta, (error, filas) => {
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });
 };

 TipoPersonaControlador.uno = (req, res, next) => {};

 TipoPersonaControlador.inserta = (req, res, next) => {

     TipoPersonaModelo.inserta(req.body, (error, filas) => {
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 TipoPersonaControlador.actualiza = (req, res, next) => {};

 TipoPersonaControlador.borra = (req, res, next) => {};

 module.exports = TipoPersonaControlador;