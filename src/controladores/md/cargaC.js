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

 const CargaModelo    = require(__basedir + 'src/modelos/md/cargaM'),
 	 CargaControlador = () => {};     

 CargaControlador.todos = (req, res, next) => {

    let consulta = {
        iTipoConsulta  : req.body.iTipoConsulta,
        iIDPerfil : req.body.iIDPerfil
    }

    CargaModelo.todos(consulta, (error, filas) => {
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });
 };

 CargaControlador.uno = (req, res, next) => {};

 CargaControlador.inserta = (req, res, next) => {};

 CargaControlador.actualiza = (req, res, next) => {};

 CargaControlador.borra = (req, res, next) => {};

 module.exports = CargaControlador;