/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 06/12/2017
 * Descripcion: Controlador alumnos
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

 var alumnoModelo = require('../modelos/alumnos'),
 AlumnoControlador   = () => {};     

 Alumno.todos = (req, res, next) => {};

 Alumno.inserta = (req, res, next) => {};

 Alumno.uno = (req, res, next) => {};

 Alumno.actualiza = (req, res, next) => {};

 Alumno.borra = (req, res, next) => {};

 Alumno.valida = (req, res, next) => {
     alumnoModelo.valida((err, row) => {
         if(err){
             next(new Erro('No se encontro el usuario en operación'));
         } else{
             let usuario = {
                 data : row
             }
         }
     });
 };

 module.exports = AlumnoControlador;