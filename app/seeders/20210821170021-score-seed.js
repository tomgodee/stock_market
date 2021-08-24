module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('scores', [
      {score: 1000, id: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      {score: 2000, id: 2, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('scores', null, {});
  }
};
