module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('sectors', [
      {name: 'Technology', id: 1, description: 'Comprised of businesses that sell goods and services in electronics, software, computers, artificial intelligence, and other industries related to information technology.' , createdAt: new Date(), updatedAt: new Date()},
      {name: 'Food and Beverage', id: 2, description: 'All the companies involved in transforming raw agricultural goods into consumer food products.' , createdAt: new Date(), updatedAt: new Date()},
      {name: 'Health Care', id: 3, description: 'Consists of businesses that provide medical services, manufacture medical equipment or drugs.' , createdAt: new Date(), updatedAt: new Date()},
      {name: 'Financials', id: 4, description: 'Made up of firms and institutions that provide financial services to commercial and retail customers.' , createdAt: new Date(), updatedAt: new Date()},
      {name: 'Real Estate', id: 5, description: 'Encompasses the many facets of property, including development, appraisal, marketing, selling, leasing, and management of commercial, industrial, residential, and agricultural properties.' , createdAt: new Date(), updatedAt: new Date()},
      {name: 'Energy', id: 6, description: 'Includes companies involved in the exploration and development of oil or gas reserves, oil and gas drilling, and refining.' , createdAt: new Date(), updatedAt: new Date()},
      {name: 'Industrials', id: 7, description: 'Includes companies whose businesses are dominated by one of the following activities: The manufacture and distribution of capital goods, including aerospace & defense, construction, engineering & building products, electrical equipment and industrial machinery.' , createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sectors', null, {});
  }
};
