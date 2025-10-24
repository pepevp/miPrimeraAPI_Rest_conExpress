// Datos simulados (en un caso real se leerían desde una BD o un archivo JSON)
let clientes = [
    { id: 1, nombre: 'Carlos', email: 'carlos@example.com' },
    { id: 2, nombre: 'María', email: 'maria@example.com' }
];

exports.listarClientes = () => {
    return clientes;
};

exports.buscarClientePorId = (id) => {
    return clientes.find(c => c.id === id);
};

exports.crearCliente = (data) => {
    const nuevo = { id: clientes.length + 1, ...data };
    clientes.push(nuevo);
    return nuevo;
};