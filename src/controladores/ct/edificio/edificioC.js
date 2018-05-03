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

 const EdificioModelo      = require(__basedir + 'src/modelos/ct/edificio/edificioM'),
 	 EdificioControlador = () => {};     

 EdificioControlador.todos = (req, res, next) => {
    
    EdificioModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 EdificioControlador.uno = (req, res, next) => {
    EdificioModelo.uno(req.query.iIDEdificio, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 EdificioControlador.inserta = (req, res, next) => {
    EdificioModelo.inserta(req.body.objEdificio, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 EdificioControlador.actualiza = (req, res, next) => {
    EdificioModelo.actualiza(req.body.objEdificio, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 EdificioControlador.borra = (req, res, next) => {
    EdificioModelo.borra(req.body, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 module.exports = EdificioControlador;