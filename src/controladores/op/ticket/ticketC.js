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

 const TicketModelo = require(__basedir + 'src/modelos/op/ticket/ticketM'),
      TicketControlador = () => {};
const AsignaTecnico = require(__basedir + 'src/servicios/funciones/asignaTecnico');     

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

    /*Se invoca al asigna tecnico de manera automatica*/
     switch (req.body.iTipoAsignacionTecnico){
        case '1' :
             AsignaTecnico.cargaDeTrabajo(req.body.iTipoAsignacionTecnico, (error, filas) =>{
                if(error){
                    console.log(error);
                } else {
                    req.body.iTipoAsignacionTecnico = filas;
                }
             });
        break;
        default:
            console.log('No se indico ningun tipo de asignacion de tecnico');
        break;
     }

     
     let ticket ={
         "objTicket" : req.body.objTicket,
         "iIDTecnico" : req.body.iTipoAsignacionTecnico
     }
     
     TicketModelo.inserta(ticket, (error, filas) =>{
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