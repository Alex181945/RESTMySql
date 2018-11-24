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

 const MateriaModelo      = require(__basedir + 'src/modelos/ct/materia/materiaM'),
 	 MateriaControlador = () => {};     

 MateriaControlador.todos = (req, res, next) => {
    
    MateriaModelo.todos(req.query.iTipoConsulta, (error, filas) => {
        
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
    });

 };

 MateriaControlador.uno = (req, res, next) => {
    MateriaModelo.uno(req.query.iMateria, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 MateriaControlador.inserta = (req, res, next) => {
    MateriaModelo.inserta(req.body.objMateria, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 MateriaControlador.actualiza = (req, res, next) => {
    MateriaModelo.actualiza(req.body.objMateria, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 MateriaControlador.borra = (req, res, next) => {
    MateriaModelo.borra(req.body.iMateria, (error, filas) =>{
        if(error){
            res.send(error);
        } else {
            res.send(filas);
        }
     });
 };

 module.exports = MateriaControlador;
