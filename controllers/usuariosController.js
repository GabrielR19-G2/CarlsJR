//Manejo de errores
const { AppError } = require("../utils/appError")
const { UsuarioDAO } = require("../dataAccess/UsuarioDAO")


// usuario: DataTypes.STRING,
// contraseña: DataTypes.STRING
class usuarioController {

    static async addUsuario(req, res, next) {
        try {
            const { Nombre, contraseña } = req.body

            if (!Nombre || !contraseña) {
                throw new AppError('¡Faltan campos obligatorios!', 500)
            }
            const usuarioData = { Nombre, contraseña }
            const usuario = await UsuarioDAO.crearUsuario(usuarioData);
            res.status(201).json(usuario)
        } catch (err) {
            next(new AppError('Error al crear usuario', 500))
        }
    }

    static async getUsuarios(req, res, next) {
        try {
            const limit = req.params.limit || 10
            const usuarios = await UsuarioDAO.obtenerUsuarios(limit)
            res.status(200).json(usuarios)
        } catch (err) {
            next(new AppError('Error al obtener los usuarios', 500))
        }
    }

    static async getUsuarioPorId(req, res, next) {
        try {
            const id = req.params.id
            const usuario = await UsuarioDAO.obtenerUsuarioPorId(id)
            if(!usuario){
                next(new AppError('Usuario no encontrado',500))
            }
            res.status(200).json(usuario)
        } catch (error) {
            next(new AppError('Error al obtener usuario o usuario inexistente', 500))
        }
    }

    //elimina por id
    static async deleteUser(req, res, next) {
        try {
            const id = req.params.index
            const usuario = await UsuarioDAO.eliminarUsuario(id)

            if (!usuario) {
                next(new AppError('No se encontró el usuario', 500))
            }
            res.status(200).json({message:'Usuario eliminado con éxito!'}) //regresa un json con los usuarios, menos el usuario eliminado

        } catch (error) {
            next(new AppError('Error al eliminar usuario', 500))
        }
    }

    static async updateUser(req, res) {
        try {
            const id = req.params.id
            const usuarioData = req.body;
            const usuario = await UsuarioDAO.actualizarUsuario(id, usuarioData)
            if (!usuario) {
                next(new AppError('No se encontró el usuario', 500))
            }
            res.status(200).json(usuario)
        } catch (error) {
            next(new AppError('Error al actualizar el usuario', 500))
        }
    }
}

module.exports = usuarioController;