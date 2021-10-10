import { DataTypes, where } from 'sequelize';
import sequelize from '../services/DatabaseService';

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

export default {
  createOne,
  updateOne,
};
