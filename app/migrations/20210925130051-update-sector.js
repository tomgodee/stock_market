'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sectors', 'description', {
      type: Sequelize.STRING(1024)
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('sectors', 'description');
  }
};
