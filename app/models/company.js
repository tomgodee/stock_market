import { DataTypes, where } from 'sequelize';
import sequelize from '../services/DatabaseService';
import { Event } from './event';
import sectorModel, { Sector } from './sector';

export const Company = sequelize.define('company', {
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
  stock_price: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sectorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'companies'
});

export const CompanyEvent = sequelize.define('company_event', {
  companyId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  eventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
}, {
  tableName: 'company_events'
});
CompanyEvent.belongsTo(Company, {
  foreignKey: 'companyId',
});

CompanyEvent.belongsTo(Event, {
  foreignKey: 'eventId',
});

Company.belongsToMany(Event, {
  through: 'company_events'
});
Event.belongsToMany(Company, {
  through: 'company_events'
});

Sector.hasMany(Company, {
  foreignKey: 'sectorId'
});
Company.belongsTo(Sector);

const createOne = async () => {
  return await Company.create({
    name: "Jane 2",
    role: 'user',
    hashed_password: 'secret',
  });
};

const getAll = async () => {
  return await Company.findAll({
    attributes: [ 'id', 'name', 'description', 'stock_price']
  });
};

const getAllBySector = async (sectorName) => {
  const sector = await sectorModel.getOneByName(sectorName);
  return await Company.findAll({
    attributes: [ 'id', 'name', 'description', 'stock_price'],
    where: {
      sectorId: sector.id,
    }
  });
};

const getOne = async () => {
  return await Company.findOne({
    attributes: [ 'id', 'name', 'stock_price', 'description'],
    where: {
      id: 1
    }
  });
};

const getOneByPK = async (id) => {
  return await Company.findByPk(id, {
    attributes: [ 'id', 'name', 'stock_price', 'description'],
  });
};

const updateOne = async () => {
  return await Company.update({
      name: "Jane 1",
      stock_price: 100,
      description: 'secret',
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
  getAllBySector,
  getOne,
  getOneByPK,
  updateOne,
};
