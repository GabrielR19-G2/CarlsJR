'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a uno con la tabla Usuario
      Cliente.belongsTo(models.Usuario, { foreignKey: 'idusuario' })

      // Relacion uno a muchos con la tabla Pedidos
      Cliente.hasMany(models.Pedido, { foreignKey: 'idcliente' })

    }
  }
  Cliente.init({
    idusuario: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};