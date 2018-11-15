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

 const CarreraModelo      = require(__basedir + 'src/modelos/ct/carrera/carreraM'),
 	 CarreraControlador = () => {};     

 CarreraControlador.todos = (req, res, next) => {
    
    CarreraModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 CarreraControlador.uno = (req, res, next) => {
    CarreraModelo.uno(req.query.iCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 CarreraControlador.inserta = (req, res, next) => {
    CarreraModelo.inserta(req.body.objCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 CarreraControlador.actualiza = (req, res, next) => {
    CarreraModelo.actualiza(req.body.objCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 CarreraControlador.borra = (req, res, next) => {
    CarreraModelo.borra(req.body, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 module.exports = CarreraControlador;