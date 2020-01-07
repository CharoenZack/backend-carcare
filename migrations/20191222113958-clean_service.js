'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clean_service', {
      clean_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      service_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      service_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      service_duration: {
        type: Sequelize.TIME,
        allowNull: false
      },
      type_car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'type_car'
          },
          key: "type_car_id"
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clean_service')
  }
};
