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

 const jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require(__basedir + 'config/config');

 function isAuth(req, res, next){

    if(!req.headers.authorization){
        return res.status(403).send({message: 'No tienes autorizacion'});
    }

    const token = req.headers.authorization.split(' ')[1],
        payload = jwt.decode(token, config.SECRET_TOKEN);
    
    if(payload.exp <= moment().unix()){
        return res.status(401).send({message: 'El Token ha expirado'});
    }

    req.user = payload.sub;
    next();

 }

 module.exports = isAuth;