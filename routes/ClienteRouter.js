const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');
const authMiddleware = require('../middleware/auth'); // Importa tu middleware de autenticación

// Crear cliente (ruta protegida)
router.post('/', authMiddleware, ClienteController.crearCliente);

// Obtener clientes (ruta protegida)
router.get('/', authMiddleware, ClienteController.obtenerClientes);

// Obtener cliente por ID (ruta protegida)
router.get('/:id', authMiddleware, ClienteController.obtenerClientePorId);

// Actualizar cliente por ID (ruta protegida)
router.put('/:id', authMiddleware, ClienteController.actualizarCliente);

// Eliminar cliente por ID (ruta protegida)
router.delete('/:id', authMiddleware, ClienteController.eliminarCliente);

module.exports = router;
