/**
 * 
 * Autor: Bogar Chavez 
 * Fecha: 23/04/2018
 * Descripcion: Controlador Servicio solicitado
 * REST
 * 
 * Modificaciones:
 */

'use strict'

 const SolicitadoModelo   = require(__basedir + 'src/modelos/ct/srvsolicitado/srvsolicitadoM'),
 	 SolicitadoControlador = () => {};     

    SolicitadoControlador.todos = (req, res, next) => {
    /* Si es query es por URL GET si es por body es por POST,PUT 
    data req.query. srvSolicitadoM */
    SolicitadoModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 SolicitadoControlador.uno = (req, res, next) => {};

 SolicitadoControlador.inserta = (req, res, next) => {};

 SolicitadoControlador.actualiza = (req, res, next) => {};

 SolicitadoControlador.borra = (req, res, next) => {};

 module.exports = SolicitadoControlador;