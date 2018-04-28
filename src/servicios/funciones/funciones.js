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

function leeResultadoProcedimiento(result){

    let resultado  = null;
    let validacion = null;
    let datos      = null;

    result.forEach(element => {
        if(Array.isArray(element)){

            if(element.length != 1){
                datos = element;
            } else{
                validacion = element;
            }
        }
    });

    resultado = {
        validacion: validacion,
        datos: datos
    }

    return resultado;

}

module.exports = {leeResultadoProcedimiento};