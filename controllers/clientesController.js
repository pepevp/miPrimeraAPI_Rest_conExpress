const clientesService = require('../services/clientesService');

exports.obtenerClientes = (req, res) => {
    const clientes = clientesService.listarClientes();
    res.json(clientes);
};

exports.obtenerClientePorId = (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientesService.buscarClientePorId(id);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
};

exports.crearCliente = (req, res) => {
    const nuevoCliente = clientesService.crearCliente(req.body);
    res.status(201).json(nuevoCliente);
};