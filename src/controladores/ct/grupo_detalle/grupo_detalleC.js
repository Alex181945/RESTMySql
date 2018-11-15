/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 15/04/2018
 * Descripcion: Controlador Edificios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

 const GrupoDetalleModelo      = require(__basedir + 'src/modelos/ct/grupo_detalle/grupo_detalleM'),
 	 GrupoDetalleControlador = () => {};     

 GrupoDetalleControlador.todos = (req, res, next) => {
    
    GrupoDetalleModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 GrupoDetalleControlador.uno = (req, res, next) => {
    GrupoDetalleModelo.uno(req.query, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 GrupoDetalleControlador.inserta = (req, res, next) => {
    GrupoDetalleModelo.inserta(req.body.objCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 GrupoDetalleControlador.actualiza = (req, res, next) => {
    GrupoDetalleModelo.actualiza(req.body.objCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 GrupoDetalleControlador.borra = (req, res, next) => {
    GrupoDetalleModelo.borra(req.body, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 module.exports = GrupoDetalleControlador;