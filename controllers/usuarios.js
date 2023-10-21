//Manejo de errores
const { AppError } = require("../utils/appError")
//Arreglo donde se realizaran ABC de usuarios
const usuarios = []

// usuario: DataTypes.STRING,
// contraseña: DataTypes.STRING

const getUsuarios = (request, response) => {
    response.status(200).json(usuarios)
}
const addUsuario = (req, res) => {
    const { nombre, contraseña } = req.body

    if (!nombre || !contraseña) {
        throw new AppError('¡Faltan campos obligatorios!', 500)
    }

    const usuarioNuevo = {
        nombre: nombre,
        contraseña: contraseña
    }
    usuarios.push(usuarioNuevo)
    res.status(200).json(usuarioNuevo)
}
//elimina por id
const deleteUser = (req, res) => {
    const index = req.params.index
    if (index >= 0 && index < usuarios.length) {
        const deletedUser = usuarios.splice(index, 1)
        res.status(200).json(deletedUser) //regresa un json con los usuarios, menos el usuario eliminado
    } else {
        throw new AppError('Usuario no encontrado', 404)
    }
}

const updateUser = (req,res)=>{
    // const 
    
}

module.exports = {
    getUsuarios,
    addUsuario,
    deleteUser
}