module.exports = {
  up: async (queryInterface, Sequelize) => {
    const events = [];
    let id = 1;
    for (let i = 1; i <= 24; i += 1) { // companies
      for (let j = 7; j <= 20; j += 1) { // events for company
        events.push({
          companyId: i,
          eventId: j,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        id += 1;
      }
    }
    return await queryInterface.bulkInsert('company_events', events, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('company_events', null, {});
  }
};
