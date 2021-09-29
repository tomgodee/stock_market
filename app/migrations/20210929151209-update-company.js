'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('companies', 'ticker', {
      type: Sequelize.STRING(32)
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('companies', 'ticker', {
      type: Sequelize.STRING(32)
    });
  },
};