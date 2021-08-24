import { DataTypes, where } from 'sequelize';
import sequelize from '../services/DatabaseService';
import { Event } from './event';
import { Company } from './company';

export const Sector = sequelize.define('sector', {
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
}, {
  tableName: 'sectors'
});


const createOne = async () => {
  return await Sector.create({
    name: "Jane 2",
  });
};

const getAll = async () => {
  return await Sector.findAll({
    attributes: [ 'id', 'name']
  });
};

const getOneWithCompany = async (sectorId) => {
  return Sector.findByPk(sectorId, { include: Company })
    .then((sector) => {
      return sector;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
};

const getOneByName = async (name) => {
  return await Sector.findOne({
    attributes: [ 'id', 'name'],
    where: {
      name,
    }
  });
};

const getOneByPK = async (id) => {
  return await Sector.findByPk(id, {
    attributes: [ 'id', 'name'],
  });
};

const updateOne = async () => {
  return await Sector.update({
      name: "Jane 1",
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
  getOneWithCompany,
  getOneByName,
  getOneByPK,
  updateOne,
};
