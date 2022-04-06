const express = require('express');
const CCliente = require('../controllers/CClientes');

const router = express.Router();

router.get('/', CCliente.listall)
      .post('/', CCliente.create)
      .get('/:key/:value', CCliente.find, CCliente.show)
      .put('/:key/:value', CCliente.find, CCliente.update)
      .delete('/:key/:value', CCliente.find, CCliente.deleted)

module.exports = router;