const express = require("express");
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
<<<<<<< HEAD

// Obtener usuarios
router.get('/', usuariosController.getUsuarios);
router.get('/:id', usuariosController.getUsuarioPorId);

// Agregar usuarios
router.post('/', usuariosController.addUsuario);

router.put('/:id', usuariosController.updateUser);
// Obtener usuarios
router.delete('/:id', usuariosController.deleteUser);

module.exports = router;
=======
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
>>>>>>> a30f8866b71db6ac86a6490a5e03f8710f75bb01
