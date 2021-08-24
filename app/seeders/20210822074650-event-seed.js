module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('events', [
      {
        id: 1, 
        name: 'Optimism', 
        description: 'Being the driving force in the economy, companies in this sector have enjoyed a small boost in their stock price.',
        positive_news: true,
        effect: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2, 
        name: 'Boom', 
        description: 'Being the driving force in the economy, companies in this sector have enjoyed a boost in their stock price.',
        positive_news: true,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3, 
        name: 'Huge Boom', 
        description: 'Being the driving force in the economy, companies in this sector have enjoyed a huge boost in their stock price.',
        positive_news: true,
        effect: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4, 
        name: 'Pessimism', 
        description: 'A small decline in demand has led companies in this sector to see a decrease in their stock price.',
        positive_news: false,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5, 
        name: 'Decline', 
        description: 'A decline in demand has led companies in this sector to see a decrease in their stock price.',
        positive_news: false,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6, 
        name: 'Huge Decline', 
        description: 'A sharp decline in demand has led companies in this sector to see a decrease in their stock price.',
        positive_news: false,
        effect: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7, 
        name: 'Innovation', 
        description: "This company innovative policies have resulted in a huge boost in productivity which in turn drives up the company's value.",
        positive_news: true,
        effect: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8, 
        name: 'Innovation', 
        description: "This company's refusal to improve their policies has started to effect their business.",
        positive_news: false,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9, 
        name: 'Humanist', 
        description: "This company's recent activities in charity to raise awareness for the less unfortunate have made their products to see an increase in demand.",
        positive_news: true,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10, 
        name: 'Humanist', 
        description: "This company's working environment is unbalanced has led to worker uprising causing a decline in productivity.",
        positive_news: false,
        effect: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11, 
        name: 'Eco', 
        description: "This company has applied a new manufacturing process that outputs less toxic chemicals to the enviroment.",
        positive_news: true,
        effect: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12, 
        name: 'Eco', 
        description: "Environmentalists are voicing their discontent with how this company handling their environment policy has made many consumers to turn their back.",
        positive_news: false,
        effect: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13, 
        name: 'Celebrities', 
        description: "Lots of celebs are talking and using this company's products recently have made a surge to the demand.",
        positive_news: true,
        effect: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14, 
        name: 'Celebrities', 
        description: "The celebrity that is the brand-face for this company has been caught in an affair.",
        positive_news: false,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15, 
        name: 'Goverment', 
        description: "This company has recently won a big contract for the goverment which create optimism for their next financial reports.",
        positive_news: true,
        effect: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16, 
        name: 'Goverment', 
        description: "The goverment are investigating this company for fraud.",
        positive_news: false,
        effect: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17, 
        name: 'Marketing', 
        description: "A recent marketing campaign has created good publicity for this company.",
        positive_news: true,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18, 
        name: 'Marketing', 
        description: "A marketing disaster has caused this company to see a decrease in sales.",
        positive_news: false,
        effect: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19, 
        name: 'CEO', 
        description: "The CEO of this company has been awarded to be the best boss by Forbes.",
        positive_news: false,
        effect: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20, 
        name: 'CEO', 
        description: "The CEO of this company has been involved in a sexual harrasment with his employees.",
        positive_news: false,
        effect: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {});
  }
};
