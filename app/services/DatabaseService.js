import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:zxc321@localhost:5432/stock_market');

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(() => {
  console.error('Unable to connect to the database:', error);
});

(async () => {
  await sequelize.sync();
  // Code here
})();

export default sequelize;
