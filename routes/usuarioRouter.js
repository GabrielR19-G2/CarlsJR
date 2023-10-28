const express = require("express");
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const authMiddleware = require('../middleware/auth'); // Importa tu middleware de autenticación

// Obtener usuarios (ruta pública)
router.get('/', usuariosController.getUsuarios);

// Obtener usuario por ID (ruta protegida)
router.get('/:id', authMiddleware, usuariosController.getUsuarioPorId);

// Agregar usuarios (ruta pública)
router.post('/', usuariosController.addUsuario);

// Actualizar usuario por ID (ruta protegida)
router.put('/:id', authMiddleware, usuariosController.updateUser);

// Eliminar usuario por ID (ruta protegida)
router.delete('/:id', authMiddleware, usuariosController.deleteUser);

module.exports = router;
