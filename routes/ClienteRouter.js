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


module.exports = router;
=======
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

router.post('/', ClienteController.crearCliente);
router.get('/', ClienteController.obtenerClientes);
router.get('/:id', ClienteController.obtenerClientePorId);
router.put('/:id', ClienteController.actualizarCliente);
router.delete('/:id', ClienteController.eliminarCliente);

module.exports = router;
>>>>>>> 65285be97f6d0e50fcb61ae84455b899444b9fa1
