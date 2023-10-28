<<<<<<< HEAD
const express = require("express")
const router = express.Router()
const clienteController = require('../controllers/ClienteController.js')

//obtener usuarios
router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClientePorId);

//agregar usuarios
router.post('/', clienteController.addCliente);

router.put('/:id', clienteController.updateCliente);
//obtener usuarios
router.delete('/:id', clienteController.deleteCliente);

=======
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
>>>>>>> a30f8866b71db6ac86a6490a5e03f8710f75bb01

module.exports = router;
