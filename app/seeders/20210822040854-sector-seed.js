module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('sectors', [
      {name: 'Technology', id: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Food and Beverage', id: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Health Care', id: 3, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Financials', id: 4, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Real Estate', id: 5, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Energy', id: 6, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Industrials', id: 7, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sectors', null, {});
  }
};
