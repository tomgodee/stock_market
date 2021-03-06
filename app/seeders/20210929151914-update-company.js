'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('companies', { ticker: 'ORNG' }, { id: 1 })
    await queryInterface.bulkUpdate('companies', { ticker: 'SSG' }, { id: 2 })
    await queryInterface.bulkUpdate('companies', { ticker: 'IMZ' }, { id: 3 })
    await queryInterface.bulkUpdate('companies', { ticker: 'CHL' }, { id: 4 })
    await queryInterface.bulkUpdate('companies', { ticker: 'MCS' }, { id: 5 })
    await queryInterface.bulkUpdate('companies', { ticker: 'DDL' }, { id: 6 })
    await queryInterface.bulkUpdate('companies', { ticker: 'FLK' }, { id: 7 })
    await queryInterface.bulkUpdate('companies', { ticker: 'NFT' }, { id: 8 })
    await queryInterface.bulkUpdate('companies', { ticker: 'BIH' }, { id: 9 })
    await queryInterface.bulkUpdate('companies', { ticker: 'KKK' }, { id: 10 })
    await queryInterface.bulkUpdate('companies', { ticker: 'VND' }, { id: 11 })
    await queryInterface.bulkUpdate('companies', { ticker: 'DDS' }, { id: 12 })
    await queryInterface.bulkUpdate('companies', { ticker: 'TPC' }, { id: 13 })
    await queryInterface.bulkUpdate('companies', { ticker: 'TKB' }, { id: 14 })
    await queryInterface.bulkUpdate('companies', { ticker: 'PJMC' }, { id: 15 })
    await queryInterface.bulkUpdate('companies', { ticker: 'HSB' }, { id: 16 })
    await queryInterface.bulkUpdate('companies', { ticker: 'VIM' }, { id: 17 })
    await queryInterface.bulkUpdate('companies', { ticker: 'FLC' }, { id: 18 })
    await queryInterface.bulkUpdate('companies', { ticker: 'KWH' }, { id: 19 })
    await queryInterface.bulkUpdate('companies', { ticker: 'PTL' }, { id: 20 })
    await queryInterface.bulkUpdate('companies', { ticker: 'CHV' }, { id: 21 })
    await queryInterface.bulkUpdate('companies', { ticker: 'FWG' }, { id: 22 })
    await queryInterface.bulkUpdate('companies', { ticker: 'HZA' }, { id: 23 })
    await queryInterface.bulkUpdate('companies', { ticker: 'YYT' }, { id: 24 })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 1 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 2 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 3 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 4 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 5 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 6 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 7 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 8 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 9 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 10 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 11 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 12 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 13 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 14 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 15 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 16 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 17 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 18 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 19 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 20 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 21 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 22 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 23 })
    await queryInterface.bulkUpdate('companies', { ticker: null }, { id: 24 })
  }
};
