const express = require("express")
const router = express.Router()
const ProductoController = require('../controllers/ProductoController')

//obtener productos
router.get('/', ProductoController.getProductos)
router.get('/:id', ProductoController.getProductoPorId)

//agregar productos
router.post('/', ProductoController.addProduct)

router.put('/:id', ProductoController.updateProduct)
//obtener productos
router.delete('/:id', ProductoController.deleteProduct)


module.exports = router;
