const {Usuario}= require('../models/Usuario.js');


class UsuarioDAO {
    constructor() {};
    // CRUD Aplicación

    async crearUsuario(nombre, password) {
        try {
            const usuario = await Usuario.create({nombre,password});
            return usuario;
        }
        catch(err) {
            console.log('Error: ', err)
        }
    }
    async obtenerUsuarios() {
        try {
            const usuarios = await Usuario.findAll();
            return usuarios;
        }
        catch(err) {
            console.log('', err)
        }
    }
    async obtenerUsuarioPorId(id) {
        try {
            const usuario = await Usuario.findByPk(id);
            return usuario;
        }
        catch(err) {
            console.log('', err)
        }
    }

    async eliminarUsuario(id) {
        try {
            const productoElminar = await Producto.findByPk(id);
            if(!productoElminar){
                throw new Error('Usuario no encontrado')
            }
            await productoElminar.destroy();
            return 'Usuario eliminado con exito!';
        }
        catch(err) {
            console.log('', err)
        }
    }

    async actualizarUsuario(id,nombre,password) {
        try {
            const usuarioActualizar = await Usuario.findByPk(id);
            if(!usuarioActualizar){
                throw new Error('Usuario no encontrado')
            }
            await productoActualizar.update({nombre,password}, {where:{id}});
            return 'Usuario actualizado con exito!';
        }
        catch(err) {
            console.log('', err)
        }
    }
}

module.exports = new UsuarioDAO();