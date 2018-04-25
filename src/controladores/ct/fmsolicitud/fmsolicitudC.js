/**
 * 
 * Autor: Bogar Chavez 
 * Fecha: 23/04/2018
 * Descripcion: Controlador forma de solicitud
 * REST
 * 
 * Modificaciones:
 * 
 */

'use strict'

 const SolicitudModelo   = require(__basedir + 'src/modelos/ct/fmsolicitud/fmsolicitudM'),
 	 SolicitudControlador = () => {};     

    SolicitudControlador.todos = (req, res, next) => {
    /* Si es query es por URL GET si es por body es por POST,PUT 
    data req.query. tpServicioM */
    SolicitudModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 SolicitudControlador.uno = (req, res, next) => {};

 SolicitudControlador.inserta = (req, res, next) => {};

 SolicitudControlador.actualiza = (req, res, next) => {};

 SolicitudControlador.borra = (req, res, next) => {};

 module.exports = SolicitudControlador;