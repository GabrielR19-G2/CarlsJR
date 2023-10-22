const { Usuario } = require('../models/');

class UsuarioDAO {
    constructor() { };

    async crearUsuario(Nombre, contraseña) {
        try {
            //No es nombre, contraseña?
            const usuarioNuevo = await Usuario.create({Nombre, contraseña});
            return usuarioNuevo;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerUsuarios() {
        try {
            const usuarios = await Usuario.findAll();
            return usuarios;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerUsuarioPorId(id) {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            return usuario;
        }
        catch (err) {
            throw err;
        }
    }

    async eliminarUsuario(id) {
        try {
            const usuarioElminar = await Usuario.findByPk(id);
            if (!usuarioElminar) {
                throw new Error('Usuario no encontrado');
            }
            await usuarioElminar.destroy();
            return 'Usuario eliminado con exito';
        }
        catch (err) {
            throw err;
        }
    }

    async actualizarUsuario(id, usuario, contraseña) {
        try {
            const usuarioActualizar = await Usuario.findByPk(id);
            if (!usuarioActualizar) {
                throw new Error('Usuario no encontrado');
            }
            await usuarioActualizar.update({ usuario, contraseña}, { where: { id } });
            return 'Usuario actualizado con exito';
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new UsuarioDAO();