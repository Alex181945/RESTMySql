/**
 * 
 * Autor: Bogar Chavez 
 * Fecha: 19/04/2018
 * Descripcion: Controlador Edificios
 * REST
 * 
 * Modificaciones:
 * 
 */

'use strict'

 const ServicioModelo      = require(__basedir + 'src/modelos/ct/tpservicio/tpservicioM'),
 	 ServicioControlador = () => {};     

 ServicioControlador.todos = (req, res, next) => {
    /* Si es query es por URL GET si es por body es por POST,PUT 
    data req.query. tpServicioM */
    ServicioModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 ServicioControlador.uno = (req, res, next) => {};

 ServicioControlador.inserta = (req, res, next) => {};

 ServicioControlador.actualiza = (req, res, next) => {};

 ServicioControlador.borra = (req, res, next) => {};

 module.exports = ServicioControlador;