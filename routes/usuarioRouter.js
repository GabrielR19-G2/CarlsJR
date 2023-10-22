const express = require("express")
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

//obtener usuarios
router.get('/', usuariosController.getUsuarios)
router.get('/:id', usuariosController.getUsuariosPorId)

//agregar usuarios
router.post('/', usuariosController.addUsuario)

router.put('/:id', usuariosController.updateUser)
//obtener usuarios
router.delete('/:id', usuariosController.deleteUser)


module.exports = router;
