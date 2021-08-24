'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sector_events', {
      sectorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sector_events');
  }
};