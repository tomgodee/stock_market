import { DataTypes, where } from 'sequelize';
import sequelize from '../services/DatabaseService';
import { User } from './user';

export const Score = sequelize.define('score', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  // Other model options go here
  tableName: 'scores'
});

// Score.belongsTo(User, { as: 'user', foreignKey: 'userId'});

// `sequelize.define` also returns the model
// console.log(Score === sequelize.models.Score); 

const createOne = async () => {
  return await Score.create({
    name: "Jane 2",
    role: 'user',
    hashed_password: 'secret',
  });
};

const getAll = async () => {
  return await Score.findAll({
    attributes: [ 'id', 'name', 'role']
  });
};

const getOne = async () => {
  return await Score.findOne({
    attributes: [ 'id', 'name', 'role'],
    where: {
      id: 1
    }
  });
};

const getOneByPK = async (id) => {
  return await Score.findByPk(id, {
    attributes: [ 'id', 'name', 'role'],
  });
};

const updateOne = async () => {
  return await Score.update({
      name: "Jane 1",
      role: 'user',
      hashed_password: 'secret',
    },
    { 
      where: {
        id: 1,
      }
  });
};

export default {
  createOne,
  getAll,
  getOne,
  getOneByPK,
  updateOne,
};
