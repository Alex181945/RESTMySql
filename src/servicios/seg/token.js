/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 23/03/2018
 * Descripcion: Servico que se encarga de 
 * crear los token para el acceso al api rest
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

'use strict'

const jwt    = require('jwt-simple');
const moment = require('moment');
const config = require(__basedir + 'config/config');

function createToken(cUsuario){
    const payload = {
        sub: cUsuario,
        iat: moment().unix(),
        exp: moment().add(12, 'hours').unix()
    }

    return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token){
    
    const decoded = new Promise((resolve, reject) =>{

        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);

            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El Token ha expirado'
                }); 
            }

            resolve(payload.sub);

        } catch (err) {
            reject({
                status: 500,
                message: 'Token invalido'
            });
        }

    });

    return decoded;
}

module.exports = {createToken, decodeToken};