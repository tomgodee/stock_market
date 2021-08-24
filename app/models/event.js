import { DataTypes, where } from 'sequelize';
import sequelize from '../services/DatabaseService';
import { Company } from './company';
import { CompanyEvent } from './company';
import { Sector } from './sector';

export const Event = sequelize.define('event', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1024),
    allowNull: false,
  },
  positive_news: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  effect: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  // Other model options go here
  tableName: 'events'
});

Sector.belongsToMany(Event, {
  through: 'sector_events'
});
Event.belongsToMany(Sector, {
  through: 'sector_events'
});

// Event.hasMany(Company);
// Event.hasMany(Sector);

// `sequelize.define` also returns the model
// console.log(Sector === sequelize.models.Sector); 

const createOne = async () => {
  return await Event.create({
    name: "Jane 2",
    role: 'user',
    hashed_password: 'secret',
  });
};

const getAll = async () => {
  return await Event.findAll({
    attributes: [ 'id', 'name', 'description', 'positive_news', 'effect']
  });
};

const getAllCompanyEvent = async () => {
  // return await Event.findAll({
  //   // order: sequelize.random(),
  //   // limit: 3,
  //   attributes: [ 'id', 'name', 'description', 'positive_news', 'effect'],
  //   include: Company,
  // });
  return await CompanyEvent.findAll({
    include: ['company', 'event']
})
};

const getOne = async () => {
  return await Event.findOne({
    attributes: [ 'id', 'name', 'role'],
    where: {
      id: 1
    }
  });
};

const getOneByPK = async (id) => {
  return await Event.findByPk(id, {
    attributes: [ 'id', 'name', 'role'],
  });
};

const updateOne = async () => {
  return await Event.update({
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
  getAllCompanyEvent,
  getOne,
  getOneByPK,
  updateOne,
};
