/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 14/11/2017
 * Descripcion: Maneja las rutas de los alumnos
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19 
 * 
 */

 module.exports = function (app){
     app.get('/', (req, res) => {
         res.json([]);
     });
 }