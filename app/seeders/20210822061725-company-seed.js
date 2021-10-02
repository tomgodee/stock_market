module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('companies', [
      {id: 1, name: 'Orange', stock_price: 148.19, description: 'A leading tech company well-known for their high pricing.', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, name: 'Samsing', stock_price: 61.87, description: 'A family Singapore-based company majoring in electronics and telecommunication services.', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, name: 'Imizen', stock_price: 399.95, description: 'Dubbed as the king of retail market, this company also own a big share in cloud computing.', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, name: 'Chill', stock_price: 546.88, description: "A company that own much of the streaming service market share even with their 'meh' content.", sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, name: 'Gigantichard', stock_price: 304.36, description: 'Well-known for their OS called Doors and their weird counting system.', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 6, name: 'Doodle', stock_price: 748.59, description: 'A company that can find whatever you need on the Internet as well as track whatever you do.', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 7, name: 'Facelook', stock_price: 359.37, description: 'The biggest social media company that own not only all your data but your life as well.', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 8, name: 'Nexus Frontiertech', stock_price: 222, description: 'A small cute company that the creator of this game is working for :)', sectorId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 9, name: 'Birdhouse', stock_price: 126.90, description: 'A major company in the F&B sector that is infamouse for their enslaving system.', sectorId: 2, createdAt: new Date(), updatedAt: new Date()},
      {id: 10, name: 'Koka-kola', stock_price: 56.64, description: 'A company that own the black carbonated water that makes you fat.', sectorId: 2, createdAt: new Date(), updatedAt: new Date()},
      {id: 11, name: 'Vinadairy', stock_price: 33.85, description: 'A huge company with dairy products that contain mostly chemicals.', sectorId: 2, createdAt: new Date(), updatedAt: new Date()},
      {id: 12, name: 'Dad & Son', stock_price: 179.44, description: 'Infamous for their cancerous cosmetics products.', sectorId: 3, createdAt: new Date(), updatedAt: new Date()},
      {id: 13, name: 'Trapphaco', stock_price: 30.44, description: 'A Vietnamese pharmaceutical company.', sectorId: 3, createdAt: new Date(), updatedAt: new Date()},
      {id: 14, name: 'Tekkombank', stock_price: 22.33, description: 'One of the biggest bank in Vietnam with a terrible mobile app.', sectorId: 4, createdAt: new Date(), updatedAt: new Date()},
      {id: 15, name: 'PJ Moregan & Catch', stock_price: 154.72, description: 'Huge and bad financial firm.', sectorId: 4, createdAt: new Date(), updatedAt: new Date()},
      {id: 16, name: 'HSBC', stock_price: 27.15, description: 'A big bank that is everywhere.', sectorId: 4, createdAt: new Date(), updatedAt: new Date()},
      {id: 17, name: 'Vim', stock_price: 44.56, description: 'Huge contractor in the Real Estate market. Infamous for their zoning strategy to increase the price.', sectorId: 5, createdAt: new Date(), updatedAt: new Date()},
      {id: 18, name: 'Fake Land Contractor Group', stock_price: 49, description: 'Build bunch of condos at a price that no ordinary worker can afford.', sectorId: 5, createdAt: new Date(), updatedAt: new Date()},
      {id: 19, name: 'Kennedy-Wilson Holdings Inc.', stock_price: 21.36, description: 'A big real estate company.', sectorId: 5, createdAt: new Date(), updatedAt: new Date()},
      {id: 20, name: 'Petrolamex Corp', stock_price: 48, description: 'A company that mine the precious crude oil in our soil and sell for peanuts.', sectorId: 6, createdAt: new Date(), updatedAt: new Date()},
      {id: 21, name: 'Chevron Corporation', stock_price: 197.7 , description: 'A company that intefere in the Middle East war to profit themselves.', sectorId: 6, createdAt: new Date(), updatedAt: new Date()},
      {id: 22, name: 'Folkswagen Group', stock_price: 225.59 , description: 'A German multinational automotive manufacturing.', sectorId: 7, createdAt: new Date(), updatedAt: new Date()},
      {id: 23, name: 'Honza', stock_price: 29.33, description: 'A Japanese public multinational conglomerate manufacturer of automobiles, motorcycles.', sectorId: 7, createdAt: new Date(), updatedAt: new Date()},
      {id: 24, name: 'Yoyota Group', stock_price: 81.18 , description: 'One of the largest automobile manufacturers in the world, producing about 10 million vehicles per year.', sectorId: 7, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};
