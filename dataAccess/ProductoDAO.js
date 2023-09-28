const {Producto}= require('../models/Producto.js');


class ProductoDAO {
    constructor() {};
    // CRUD Aplicación

    async crearProducto(nombre, precio, cantidad) {
        try {
            const producto = await Producto.create({nombre,precio,cantidad});
            return producto;
        }
        catch(err) {
            console.log('Error: ', err)
        }
    }
    async obtenerProductos() {
        try {
            const productos = await Producto.findAll();
            return productos;
        }
        catch(err) {
            console.log('', err)
        }
    }
    async obtenerProductosPorId(id) {
        try {
            const productos = await Producto.findByPk(id);
            return productos;
        }
        catch(err) {
            console.log('', err)
        }
    }

    async eliminarProducto(id) {
        try {
            const productoElminar = await Producto.findByPk(id);
            if(!productoElminar){
                throw new Error('Producto no encontrado')
            }
            await productoElminar.destroy();
            return 'Producto eliminado con exito!';
        }
        catch(err) {
            console.log('', err)
        }
    }

    async actualizarProducto(id,nombre,precio,cantidad) {
        try {
            const productoActualizar = await Producto.findByPk(id);
            if(!productoActualizar){
                throw new Error('Producto no encontrado')
            }
            await productoActualizar.update({nombre,precio,cantidad}, {where:{id}});
            return 'Producto actualizado con exito!';
        }
        catch(err) {
            console.log('', err)
        }
    }
}

module.exports = new ProductoDAO();