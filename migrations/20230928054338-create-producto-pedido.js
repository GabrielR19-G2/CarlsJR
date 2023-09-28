'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Producto_Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProducto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Producto',
          key: 'id'
        }
      },
      idPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pedido',
          key: 'id'
        }
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      instruccionAdicional: {
        type: Sequelize.STRING
      },
      importe: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Producto_Pedidos');
  }
};