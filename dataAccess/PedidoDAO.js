const { Pedido } = require('../models/Pedido');


class PedidoDAO {
    constructor() { };
    // CRUD Aplicación

    async crearPedido(total, productos, estatus, fecha) {
        try {
            const pedido = await Pedido.create({ total, productos, estatus, fecha });
            return pedido;
        }
        catch (err) {
            console.log('Error: ', err)
        }
    }
    async obtenerPedidos() {
        try {
            const pedidos = await Pedido.findAll();
            return pedidos;
        }
        catch (err) {
            console.log('', err)
        }
    }
    async obtenerPedidosPorId(id) {
        try {
            const pedidos = await Pedidos.findByPk(id);
            return pedidos;
        }
        catch (err) {
            console.log('', err)
        }
    }

    async eliminarPedido(id) {
        try {
            const pedidoElminar = await Producto.findByPk(id);
            if (!pedidoElminar) {
                throw new Error('Pedido no encontrado')
            }
            await pedidoElminar.destroy();
            return 'Pedido eliminado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }

    async actualizarProducto(id, total, productos, estatus, fecha) {
        try {
            const pedidoActualizar = await Pedido.findByPk(id);
            if (!pedidoActualizar) {
                throw new Error('Pedido no encontrado')
            }
            await pedidoActualizar.update({ total, productos, estatus,fecha}, { where: { id } });
            return 'Pedido actualizado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }
}

module.exports = new PedidoDAO();