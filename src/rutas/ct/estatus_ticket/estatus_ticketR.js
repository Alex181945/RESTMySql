/**
 * 
 * Autor: Alejandro Estrada
 * Fecha: 18/05/2018
 * Descripcion: Maneja las rutas del catalogo del estatus del ticket
 *  
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * 
 */

'use strict'

const EstatusTicketControlador = require(__basedir + 'src/controladores/ct/estatus_tickets/estatus_ticketC'),
    express = require('express'),
    auth    = require(__basedir + 'src/middleware/auth'),
    router  = express.Router();
    
    router
      .get('/estatus-ticket/consulta', auth, EstatusTicketControlador.todos)
      .post('/estatus-ticket/inserta', auth, EstatusTicketControlador.inserta)
      .get('/estatus-ticket/consulta/uno', auth, EstatusTicketControlador.uno)
      .put('/estatus-ticket/actualiza', auth, EstatusTicketControlador.actualiza)
      .delete('/estatus-ticket/borra', auth, EstatusTicketControlador.borra)

module.exports = router;