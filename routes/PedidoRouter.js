const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController');

router.post('/', PedidoController.crearPedido);
router.get('/', PedidoController.obtenerPedidos);
router.get('/:id', PedidoController.obtenerPedidoPorId);
router.put('/:id', PedidoController.actualizarPedido);
router.delete('/:id', PedidoController.eliminarPedido);

module.exports = router;