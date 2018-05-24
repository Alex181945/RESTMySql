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

 const GrupoModelo   = require(__basedir + 'src/modelos/ct/grupo/grupoM'),
 GrupoControlador = () => {};     

    GrupoControlador.todos = (req, res, next) => {
    /* Si es query es por URL GET si es por body es por POST,PUT 
    data req.query. srvSolicitadoM */
    GrupoModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 GrupoControlador.uno = (req, res, next) => {};

 GrupoControlador.inserta = (req, res, next) => {};

 GrupoControlador.actualiza = (req, res, next) => {};

 GrupoControlador.borra = (req, res, next) => {};

 module.exports = GrupoControlador;