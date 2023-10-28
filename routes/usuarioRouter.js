const express = require("express");
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

<<<<<<< HEAD
// Obtener usuarios
router.get('/', usuariosController.getUsuarios);
router.get('/:id', usuariosController.getUsuarioPorId);
=======
//obtener usuarios
router.get('/', usuariosController.getUsuarios)
router.get('/:id', usuariosController.getUsuarioPorId)
>>>>>>> 65285be97f6d0e50fcb61ae84455b899444b9fa1

// Agregar usuarios
router.post('/', usuariosController.addUsuario);

router.put('/:id', usuariosController.updateUser);
// Obtener usuarios
router.delete('/:id', usuariosController.deleteUser);

module.exports = router;