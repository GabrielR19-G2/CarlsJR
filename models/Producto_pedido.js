'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductoPedido.belongsTo(models.Pedido,{foreignKey:'idPedido'})

      ProductoPedido.belongsTo(models.Productos,{foreignKey:'idProducto'})
    }
  }
  Producto_Pedido.init({
    idProducto: DataTypes.INTEGER,
    idPedido: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    instruccionAdicional: DataTypes.STRING,
    importe: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ProductoPedido',
  });
  return Producto_Pedido;
};