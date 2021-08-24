module.exports = {
  up: async (queryInterface, Sequelize) => {
    const events = [];
    let id = 1;
    for (let i = 1; i <= 7; i += 1) { // sectors
      for (let j = 1; j <= 6; j += 1) { // events for sector
        events.push({
          sectorId: i,
          eventId: j,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    return await queryInterface.bulkInsert('sector_events', events, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sector_events', null, {});
  }
};
