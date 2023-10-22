const express = require("express")
const router = express.Router()
const productoController = require('../controllers/ProductoController')

//obtener productos
router.get('/', productoController.getProductos)
router.get('/:id', productoController.getProductoPorId)

//agregar productos
router.post('/', productoController.addProduct)

router.put('/:id', productoController.updateProduct)
//obtener productos
router.delete('/:id', productoController.deleteProduct)


module.exports = router;
