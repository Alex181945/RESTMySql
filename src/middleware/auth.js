/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 23/03/2018
 * Descripcion: Se encarga de proteger las rutas
 * validando la autentificacion del token
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 'use strict'

 const servicio = require('../servicios/seg/token');

 function isAuth(req, res, next){

    if(!req.headers.authorization){
        return res.status(403).send({message: 'No tienes autorizacion'});
    }

    const token = req.headers.authorization.split(' ')[1];

    servicio.decodeToken(token)
        .then(response => {
            next();
        })
        .catch(response => {
            res.status(response.status);
        });

 }

 module.exports = isAuth;