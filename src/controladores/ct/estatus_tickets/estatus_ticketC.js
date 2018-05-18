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

 const EstatusTicketModelo      = require(__basedir + 'src/modelos/ct/edificio/edificioM'),
 	 EstatusTicketControlador = () => {};     

 EstatusTicketControlador.todos = (req, res, next) => {
    
    EstatusTicketModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 EstatusTicketControlador.uno = (req, res, next) => {
    EstatusTicketModelo.uno(req.query.iIDEstado, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 EstatusTicketControlador.inserta = (req, res, next) => {
    EstatusTicketModelo.inserta(req.body.objEdificio, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 EstatusTicketControlador.actualiza = (req, res, next) => {
    EstatusTicketModelo.actualiza(req.body.objEdificio, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 EstatusTicketControlador.borra = (req, res, next) => {
    EstatusTicketModelo.borra(req.body, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 module.exports = EstatusTicketControlador;