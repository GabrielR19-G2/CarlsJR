const express = require("express")
const router = express.Router()
const usuarioController = require('../controllers/usuarios')

//obtener usuarios
router.get('/', usuarioController.getUsuarios)

//agregar usuarios
router.post('/', usuarioController.addUsuario)

//obtener usuarios
router.delete('/', usuarioController.deleteUser)


module.exports = router;
