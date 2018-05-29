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

 const BusquedaModelo    = require(__basedir + 'src/modelos/op/busqueda/busquedaM'),
 	 BusquedaControlador = () => {};     

 BusquedaControlador.todos = (req, res, next) => {

    BusquedaModelo.todos(req.body, (error, filas) => {
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });
 };

 BusquedaControlador.generaKardex = (req, res, next) => {

    BusquedaModelo.generaKardex(req.query.iPersona, (error, filas) => {
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 module.exports = BusquedaControlador;