'use strict';

module.exports = {
  up: async (queryInterface, {INTEGER, STRING, DataTypes}) => {
    return queryInterface.createTable('shirts', {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: STRING({length: 255}),
        allowNull: true
      },
      color: {
        type: DataTypes.ENUM({
          values: ['white', 'grey', 'blue']
        }),
        allowNull: false
      },
      size: {
        type: INTEGER,
        allowNull: false
      }
    }, {
      timestamps: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shirts');
  }
};
