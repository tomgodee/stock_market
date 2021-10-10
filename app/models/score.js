import { DataTypes, where } from 'sequelize';
import sequelize from '../services/DatabaseService';
import { User } from './user';

export const Score = sequelize.define('score', {
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
  tableName: 'scores'
});

const createOne = async (score, userId) => {
  return await Score.create({
    score,
    userId,
  });
};

const updateOne = async (score, userId) => {
  return await Score.update({
      score,
    },
    { 
      where: {
        userId,
      }
  });
};

const getMany = async (score, userId) => {
  return await Score.findAll({
    attributes: [ 'id', 'score', 'createdAt'],
    order: [['score', 'DESC']],
    limit: 10,
    include: [{
      model: User,
      attributes: [ 'id', 'name'],
    }]
  });
};

export default {
  createOne,
  updateOne,
  getMany,
};
