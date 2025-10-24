const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.obtenerClientes);
router.get('/:id', clientesController.obtenerClientePorId);
router.post('/', clientesController.crearCliente);

module.exports = router;