/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 25/02/2018
 * Descripcion: Controlador para rutas por defecto
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 var Defecto = DefectoControlador = () => {};

 Defecto.respuesta = (req, res, next) => {
    let respuesta = {
        title : 'Respuesta',
        data : '[Vacio]'
    }
 };

 module.exports = DefectoControlador;