'use strict';

module.exports = {
    up: async (queryInterface, {INTEGER, STRING}) => {
        return queryInterface.createTable('pants', {
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
                type: STRING({length: 255}),
                allowNull: false
            },
            W: {
                type: INTEGER,
                allowNull: false
            },
            L: {
                type: INTEGER,
                allowNull: false
            }
        }, {
            timestamps: false
        })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('pants');
    }
};
