const { pedidoProducto } = require('../models/PedidoProducto');


class PedidoDAO {
    constructor() { };
    // CRUD Aplicación

    async crearPedidoProducto(idPedido, idProducto, cantidad, instrucciones, importe) {
        try {
            const PedidoProducto = await pedidoProducto.create({ idPedido, idProducto, cantidad, instrucciones, importe });
            return PedidoProducto;
        }
        catch (err) {
            console.log('Error: ', err)
        }
    }
    async obtenerPedidosProducto() {
        try {
            const pedidos = await Pedido.findAll();
            return pedidos;
        }
        catch (err) {
            console.log('', err)
        }
    }
    async obtenerPedidosProductoPorId(id) {
        try {
            const PedidoProducto = await pedidoProducto.findByPk(id);
            return PedidoProducto;
        }
        catch (err) {
            console.log('', err)
        }
    }

    async eliminarPedidoProducto(id) {
        try {
            const pedidoProductoElminar = await Producto.findByPk(id);
            if (!pedidoProductoElminar) {
                throw new Error('Producto Pedido no encontrado')
            }
            await pedidoElminar.destroy();
            return 'Producto Pedido eliminado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }

    async actualizarProductoProducto(id, idPedido, idProducto, cantidad, instrucciones, importe) {
        try {
            const pedidoProductoActualizar = await PedidoProducto.findByPk(id);
            if (!pedidoProductoActualizar) {
                throw new Error('Producto Pedido no encontrado')
            }
            await pedidoActualizar.update({ idPedido, idProducto, cantidad, instrucciones, importe }, { where: { id } });
            return 'Producto Pedido actualizado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }
}

module.exports = new PedidoDAO();