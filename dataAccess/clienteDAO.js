const { Cliente } = require('../models/');

class ClienteDAO {
    constructor() { };

    async crearCliente(idusuario, nombre, telefono) {
        try {
            const clienterNuevo = await Cliente.create({idusuario, nombre, telefono});
            return clienterNuevo;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerClientes() {
        try {
            const clientes = await Cliente.findAll();
            return clientes;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerClientePorId(id) {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                throw new Error('Cliente no encontrado');
            }
            return cliente;
        }
        catch (err) {
            throw err;
        }
    }

    async eliminarCliente(id) {
        try {
            const clienteEliminar = await Cliente.findByPk(id);
            if (!clienteEliminar) {
                throw new Error('Cliente no encontrado');
            }
            await clienteEliminar.destroy();
            return 'Cliente eliminado con exito';
        }
        catch (err) {
            throw err;
        }
    }

    async actualizarCliente(id, idusuario, nombre, telefono) {
        try {
            const clienteActualizar = await Cliente.findByPk(id);
            if (!clienteActualizar) {
                throw new Error('Cliente no encontrado');
            }
            await clienteActualizar.update({ idusuario, nombre, telefono}, { where: { id } });
            return 'Cliente actualizado con exito';
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new ClienteDAO();