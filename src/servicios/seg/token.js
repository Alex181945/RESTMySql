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

function createToken(){
    const payload = {
        sub: '',
        iat: moment().unix(),
        exp: moment().add(12, 'hours').unix()
    }

    return jwt.encode(payload, config.SECRET_TOKEN);
}

module.exports = createToken;