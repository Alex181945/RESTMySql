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

 const PeriodoModelo      = require(__basedir + 'src/modelos/ct/periodo/periodoM'),
 	 PeriodoControlador = () => {};     

 PeriodoControlador.todos = (req, res, next) => {
    
    PeriodoModelo.todos(req.query, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 PeriodoControlador.todosSinCarrera = (req, res, next) => {
    
    PeriodoModelo.todosSinCarrera(req.query, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 PeriodoControlador.uno = (req, res, next) => {
    PeriodoModelo.uno(req.query.iCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 PeriodoControlador.inserta = (req, res, next) => {
    PeriodoModelo.inserta(req.body.objCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 PeriodoControlador.actualiza = (req, res, next) => {
    PeriodoModelo.actualiza(req.body.objCarrera, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 PeriodoControlador.borra = (req, res, next) => {
    PeriodoModelo.borra(req.body, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 module.exports = PeriodoControlador;