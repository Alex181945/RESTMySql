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

 const TicketModelo    = require(__basedir + 'src/modelos/op/ticket/ticketM'),
 	 TicketControlador = () => {};     

 TicketControlador.todos = (req, res, next) => {

    let consulta = {
        iTipoConsulta  : req.body.iTipoConsulta,
        iIDPerfil : req.body.iIDPerfil
    }

    TicketModelo.todos(consulta, (error, filas) => {
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });
 };

 TicketControlador.uno = (req, res, next) => {};

 TicketControlador.inserta = (req, res, next) => {
     
     TicketModelo.inserta(req.body.objTicket, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
     
 };

 TicketControlador.actualiza = (req, res, next) => {};

 TicketControlador.borra = (req, res, next) => {};

 module.exports = TicketControlador;